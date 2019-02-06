import { SwaggerHandler } from "../handlers/swagger_handler";

export const IgnoreProperty = (target: any, propertyName: string) => {
    const className = (target.constructor.name as string);
    SwaggerHandler.addIgnoreProperty(className, propertyName);
};