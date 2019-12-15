import { SwaggerHandler } from "../handlers/swagger_handler";
import { extractAndSaveModel } from "../helpers/extract_model";

export const Body = (value: any, description?: string): MethodDecorator => {
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