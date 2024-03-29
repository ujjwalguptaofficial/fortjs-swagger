import { SwaggerHandler } from "../handlers/swagger_handler";

export const security = (type: string, scopes?: string[]): ClassDecorator => {
    return (target: any) => {
        const className: string = target.name;
        SwaggerHandler.saveSecurity(className, type, scopes);
    };
}