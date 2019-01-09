import { ApplicationInfo } from "./application_info";
import { ServerInfo } from "./server_info";

export type SwaggerOption = {
    appInfo: ApplicationInfo;
    servers: ServerInfo[];
    outputPath: string;
    srcPath: string;
}