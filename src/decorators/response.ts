import { HTTP_STATUS_CODE, MIME_TYPE } from "fortjs";
import { SwaggerHandler } from "../handlers/swagger_handler";
import { getDataType } from "../helpers/get_data_type";
import { extractAndSaveModel } from "../helpers/extract_model";
import { SwaggerResponse, SwaggerModelResponse, SwaggerCustomTypeResponse } from "../types/swagger_response";
import { DATA_TYPE } from "../enums";

export const Response = (statusCode: HTTP_STATUS_CODE, value: any, contentType?: MIME_TYPE): MethodDecorator => {
    return (target: any, methodName: string, descriptor: PropertyDescriptor) => {
        const className = (target.constructor.name as string);
        const modelName = extractAndSaveModel(value);
        const responseValue = getResponseValue(value);
        const saveResponse = (mimeType) => {
            SwaggerHandler.saveResponse(className, methodName, mimeType, {
                statusCode: statusCode,
                value: responseValue
            })
        };
        //responseValue.description = contentType;
        if (modelName.length > 0) {
            [MIME_TYPE.Json, MIME_TYPE.Xml].forEach(type => {
                saveResponse(type);
            });
        }
        else {
            if (contentType == null) {
                contentType = MIME_TYPE.Text;
            }
            saveResponse(contentType);
        }
    };
}

const getResponseValue = (value) => {
    const modelName = extractAndSaveModel(value);
    const dataType = getDataType(value);
    if (modelName.length > 0) { // value is model
        const modelRefString = `#/models/${modelName}`;
        const swaggerModelSchema: SwaggerModelResponse = {
            $ref: modelRefString
        };
        if (dataType === DATA_TYPE.Function) {
            return {
                schema: swaggerModelSchema
            } as SwaggerResponse;
        }
        else {
            return {
                schema: {
                    type: DATA_TYPE.Array,
                    items: swaggerModelSchema
                } as SwaggerCustomTypeResponse
            } as SwaggerResponse;
        }
    }
    else {
        return {
            schema: {
                type: dataType,
                example: value
            } as SwaggerCustomTypeResponse
        } as SwaggerResponse;
    }
}