import { SwaggerOutputModelInfo } from "./swagger_output_model_info";

export type SwaggerComponent = {
    schemas: { [modelName: string]: SwaggerOutputModelInfo }
}