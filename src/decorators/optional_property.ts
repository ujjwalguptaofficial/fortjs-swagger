import { SwaggerHandler } from "../handlers/swagger_handler";

export const OptionalProperty = (target: any, propertyName: string) => {
    const className = (target.constructor.name as string);
    SwaggerHandler.addOptional(className, propertyName);
};