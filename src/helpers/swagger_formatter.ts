import { SwaggerHandler } from "../handlers/swagger_handler";
import { MIME_TYPE } from "fortjs";
import { SwaggerParamSchema } from "../types/swagger_param_schema";
import { SwaggerCustomParam } from "../types/swagger_custom_param";
import { getParamSchema } from "../helpers/get_param_schema";
import { BodyInfo } from "../types/body_info";
import { getDataType } from "../helpers/get_data_type";
import { SwaggerOption } from "../types/swagger_option";
import { Global } from "../global";
import { SwaggerStructure } from "../types/swagger_structure";
import { SwaggerOutputPath } from "../types/swagger_output_path";
import { SwaggerOutputModelInfo } from "../types/swagger_output_model_info";
import { SwaggerOutputResponseContent } from "../types/swagger_output_response_content";
import { SwaggerOutputParamInfo } from "../types/swagger_output_param_info";
import { SWAGGER_OUTPUT_PARAM } from "../enums/swagger_output_param";
import { DATA_TYPE } from "../enums";
import { SwaggerRef } from "../types/swagger_ref";
import { extractAndSaveModel } from "./extract_model";
import { getClassName } from "./get_class_name";
import { SwaggerModelInfo } from "../types/swagger_model_info";
import { isCustomClass } from "./is_custom_class";
import { SwaggerLogger } from "../utils";


export class SwaggerFormatter {
    format(option: SwaggerOption) {
        const routes = Global.routes;
        const swaggerJson: SwaggerStructure = {
            openapi: "3.0.0",
            info: option.appInfo,
            servers: option.servers,
            components: {
                schemas: this.getModels_(),
                securitySchemes: option.securitySchemes
            }
        } as SwaggerStructure;
        const swaggerPaths = {};
        routes.forEach(route => {
            const swaggerRouteData = SwaggerHandler.controllers.find(qry => qry.className === route.controllerName);
            if (swaggerRouteData != null) {
                let pathName = route.path;
                if (pathName[0] === "/") {
                    pathName = route.path.substr(1)
                }
                const controllerSecurity = this.getControllerSecurity_(route.controllerName);
                route.workers.forEach(worker => {
                    let pattern = worker.pattern;
                    if (pattern[0] !== "/") {
                        pattern = `/${pattern}`;
                    }

                    if (swaggerPaths[pattern] == null) {
                        swaggerPaths[pattern] = {

                        };
                    }
                    // add multiple route for all http method allowed for a single path 
                    worker.methodsAllowed.forEach(httpMethod => {
                        swaggerPaths[pattern][httpMethod.toLowerCase()] = {
                            operationId: worker.workerName,
                            consumes: [MIME_TYPE.Json, MIME_TYPE.Xml, MIME_TYPE.Html, MIME_TYPE.Text, "*/*"],
                            parameters: this.getParams_(route.controllerName, worker.workerName),
                            tags: [pathName],
                            responses: this.getResponses_(route.controllerName, worker.workerName),
                            summary: this.getSummary_(route.controllerName, worker.workerName),
                            description: this.getDescription_(route.controllerName, worker.workerName),
                            security: controllerSecurity as any
                        } as SwaggerOutputPath;
                    });

                });

            }
        });
        swaggerJson.paths = swaggerPaths;
        return swaggerJson;
    }

    private getControllerSecurity_(className: string) {
        const controller = SwaggerHandler.controllers.find(qry => qry.className === className);
        if (controller != null) {
            const securities = controller.security;
            if (securities != null) {
                const outputSecurity: { [type: string]: string[] }[] = [];
                securities.forEach(security => {
                    outputSecurity.push({
                        [security.type]: security.scopes
                    });
                });
                return outputSecurity;
            }
        }
        return null;
    }

    private getSummary_(className: string, propName: string) {
        const classInfo = SwaggerHandler.classInfos.find(qry => qry.className === className);
        if (classInfo != null) {
            const savedProp = classInfo.props.find(qry => qry.propName === propName);
            if (savedProp != null) {
                return savedProp.summary;
            }
        }
        return null;
    }

    private getDescription_(className: string, propName: string) {
        const classInfo = SwaggerHandler.classInfos.find(qry => qry.className === className);
        if (classInfo != null) {
            const savedProp = classInfo.props.find(qry => qry.propName === propName);
            if (savedProp != null) {
                return savedProp.description;
            }
        }
        return null;
    }

    private getModels_() {
        const modelsInfo = {

        };
        const createSwaggerModelSchemas = (model: SwaggerModelInfo) => {
            if (isCustomClass(model.classInstance)) {
                const obj = model.classInstance;
                const keys = Object.keys(obj);
                // remove ignored prop
                model.ignoredProperty.forEach(prop => {
                    const index = keys.indexOf(prop);
                    if (index >= 0) {
                        keys.splice(index, 1);
                    }
                });
                const properties = {};
                keys.forEach(key => {
                    const propValue = obj[key];
                    const dataType = getDataType(propValue);
                    const paramInfo = {
                        type: dataType
                    } as SwaggerCustomParam;
                    if (dataType === DATA_TYPE.Array && propValue.length > 0) {
                        const firstItem = propValue[0];
                        const clasName = getClassName(firstItem);
                        if (clasName && !SwaggerHandler.isModelExist(clasName)) {
                            const modelInfo = {
                                classInstance: firstItem,
                                className: clasName,
                                ignoredProperty: [],
                                optionals: []
                            } as SwaggerModelInfo;
                            SwaggerHandler.saveModel(modelInfo);
                            createSwaggerModelSchemas(modelInfo);
                        }
                        paramInfo.items = getParamSchema(firstItem) as any
                    }
                    properties[key] = paramInfo;
                });
                model.optionals.forEach(optional => {
                    const index = keys.indexOf(optional);
                    if (index >= 0) {
                        keys.splice(index, 1);
                    }
                });
                modelsInfo[model.className] = {
                    required: keys,
                    properties: properties
                } as SwaggerOutputModelInfo;
            }
        }
        SwaggerHandler.models.forEach(createSwaggerModelSchemas);
        return modelsInfo;
    }

    private getResponses_(className: string, methodName: string) {
        const result = {};
        const workerInfo = SwaggerHandler.controllers.find(qry => qry.className === className).
            workers.find(qry => qry.methodName === methodName);
        if (workerInfo != null) {
            workerInfo.responses.forEach(response => {
                result[response.statusCode] = { content: {} } as SwaggerOutputResponseContent;
                response.contentType.forEach(contentType => {
                    result[response.statusCode].content[contentType] = {
                        schema: getParamSchema(response.value)
                    } as SwaggerParamSchema;
                });
            });
        }
        else {
            SwaggerLogger.warning(`No response is defined for worker - "${methodName}" inside controller "${className}".`);
        }
        return result;
    }

    private getParams_(className: string, methodName: string) {
        const params: SwaggerOutputParamInfo[] = [];

        const workerInfo = SwaggerHandler.controllers.find(qry => qry.className === className)
            .workers.find(qry => qry.methodName === methodName);
        if (workerInfo != null) {
            // from route params
            workerInfo.params.forEach(param => {
                params.push({
                    in: SWAGGER_OUTPUT_PARAM.Path,
                    name: param.variableName,
                    required: true,
                    schema: getParamSchema(param.value),
                    description: param.description
                });
            });

            // from query
            workerInfo.queries.forEach(query => {
                params.push({
                    in: SWAGGER_OUTPUT_PARAM.Query,
                    name: query.variableName,
                    required: true,
                    schema: getParamSchema(query.value),
                    description: query.description
                });
            });

            // from body
            const body = (workerInfo.body as BodyInfo);
            if (body != null) {
                params.push({
                    in: SWAGGER_OUTPUT_PARAM.Body,
                    name: body.variableName,
                    required: true,
                    schema: getParamSchema(body.value),
                    description: body.description
                });
            }
        }

        return params;
    }

}