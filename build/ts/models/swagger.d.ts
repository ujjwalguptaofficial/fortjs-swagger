import { Router } from "fortjs";
import { ApplicationInfo } from "../types/application_info";
import { ServerInfo } from "../types/server_info";
export declare type SwaggerOption = {
    extension: string;
    srcFolder: string;
    appInfo: ApplicationInfo;
    servers: ServerInfo[];
};
export declare class Swagger extends Router {
    constructor();
    create(option?: SwaggerOption): Promise<void>;
    private getExtension_;
}
