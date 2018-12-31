import { RouteInfo } from "fortjs";
import { SwaggerParamSchema } from "../types/swagger_param_schema";
import { SwaggerRef } from "../types/swagger_ref";
import { SwaggerCustomParam } from "../types/swagger_custom_param";
export declare type SwaggerOutputPath = {
    summary?: string;
    operationId: string;
    tags: string[];
    parameters: SwaggerOutputParamInfo[];
    responses: SwaggerOutputResponse;
};
export declare type SwaggerOutputResponse = {
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
export declare class SwaggerFormatter {
    format(routes: RouteInfo[]): void;
    private getResponses_;
    private getParams_;
    private formatResponse_;
}
