import { SwaggerHandler } from "../handlers/swagger_handler";


export const Body = (value: any, description?: string): MethodDecorator => {
    return (target: any, methodName: string, descriptor: PropertyDescriptor) => {
        const className = (target.constructor.name as string);
        SwaggerHandler.saveBody(className, methodName, {
            value: value,
            variableName: "body",
            description: description
        })
    };
}