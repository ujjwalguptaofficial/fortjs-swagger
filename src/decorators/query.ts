import { SwaggerHandler } from "../handlers/swagger_handler";
import { DATA_TYPE } from "../enums/data_type";

export const Query = (variableName: string, value: any, description?: string): MethodDecorator => {
    return (target: any, methodName: string, descriptor: PropertyDescriptor) => {
        const className = (target.constructor.name as string);
        SwaggerHandler.saveQuery(className, methodName, {
            value: value,
            variableName: variableName,
            description: description
        })
    };
}