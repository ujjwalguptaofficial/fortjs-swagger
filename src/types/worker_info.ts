import { QueryInfo } from "./query_info";


export type WorkerInfo = {
    methodName: string;
    response: { [statusCode: number]: any };
    queries: QueryInfo[];
    body: { [variableName: string]: any };
    file: { [variableName: string]: any };
}