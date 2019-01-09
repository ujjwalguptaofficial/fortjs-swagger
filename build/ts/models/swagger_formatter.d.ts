import { RouteInfo, MIME_TYPE } from "fortjs";
import { SwaggerParamSchema } from "../types/swagger_param_schema";
import { SwaggerRef } from "../types/swagger_ref";
import { SwaggerCustomParam } from "../types/swagger_custom_param";
import { ApplicationInfo } from "../types/application_info";
import { ServerInfo } from "../types/server_info";
import { SwaggerOption } from "../types/swagger_option";
export declare type SwaggerOutputPath = {
    summary?: string;
    description?: string;
    operationId: string;
    consumes: MIME_TYPE[];
    tags: string[];
    parameters: SwaggerOutputParamInfo[];
    responses: {
        [statusCode: string]: SwaggerOutputResponseContent;
    };
};
export declare type SwaggerOutputResponseContent = {
    description?: string;
    content: {
        [mimeType: string]: SwaggerParamSchema;
    };
};
export declare type SwaggerOutputParamInfo = {
    name: string;
    in: SWAGGER_OUTPUT_PARAM;
    description?: string;
    required: boolean;
    schema: SwaggerRef | SwaggerCustomParam;
};
export declare enum SWAGGER_OUTPUT_PARAM {
    Query = "query",
    Path = "path",
    Body = "body"
}
export declare type SwaggerStructure = {
    openapi: string;
    info: ApplicationInfo;
    servers: ServerInfo[];
    paths: any;
    components: SwaggerComponent;
};
export declare type SwaggerComponent = {
    schemas: {
        [modelName: string]: SwaggerModelInfo;
    };
};
export declare type SwaggerModelInfo = {
    required: string[];
    properties: {
        [propName: string]: SwaggerCustomParam;
    };
};
export declare class SwaggerFormatter {
    format(option: SwaggerOption, routes: RouteInfo[]): SwaggerStructure;
    private getSummary_;
    private getDescription_;
    private getModels_;
    private getResponses_;
    private getParams_;
}
