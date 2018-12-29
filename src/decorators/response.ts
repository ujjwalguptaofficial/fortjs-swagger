import { HTTP_STATUS_CODE } from "fortjs";
import { SwaggerHandler } from "../handlers/swagger_handler";

export const response = (statusCode: HTTP_STATUS_CODE, value: any): MethodDecorator => {
    return (target: any, methodName: string, descriptor: PropertyDescriptor) => {
        const className = (target.constructor.name as string);
        SwaggerHandler.saveResponse(className, value, {
            statusCode: statusCode,
            value: value
        })
    };
}