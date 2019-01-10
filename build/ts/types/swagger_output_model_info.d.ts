import { SwaggerCustomParam } from "./swagger_custom_param";
export declare type SwaggerOutputModelInfo = {
    required: string[];
    properties: {
        [propName: string]: SwaggerCustomParam;
    };
};
