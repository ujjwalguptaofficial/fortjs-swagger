import { HTTP_STATUS_CODE, MIME_TYPE } from "fortjs";
import { SwaggerHandler } from "../handlers/swagger_handler";
import { extractAndSaveModel } from "../helpers/extract_model";

export const response = (statusCode: HTTP_STATUS_CODE, value: any, contentType?: MIME_TYPE): MethodDecorator => {
    return (target: any, methodName: string, descriptor: PropertyDescriptor) => {
        const className = (target.constructor.name as string);
        const modelName = extractAndSaveModel(value);
        const saveResponse = (mimeType: MIME_TYPE[]) => {
            SwaggerHandler.saveResponse(className, methodName, {
                contentType: mimeType,
                statusCode: statusCode,
                value: value
            })
        };
        if (modelName.length > 0) {
            saveResponse([MIME_TYPE.Json, MIME_TYPE.Xml]);
        }
        else {
            if (contentType == null) {
                contentType = MIME_TYPE.Text;
            }
            saveResponse([contentType]);
        }

    };
}
