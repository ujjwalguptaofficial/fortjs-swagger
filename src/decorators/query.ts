import { SwaggerHandler } from "../handlers";

export const query = (variableName: string, value: any, description?: string): MethodDecorator => {
    return (target: any, methodName: string, descriptor: PropertyDescriptor) => {
        const className = (target.constructor.name as string);
        SwaggerHandler.saveQuery(className, methodName, {
            value: value,
            variableName: variableName,
            description: description
        })
    };
}