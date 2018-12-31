import { QueryInfo } from "./query_info";
import { ResponseInfo } from "./response_info";


export type WorkerInfo = {
    methodName: string;
    responses: ResponseInfo[];
    queries: QueryInfo[];
    params: QueryInfo[];
    body: null;
    file: { [variableName: string]: any };
}