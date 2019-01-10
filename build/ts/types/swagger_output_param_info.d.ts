import { SwaggerRef } from "./swagger_ref";
import { SwaggerCustomParam } from "./swagger_custom_param";
import { SWAGGER_OUTPUT_PARAM } from "../enums/swagger_output_param";
export declare type SwaggerOutputParamInfo = {
    name: string;
    in: SWAGGER_OUTPUT_PARAM;
    description?: string;
    required: boolean;
    schema: SwaggerRef | SwaggerCustomParam;
};
