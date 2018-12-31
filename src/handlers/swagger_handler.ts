import { SwaggerInfo } from "../types/swagger_route_info";
import { ResponseInfo } from "../types/response_info";
import { QueryInfo } from "../types/query_info";
import { WorkerInfo } from "../types/worker_info";
import { BodyInfo } from "../types/body_info";
import { SwaggerModelInfo } from "../types/swagger_model_info";
import { MIME_TYPE } from "fortjs";

const swaggerRoutes: SwaggerInfo[] = [];
const swaggerModels: SwaggerModelInfo[] = [];

const getNewWorker = (methodName: string) => {
    return {
        body: {},
        file: {},
        methodName: methodName,
        queries: [],
        response: {}
    } as WorkerInfo
}
export class SwaggerHandler {
    static saveResponse(className: string, methodName: string, contentType: MIME_TYPE, response: ResponseInfo) {
        const value = swaggerRoutes.find(qry => qry.className === className);
        const worker = getNewWorker(methodName);
        worker.response[response.statusCode] = {
            [contentType]: response.value
        }
        if (value == null) {
            swaggerRoutes.push({
                className: className,
                workers: [worker]
            })
        }
        else {
            const savedWorker = value.workers.find(qry => qry.methodName === methodName);
            if (savedWorker != null) { // add another response for that worker
                if (savedWorker.response[response.statusCode] == null) {
                    savedWorker.response[response.statusCode] = {};
                }
                savedWorker.response[response.statusCode][contentType] = response.value;
            }
            else { //add the worker
                value.workers.push(worker);
            }
        }
    }

    static saveQuery(className: string, methodName: string, query: QueryInfo) {
        const value = swaggerRoutes.find(qry => qry.className === className)
        if (value == null) {
            const worker = getNewWorker(methodName);
            worker.queries.push(query);
            swaggerRoutes.push({
                className: className,
                workers: [worker]
            })
        }
        else {
            const savedWorker = value.workers.find(qry => qry.methodName === methodName);
            if (savedWorker != null) {
                savedWorker.queries[query.variableName] = query.type;
            }
        }
    }

    static saveBody(className: string, methodName: string, body: BodyInfo) {
        const value = swaggerRoutes.find(qry => qry.className === className)
        if (value == null) {
            const worker = getNewWorker(methodName);
            worker.body = body;
            swaggerRoutes.push({
                className: className,
                workers: [worker]
            })
        }
        else {
            const savedWorker = value.workers.find(qry => qry.methodName === methodName);
            if (savedWorker != null) {
                savedWorker.body[body.variableName] = body.type;
            }
        }
    }

    static saveModel(model: SwaggerModelInfo) {
        const value = swaggerModels.find(qry => qry.className === model.className);
        if (value == null) {
            swaggerModels.push(model);
        }
        else {
            value.classInstance = model.classInstance;
        }
    }

    static addIgnoreProperty(className: string, propertyName: string) {
        const value = swaggerModels.find(qry => qry.className === className);
        if (value == null) {
            swaggerModels.push({
                classInstance: null,
                className: className,
                ignoredProperty: [propertyName]
            });
        }
        else {
            value.ignoredProperty.push(propertyName);
        }
    }

    static get routes() {
        return swaggerRoutes;
    }

    static get models() {
        return swaggerModels;
    }
}