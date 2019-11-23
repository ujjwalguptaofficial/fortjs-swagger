import { QueryInfo } from "./query_info";
import { ResponseInfo } from "./response_info";
export declare type WorkerInfo = {
    methodName: string;
    responses: ResponseInfo[];
    queries: QueryInfo[];
    params: QueryInfo[];
    body: any;
    file: {
        [variableName: string]: any;
    };
};
