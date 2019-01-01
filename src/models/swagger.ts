import { Router } from "fortjs";
import { Global } from "../global";
import { SwaggerHandler } from "../handlers/swagger_handler";
import { FileHelper } from "../helpers/file_helper";
import { ApplicationInfo } from "../types/application_info";
import { ServerInfo } from "../types/server_info";
import { SwaggerFormatter } from "./swagger_formatter";


export type SwaggerOption = {
    extension: string;
    srcFolder: string;
    appInfo: ApplicationInfo;
    servers: ServerInfo[];
}

export class Swagger extends Router {
    constructor() {
        super();
        // Global.routes = this.routes;
    }
    async create(option?: SwaggerOption) {
        const formmatedData = new SwaggerFormatter().format(option, this.routes);
        console.log("formmated data", JSON.stringify(formmatedData));
        // const extension = this.getExtension_(option.extension);
        // if (extension == null) {
        //     throw "Invalid Files extension. Allowed extension are - ts, js."
        // }
        // const files = await FileHelper.getAllFilesFrom(option.srcFolder);
        // if (files.length > 0) {
        //     const filterFiles = FileHelper.filterFiles(files, option.extension);

        // }
        // else {
        //     throw `No files found in directory - ${option.srcFolder}`;
        // }
        // console.log("routes", JSON.stringify(SwaggerHandler.routes));
        // console.log("models", SwaggerHandler.models);
        // const responses = [];
        // SwaggerHandler.routes.forEach(value => {
        //     value.workers.forEach(worker => {
        //         responses.push(worker.responses);
        //     })
        // })
        // console.log("responses", responses)
    }

    private getExtension_(extension: string) {
        switch (extension) {
            case ".ts":
            case "ts":
                return ".ts";
            case ".js":
            case "js":
                return ".js";
        }
        return null;
    }

}