import { SwaggerHandler } from "../handlers/swagger_handler";

export const optionalProperty = (target: any, propertyName: string) => {
    const className = (target.constructor.name as string);
    SwaggerHandler.addOptional(className, propertyName);
};