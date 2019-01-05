import { SwaggerHandler } from "../handlers/swagger_handler";
import { RouteInfo, HTTP_STATUS_CODE, MIME_TYPE } from "fortjs";
import { DATA_TYPE } from "../enums";
import { extractAndSaveModel } from "../helpers/extract_model";
import { SwaggerParamSchema } from "../types/swagger_param_schema";
import { SwaggerRef } from "../types/swagger_ref";
import { SwaggerCustomParam } from "../types/swagger_custom_param";
import { getParamSchema } from "../helpers/get_param_schema";
import { BodyInfo } from "../types/body_info";
import { SwaggerOption } from "./swagger";
import { ApplicationInfo } from "../types/application_info";
import { ServerInfo } from "../types/server_info";
import { getDataType } from "../helpers/get_data_type";

export type SwaggerOutputPath = {
    summary?: string;
    operationId: string;
    consumes: MIME_TYPE[];
    tags: string[];
    parameters: SwaggerOutputParamInfo[],
    responses: { [statusCode: string]: SwaggerOutputResponseContent }
}

export type SwaggerOutputResponseContent = {
    description?: string;
    content: { [mimeType: string]: SwaggerParamSchema }
}


export type SwaggerOutputParamInfo = {
    name: string;
    in: SWAGGER_OUTPUT_PARAM,
    description?: string;
    required: boolean;
    schema: SwaggerRef | SwaggerCustomParam
}

export enum SWAGGER_OUTPUT_PARAM {
    Query = "query",
    Path = "path",
    Body = "body"
}

export type SwaggerStructure = {
    openapi: string;
    info: ApplicationInfo;
    servers: ServerInfo[];
    paths: any;
    components: SwaggerComponent;
    //models: { [modelName: string]: SwaggerModelInfo }
}

export type SwaggerComponent = {
    schemas: { [modelName: string]: SwaggerModelInfo }
}

export type SwaggerModelInfo = {
    required: string[];
    properties: { [propName: string]: SwaggerCustomParam }
}

export class SwaggerFormatter {
    format(option: SwaggerOption, routes: RouteInfo[]) {
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
            const swaggerRouteData = SwaggerHandler.routes.find(qry => qry.className === route.controllerName);
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
                    // const swaggerPath = {
                    //     [pattern]: {

                    //     }
                    // }
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
                            responses: this.getResponses_(route.controllerName, worker.workerName)
                        } as SwaggerOutputPath
                    })

                });
                // swaggerPaths[`/${pathName}`] = swaggerPath;
            }
        });
        swaggerJson.paths = swaggerPaths;
        return swaggerJson;
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
            } as SwaggerModelInfo;
        });
        return models;
    }

    private getResponses_(className: string, methodName: string) {
        const result = {};
        const workerInfo = SwaggerHandler.routes.find(qry => qry.className === className).
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
        // const swaggerRouteInfo = 
        // if (swaggerRouteInfo != null) {
        const workerInfo = SwaggerHandler.routes.find(qry => qry.className === className)
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
        // }
        console.log("params", params);
        return params;
    }

}