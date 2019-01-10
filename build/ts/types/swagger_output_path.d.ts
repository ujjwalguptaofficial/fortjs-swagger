import { SwaggerOutputResponseContent } from "./swagger_output_response_content";
import { SwaggerOutputParamInfo } from "./swagger_output_param_info";
import { MIME_TYPE } from "fortjs";
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
