import { SwaggerParamSchema } from "./swagger_param_schema";

export type SwaggerOutputResponseContent = {
    description?: string;
    content: { [mimeType: string]: SwaggerParamSchema }
}
