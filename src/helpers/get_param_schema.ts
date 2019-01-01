import { extractAndSaveModel } from "./extract_model";
import { getDataType } from "./get_data_type";
import { DATA_TYPE } from "..";
import { SwaggerParamSchema } from "../types/swagger_param_schema";
import { SwaggerRef } from "../types/swagger_ref";
import { SwaggerCustomParam } from "../types/swagger_custom_param";

export const getParamSchema = (value) => {
    const modelName = extractAndSaveModel(value);
    const dataType = getDataType(value);
    if (modelName.length > 0) { // value is model
        const modelRefString = `#/components/schemas/${modelName}`;
        const refValue: SwaggerRef = {
            $ref: modelRefString
        };
        if (dataType === DATA_TYPE.Function) {
            return refValue;
        }
        else {
            return {
                type: DATA_TYPE.Array,
                items: refValue
            } as SwaggerCustomParam;
        }
    }
    else {
        return {
            type: dataType,
            example: value
        } as SwaggerCustomParam;
    }
}