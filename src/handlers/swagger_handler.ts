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
        body: {} as BodyInfo,
        file: {},
        methodName: methodName,
        queries: [],
        responses: [],
        params: []
    } as WorkerInfo
}
export class SwaggerHandler {
    // static saveResponse(className: string, methodName: string, contentType: MIME_TYPE, response: ResponseInfo) {
    //     const value = swaggerRoutes.find(qry => qry.className === className);
    //     const worker = getNewWorker(methodName);
    //     worker.response[response.statusCode] = {
    //         [contentType]: response.value
    //     }
    //     if (value == null) {
    //         swaggerRoutes.push({
    //             className: className,
    //             workers: [worker]
    //         })
    //     }
    //     else {
    //         const savedWorker = value.workers.find(qry => qry.methodName === methodName);
    //         if (savedWorker != null) { // add another response for that worker
    //             if (savedWorker.response[response.statusCode] == null) {
    //                 savedWorker.response[response.statusCode] = {};
    //             }
    //             savedWorker.response[response.statusCode][contentType] = response.value;
    //         }
    //         else { //add the worker
    //             value.workers.push(worker);
    //         }
    //     }
    // }

    static saveResponse(className: string, methodName: string, response: ResponseInfo) {
        const value = swaggerRoutes.find(qry => qry.className === className);
        const worker = getNewWorker(methodName);
        worker.responses.push(response);
        console.log("response", response);
        if (value == null) {
            swaggerRoutes.push({
                className: className,
                workers: [worker]
            })
        }
        else {
            const savedWorker = value.workers.find(qry => qry.methodName === methodName);
            if (savedWorker != null) { // add query for that worker
                savedWorker.responses.push(response);
            }
            else { // add worker for the route
                value.workers.push(worker);
            }
        }
    }

    static saveQuery(className: string, methodName: string, query: QueryInfo) {
        const value = swaggerRoutes.find(qry => qry.className === className);
        const worker = getNewWorker(methodName);
        worker.queries.push(query);
        if (value == null) {
            swaggerRoutes.push({
                className: className,
                workers: [worker]
            })
        }
        else {
            const savedWorker = value.workers.find(qry => qry.methodName === methodName);
            if (savedWorker != null) { // add query for that worker
                savedWorker.queries.push(query);
            }
            else { // add worker for the route
                value.workers.push(worker);
            }
        }
    }

    static saveParam(className: string, methodName: string, query: QueryInfo) {
        const value = swaggerRoutes.find(qry => qry.className === className);
        const worker = getNewWorker(methodName);
        worker.params.push(query);
        if (value == null) {
            swaggerRoutes.push({
                className: className,
                workers: [worker]
            })
        }
        else {
            const savedWorker = value.workers.find(qry => qry.methodName === methodName);
            if (savedWorker != null) { // add query for that worker
                savedWorker.params.push(query);
            }
            else { // add worker for the route
                value.workers.push(worker);
            }
        }
    }

    static saveBody(className: string, methodName: string, body: BodyInfo) {
        const value = swaggerRoutes.find(qry => qry.className === className);
        const worker = getNewWorker(methodName);
        worker.body = body as any;
        if (value == null) {
            swaggerRoutes.push({
                className: className,
                workers: [worker]
            })
        }
        else {
            const savedWorker = value.workers.find(qry => qry.methodName === methodName);
            if (savedWorker != null) { // add query for that worker
                savedWorker.body = body as any;
            }
            else { // add worker for the route
                value.workers.push(worker);
            }
        }
    }

    static saveModel(model: SwaggerModelInfo) {
        const value = swaggerModels.find(qry => qry.className === model.className);
        if (value == null) {
            swaggerModels.push(model);
        }
        // else {
        //     value.classInstance = model.classInstance;
        // }
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