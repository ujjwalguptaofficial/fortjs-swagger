import { SwaggerControllerInfo } from "../types/swagger_controller_info";
import { ResponseInfo } from "../types/response_info";
import { QueryInfo } from "../types/query_info";
import { WorkerInfo } from "../types/worker_info";
import { BodyInfo } from "../types/body_info";
import { SwaggerModelInfo } from "../types/swagger_model_info";
import { ClassInfo } from "../types/class_info";

const swaggerControllerInfos: SwaggerControllerInfo[] = [];
const swaggerModels: SwaggerModelInfo[] = [];
// used to save description and summary of props and class   
const classInfos: ClassInfo[] = [];

const getNewWorker = (methodName: string) => {
    return {
        body: null,
        file: null,
        methodName: methodName,
        queries: [],
        responses: [],
        params: []
    } as WorkerInfo;
}
export class SwaggerHandler {
    static saveResponse(className: string, methodName: string, response: ResponseInfo) {
        const value = swaggerControllerInfos.find(qry => qry.className === className);
        const worker = getNewWorker(methodName);
        worker.responses.push(response);
        if (value == null) {
            swaggerControllerInfos.push({
                className: className,
                workers: [worker]
            });
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
        const value = swaggerControllerInfos.find(qry => qry.className === className);
        const worker = getNewWorker(methodName);
        worker.queries.push(query);
        if (value == null) {
            swaggerControllerInfos.push({
                className: className,
                workers: [worker]
            });
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
        const value = swaggerControllerInfos.find(qry => qry.className === className);
        const worker = getNewWorker(methodName);
        worker.params.push(query);
        if (value == null) {
            swaggerControllerInfos.push({
                className: className,
                workers: [worker]
            });
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
        const value = swaggerControllerInfos.find(qry => qry.className === className);
        const worker = getNewWorker(methodName);
        worker.body = body as any;
        if (value == null) {
            swaggerControllerInfos.push({
                className: className,
                workers: [worker]
            });
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
        else if (value.classInstance == null) {
            value.classInstance = model.classInstance;
        }
    }

    static addIgnoreProperty(className: string, propertyName: string) {
        const value = swaggerModels.find(qry => qry.className === className);
        if (value == null) {
            swaggerModels.push({
                classInstance: null,
                className: className,
                ignoredProperty: [propertyName],
                optionals: []
            });
        }
        else {
            value.ignoredProperty.push(propertyName);
        }
    }

    static addOptional(className: string, propertyName: string) {
        const value = swaggerModels.find(qry => qry.className === className);
        if (value == null) {
            swaggerModels.push({
                classInstance: null,
                className: className,
                ignoredProperty: [],
                optionals: [propertyName]
            });
        }
        else {
            value.optionals.push(propertyName);
        }
    }

    static get controllers() {
        return swaggerControllerInfos;
    }

    static get models() {
        return swaggerModels;
    }

    static saveSummary(className: string, propName: string, summary: string) {
        const savedClass = classInfos.find(qry => qry.className === className);
        if (savedClass == null) {
            classInfos.push({
                className: className,
                props: [{
                    description: null,
                    propName: propName,
                    summary: summary
                }]
            });
        }
        else {
            const savedProp = savedClass.props.find(qry => qry.propName === propName);
            if (savedProp == null) {
                savedClass.props.push({
                    description: null,
                    propName: propName,
                    summary: summary
                })
            }
            else {
                savedProp.summary = summary;
            }
        }
    }

    static saveDescription(className: string, propName: string, description: string) {
        const savedClass = classInfos.find(qry => qry.className === className);
        if (savedClass == null) {
            classInfos.push({
                className: className,
                props: [{
                    description: description,
                    propName: propName,
                    summary: null
                }]
            });
        }
        else {
            const savedProp = savedClass.props.find(qry => qry.propName === propName);
            if (savedProp == null) {
                savedClass.props.push({
                    description: description,
                    propName: propName,
                    summary: null
                });
            }
            else {
                savedProp.description = description;
            }
        }
    }

    static get classInfos() {
        return classInfos;
    }

    static saveSecurity(className: string, type: string, scopes: string[]) {
        if (scopes == null) {
            scopes = [];
        }
        const security = {
            type: type,
            scopes: scopes
        };
        const value = swaggerControllerInfos.find(qry => qry.className === className);
        if (value == null) {
            swaggerControllerInfos.push({
                className: className,
                workers: [],
                security: [security]
            });
        }
        else {
            if (value.security != null) {
                value.security.push(security);
            }
            else {
                value.security = [security];
            }

        }
    }
}