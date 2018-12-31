import { SwaggerHandler } from "../handlers/swagger_handler";
import { RouteInfo } from "fortjs";
import { DATA_TYPE } from "../enums";
import { extractAndSaveModel } from "../helpers/extract_model";
import { SwaggerParamSchema } from "../types/swagger_param_schema";
import { SwaggerRef } from "../types/swagger_ref";
import { SwaggerCustomParam } from "../types/swagger_custom_param";
import { getParamSchema } from "../helpers/get_param_schema";
import { BodyInfo } from "../types/body_info";

export type SwaggerOutputPath = {
    summary?: string;
    operationId: string;
    tags: string[];
    parameters: SwaggerOutputParamInfo[],
    responses: SwaggerOutputResponse
}

export type SwaggerOutputResponse = {
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

// export type SwaggerParamSchemaType = {
//     type: DATA_TYPE;
//     format: string;
// }

export enum SWAGGER_OUTPUT_PARAM {
    Query = "query",
    Path = "path",
    Body = "body"
}

export class SwaggerFormatter {
    format(routes: RouteInfo[]) {
        const paths = [];
        routes.forEach(route => {
            const swaggerRouteData = SwaggerHandler.routes.find(qry => qry.className === route.controllerName);
            let pathName = route.path;
            if (pathName[0] === "/") {
                pathName = route.path.substr(1)
            }
            const swaggerPath = {
                [`/${pathName}`]: {

                }
            }
            route.workers.forEach(worker => {
                let pattern = worker.pattern;
                if (pattern[0] !== "/") {
                    pattern = `/${pattern}`;
                }

                // add multiple route for all http method allowed for a single path 
                worker.methodsAllowed.forEach(httpMethod => {
                    swaggerPath[pattern] = {
                        operationId: worker.workerName,
                        parameters: this.getParams_(route.controllerName, worker.workerName),
                        tags: [pathName],
                        responses: this.getResponses_(route.controllerName, worker.workerName)
                    } as SwaggerOutputPath
                })
            });
        });
    }

    private getResponses_(className: string, methodName: string) {
        const result: SwaggerOutputResponse = { content: {} };
        const workerInfo = SwaggerHandler.routes.find(qry => qry.className === className).
            workers.find(qry => qry.methodName === methodName);

        workerInfo.responses.forEach(response => {
            result.content[response.contentType] = {
                schema: getParamSchema(response.value)
            } as SwaggerParamSchema;
        })
        return result;
    }

    private getParams_(className: string, methodName: string) {
        const params: SwaggerOutputParamInfo[] = [];
        const workerInfo = SwaggerHandler.routes.find(qry => qry.className === className).
            workers.find(qry => qry.methodName === methodName);
        // from route params
        workerInfo.params.forEach(param => {
            params.push({
                in: SWAGGER_OUTPUT_PARAM.Path,
                name: param.variableName,
                required: true,
                schema: getParamSchema(param.value)
            })
        });

        // from query
        workerInfo.queries.forEach(query => {
            params.push({
                in: SWAGGER_OUTPUT_PARAM.Query,
                name: query.variableName,
                required: true,
                schema: getParamSchema(query.value)
            })
        });

        // from body
        const body = (workerInfo.body as BodyInfo);
        if (body != null) {
            params.push({
                in: SWAGGER_OUTPUT_PARAM.Body,
                name: body.variableName,
                required: true,
                schema: getParamSchema(body.value)
            })
        }

        return params;
    }

    private formatResponse_(className: string) {


    }
}