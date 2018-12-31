import { SwaggerHandler } from "../handlers/swagger_handler";
import { DATA_TYPE } from "../enums/data_type";

export const Query = (variableName: string, type: DATA_TYPE, description?: string): MethodDecorator => {
    return (target: any, methodName: string, descriptor: PropertyDescriptor) => {
        const className = (target.constructor.name as string);
        SwaggerHandler.saveQuery(className, methodName, {
            type: type,
            variableName: variableName
        })
    };
}