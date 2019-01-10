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


export class SwaggerFormatter {
    format(option: SwaggerOption) {
        const routes = Global.routes;
        const swaggerJson: SwaggerStructure = {
            openapi: "3.0.0",
            info: option.appInfo,
            servers: option.servers,
            components: {
                schemas: this.getModels_()
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

                route.workers.forEach(worker => {
                    let pattern = worker.pattern;
                    if (pattern[0] !== "/") {
                        pattern = `/${pattern}`;
                    }

                    if (swaggerPaths[pattern] == null) {
                        swaggerPaths[pattern] = {

                        }
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
                        } as SwaggerOutputPath
                    })

                });

            }
        });
        swaggerJson.paths = swaggerPaths;
        return swaggerJson;
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
        const models = {

        }
        SwaggerHandler.models.forEach(model => {
            const obj = model.classInstance;
            const keys = Object.keys(obj);
            // remove ignored prop
            model.ignoredProperty.forEach(prop => {
                const index = keys.indexOf(prop);
                keys.splice(index, 1);
            })
            const properties = {};
            keys.forEach(key => {
                const propValue = obj[key];
                const dataType = getDataType(propValue);
                properties[key] = {
                    type: dataType
                } as SwaggerCustomParam;
            });
            models[model.className] = {
                required: keys,
                properties: properties
            } as SwaggerOutputModelInfo;
        });
        return models;
    }

    private getResponses_(className: string, methodName: string) {
        const result = {};
        const workerInfo = SwaggerHandler.controllers.find(qry => qry.className === className).
            workers.find(qry => qry.methodName === methodName);

        workerInfo.responses.forEach(response => {
            result[response.statusCode] = { content: {} } as SwaggerOutputResponseContent;
            response.contentType.forEach(contentType => {
                result[response.statusCode].content[contentType] = {
                    schema: getParamSchema(response.value)
                } as SwaggerParamSchema;
            });
        })
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
                })
            });

            // from query
            workerInfo.queries.forEach(query => {
                params.push({
                    in: SWAGGER_OUTPUT_PARAM.Query,
                    name: query.variableName,
                    required: true,
                    schema: getParamSchema(query.value),
                    description: query.description
                })
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
                })
            }
        }

        return params;
    }

}