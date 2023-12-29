import { ApplicationInfo } from "./application_info";
import { ServerInfo } from "./server_info";
import { SwaggerComponent } from "./swagger_component";
export type SwaggerStructure = {
    openapi: string;
    info: ApplicationInfo;
    servers: ServerInfo[];
    paths: any;
    components: SwaggerComponent;
    tags: [];
};
