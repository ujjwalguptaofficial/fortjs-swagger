import { SwaggerParamSchema } from "./swagger_param_schema";
export declare type SwaggerOutputResponseContent = {
    description?: string;
    content: {
        [mimeType: string]: SwaggerParamSchema;
    };
};
