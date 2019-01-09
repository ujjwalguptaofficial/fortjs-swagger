import { SwaggerHandler } from "../handlers/swagger_handler";

export const Summary = (value: string): MethodDecorator => {
    return (target: any, methodName: string, descriptor: PropertyDescriptor) => {
        const className = (target.constructor.name as string);
        SwaggerHandler.saveSummary(className, methodName, value)
    };
}