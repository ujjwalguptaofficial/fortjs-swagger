import { SwaggerOutputModelInfo } from "./swagger_output_model_info";
export declare type SwaggerComponent = {
    schemas: {
        [modelName: string]: SwaggerOutputModelInfo;
    };
    securitySchemes: any;
};
