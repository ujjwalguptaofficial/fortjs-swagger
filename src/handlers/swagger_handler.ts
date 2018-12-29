import { SwaggerInfo } from "../types/swagger_route_info";
import { ResponseInfo } from "../types/response_info";
import { QueryInfo } from "../types/query_info";
import { WorkerInfo } from "../types/worker_info";
import { BodyInfo } from "../types/body_info";
import { SwaggerModelInfo } from "../types/swagger_model_info";

const swaggerRoutes: SwaggerInfo[] = [];
const swaggerModels: SwaggerModelInfo[] = [];

const getNewWorker = (methodName: string) => {
    return {
        body: {},
        file: {},
        methodName: methodName,
        query: {},
        response: {}
    } as WorkerInfo
}
export class SwaggerHandler {
    static saveResponse(className: string, methodName: string, response: ResponseInfo) {
        const value = swaggerRoutes.find(qry => qry.className === className)
        if (value == null) {
            const worker = getNewWorker(methodName);
            worker.response = response;
            swaggerRoutes.push({
                className: className,
                workers: [worker]
            })
        }
        else {
            const savedWorker = value.workers.find(qry => qry.methodName === methodName);
            if (savedWorker != null) {
                savedWorker.response[response.statusCode] = response.value;
            }
        }
    }

    static saveQuery(className: string, methodName: string, query: QueryInfo) {
        const value = swaggerRoutes.find(qry => qry.className === className)
        if (value == null) {
            const worker = getNewWorker(methodName);
            worker.query = query;
            swaggerRoutes.push({
                className: className,
                workers: [worker]
            })
        }
        else {
            const savedWorker = value.workers.find(qry => qry.methodName === methodName);
            if (savedWorker != null) {
                savedWorker.query[query.variableName] = query.type;
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
}