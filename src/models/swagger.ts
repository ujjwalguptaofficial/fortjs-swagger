import { Router } from "fortjs";
import { Global } from "../global";
import { SwaggerHandler } from "../handlers/swagger_handler";
import { FileHelper } from "fortjs";
import { ApplicationInfo } from "../types/application_info";
import { ServerInfo } from "../types/server_info";
import { SwaggerFormatter } from "./swagger_formatter";
import * as Path from "path";
// import { getAbsoluteFSPath } from "swagger-ui-dist";
// import { copy, writeFile } from "fs-extra";


export type SwaggerOption = {
    extension: string;
    srcFolder: string;
    appInfo: ApplicationInfo;
    servers: ServerInfo[];
    contentsPath: string;
}

export class Swagger extends Router {
    constructor() {
        super();
        // Global.routes = this.routes;
    }
    async create(option?: SwaggerOption) {

        const formmatedData = new SwaggerFormatter().format(option, this.routes);
        //console.log("formmated data", JSON.stringify(formmatedData));
        const isPathExist = await FileHelper.isPathExist(option.contentsPath);
        if (isPathExist === false) {
            await FileHelper.createDir(option.contentsPath);
        }
        const swaggerConfigPath = `${option.contentsPath}/swagger.json`;
        //  await writeFile(swaggerConfigPath, JSON.stringify(formmatedData), { flag: 'w' });
        await FileHelper.writeFile(swaggerConfigPath, JSON.stringify(formmatedData));

        //copy swagger files
        await this.copySwaggerAssets_(option.contentsPath);
        // await FileHelper.copyFile(Path.join(__dirname, 'swagger_ui/index.html'), option.contentsPath);
        // await FileHelper.copyFile(Path.join(__dirname, 'swagger_ui/swagger.js'), option.contentsPath);

        //  const swaggerUiPath = getAbsoluteFSPath();
        //console.log(swaggerUiPath);
        // await copy(swaggerUiPath, option.contentsPath, {
        //     overwrite: true
        // })
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

    private copySwaggerAssets_(contentPath: string) {
        const assets = ['index.html', 'swagger.js'];
        return Promise.all(assets.map(asset => {
            return FileHelper.copyFile(Path.join(__dirname, `swagger_ui/${asset}`), contentPath + asset);
        }))
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