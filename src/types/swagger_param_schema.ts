import { SwaggerCustomParam } from "./swagger_custom_param";
import { SwaggerRef } from "./swagger_ref";

export type SwaggerParamSchema = {
    schema: SwaggerRef | SwaggerCustomParam
}