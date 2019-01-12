import { SwaggerHandler } from "../handlers/swagger_handler";

export const OptionalProperty = (): MethodDecorator => {
    return (target: any, propertyName: string, descriptor: PropertyDescriptor) => {
        const className = (target.constructor.name as string);
        SwaggerHandler.addOptional(className, propertyName);
    }
};