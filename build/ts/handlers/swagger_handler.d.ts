import { SwaggerControllerInfo } from "../types/swagger_controller_info";
import { ResponseInfo } from "../types/response_info";
import { QueryInfo } from "../types/query_info";
import { BodyInfo } from "../types/body_info";
import { SwaggerModelInfo } from "../types/swagger_model_info";
import { ClassInfo } from "../types/class_info";
export declare class SwaggerHandler {
    static saveResponse(className: string, methodName: string, response: ResponseInfo): void;
    static saveQuery(className: string, methodName: string, query: QueryInfo): void;
    static saveParam(className: string, methodName: string, query: QueryInfo): void;
    static saveBody(className: string, methodName: string, body: BodyInfo): void;
    static saveModel(model: SwaggerModelInfo): void;
    static addIgnoreProperty(className: string, propertyName: string): void;
    static addOptional(className: string, propertyName: string): void;
    static readonly controllers: SwaggerControllerInfo[];
    static readonly models: SwaggerModelInfo[];
    static saveSummary(className: string, propName: string, summary: string): void;
    static saveDescription(className: string, propName: string, description: string): void;
    static readonly classInfos: ClassInfo[];
}
