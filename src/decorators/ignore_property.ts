import { SwaggerHandler } from "../handlers/swagger_handler";

export const ignoreProperty = (target: any, propertyName: string, descriptor: PropertyDescriptor) => {
    const className = (target.constructor.name as string);
    SwaggerHandler.addIgnoreProperty(className, propertyName);
};