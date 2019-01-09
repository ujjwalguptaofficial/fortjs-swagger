import { Router } from "fortjs";
import { Global } from "../global";
import { SwaggerHandler } from "../handlers/swagger_handler";
import * as Fs from "fs-extra";
import { ApplicationInfo } from "../types/application_info";
import { ServerInfo } from "../types/server_info";
import { SwaggerFormatter } from "./swagger_formatter";
import * as Path from "path";
import { SwaggerOption } from "../types/swagger_option";

export class Swagger extends Router {
    constructor() {
        super();
        // Global.routes = this.routes;
    }
    async create(option?: SwaggerOption) {

        const formatedData = new SwaggerFormatter().format(option, this.routes);
        //console.log("formmated data", JSON.stringify(formmatedData));
        const isPathExist = await Fs.pathExists(option.outputPath);
        if (isPathExist === false) {
            await Fs.mkdir(option.outputPath);
        }
        const swaggerConfigPath = `${option.outputPath}/swagger.json`;
        //  await writeFile(swaggerConfigPath, JSON.stringify(formmatedData), { flag: 'w' });
        await Fs.writeFile(swaggerConfigPath, JSON.stringify(formatedData));

        //copy swagger files
        await this.copySwaggerAssets_(option.outputPath);

    }

    private copySwaggerAssets_(contentPath: string) {
        const assets = ['index.html', 'swagger.js'];
        return Promise.all(assets.map(asset => {
            return Fs.copy(Path.join(__dirname, `swagger_ui/${asset}`), contentPath + asset);
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