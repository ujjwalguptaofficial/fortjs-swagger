import { SwaggerCustomParam } from "./swagger_custom_param";

export type SwaggerOutputModelInfo = {
    required: string[];
    properties: { [propName: string]: SwaggerCustomParam }
}