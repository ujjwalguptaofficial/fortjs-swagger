import { Router } from "fortjs";
import { SwaggerGlobal } from "../global";
import { copy, ensureDir, mkdir, pathExists, writeFile } from "fs-extra";
import { SwaggerFormatter } from "../helpers/swagger_formatter";
import * as path from "path";
import { SwaggerOption } from "../types/swagger_option";
import { Summary, Tag, body, description, ignoreProperty, optionalProperty, param, query, response, security } from '../decorators';

export class Swagger {

    async create(option?: SwaggerOption) {
        const router = new Router();
        SwaggerGlobal.routes = router.routesAsArray;
        const formatedData = new SwaggerFormatter().format(option);
        const outputPath = option.outputPath;
        await ensureDir(outputPath);
        const swaggerConfigPath = `${outputPath}/swagger.json`;
        await writeFile(swaggerConfigPath, JSON.stringify(formatedData));

        //copy swagger files
        await this.copySwaggerAssets_(outputPath);
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