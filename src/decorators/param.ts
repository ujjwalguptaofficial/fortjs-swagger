import { SwaggerHandler } from "../handlers/swagger_handler";

export const param = (variableName: string, value: any, description?: string): MethodDecorator => {
    return (target: any, methodName: string, descriptor: PropertyDescriptor) => {
        const className = (target.constructor.name as string);
        SwaggerHandler.saveParam(className, methodName, {
            value: value,
            variableName: variableName,
            description: description
        })
    };
}