import { WorkerInfo } from "./worker_info";
export declare type SwaggerControllerInfo = {
    className: string;
    workers: WorkerInfo[];
    security?: [{
        type: string;
        scopes: string[];
    }];
    tag?: {
        name: string;
        description: string;
    };
};
