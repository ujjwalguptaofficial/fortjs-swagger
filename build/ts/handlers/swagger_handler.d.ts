import { SwaggerInfo } from "../types/swagger_route_info";
import { ResponseInfo } from "../types/response_info";
import { QueryInfo } from "../types/query_info";
import { BodyInfo } from "../types/body_info";
import { SwaggerModelInfo } from "../types/swagger_model_info";
import { MIME_TYPE } from "fortjs";
export declare class SwaggerHandler {
    static saveResponse(className: string, methodName: string, contentType: MIME_TYPE, response: ResponseInfo): void;
    static saveQuery(className: string, methodName: string, query: QueryInfo): void;
    static saveBody(className: string, methodName: string, body: BodyInfo): void;
    static saveModel(model: SwaggerModelInfo): void;
    static addIgnoreProperty(className: string, propertyName: string): void;
    static readonly routes: SwaggerInfo[];
    static readonly models: SwaggerModelInfo[];
}
