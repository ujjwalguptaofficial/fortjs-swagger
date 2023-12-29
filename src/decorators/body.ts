import { SwaggerHandler } from "../handlers";
import { extractAndSaveModel } from "../helpers";

export const body = (value: any, description?: string): MethodDecorator => {
    return (target: any, methodName: string, descriptor: PropertyDescriptor) => {
        const className = (target.constructor.name as string);
        extractAndSaveModel(value);
        SwaggerHandler.saveBody(className, methodName, {
            value: value,
            variableName: "body",
            description: description
        })
    };
}