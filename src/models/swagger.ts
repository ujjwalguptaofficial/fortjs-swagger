import { Router } from "fortjs";
import { SwaggerGlobal } from "../global";
import { copy, mkdir, pathExists, writeFile } from "fs-extra";
import { SwaggerFormatter } from "../helpers/swagger_formatter";
import * as path from "path";
import { SwaggerOption } from "../types/swagger_option";
import { Summary, Tag, body, description, ignoreProperty, optionalProperty, param, query, response, security } from '../decorators';

export class Swagger {

    async create(option?: SwaggerOption) {
        const router = new Router();
        SwaggerGlobal.routes = router.routesAsArray;
        const formatedData = new SwaggerFormatter().format(option);
        //console.log("formmated data", JSON.stringify(formmatedData));
        const isPathExist = await pathExists(option.outputPath);
        if (isPathExist === false) {
            await mkdir(option.outputPath);
        }
        const swaggerConfigPath = `${option.outputPath}/swagger.json`;
        await writeFile(swaggerConfigPath, JSON.stringify(formatedData));

        //copy swagger files
        await this.copySwaggerAssets_(option.outputPath);
    }

    private copySwaggerAssets_(contentPath: string) {
        const assets = ['index.html', 'swagger.js'];
        return Promise.all(assets.map(asset => {
            return copy(path.join(__dirname, `swagger_ui/${asset}`), contentPath + asset);
        }));
    }

    body = body;
    description = description;
    ignoreProperty = ignoreProperty;
    optionalProperty = optionalProperty;
    param = param;
    query = query;
    response = response;
    security = security;
    summary = Summary;
    tag = Tag;
}