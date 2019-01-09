import { SwaggerHandler } from "../handlers/swagger_handler";

export const Description = (value: string): MethodDecorator => {
    return (target: any, methodName: string, descriptor: PropertyDescriptor) => {
        const className = (target.constructor.name as string);
        SwaggerHandler.saveDescription(className, methodName, value)
    };
}