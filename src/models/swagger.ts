import { Router } from "fortjs";
import { Global } from "../global";
import { SwaggerHandler } from "../handlers/swagger_handler";
import { FileHelper } from "../helpers/file_helper";


export type SwaggerOption = {
    extension: string;
    srcFolder: string;
}

export class Swagger extends Router {
    constructor() {
        super();
        Global.routes = this.routes;
    }
    async create(option?: SwaggerOption) {
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
        console.log("routes", JSON.stringify(SwaggerHandler.routes));
        console.log("models", SwaggerHandler.models);
        const responses = [];
        SwaggerHandler.routes.forEach(value => {
            value.workers.forEach(worker => {
                responses.push(worker.responses);
            })
        })
        console.log("responses",responses)
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