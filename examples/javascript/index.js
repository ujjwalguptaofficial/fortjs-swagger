import * as path from "path";
import { Fort } from "fortjs";
import { routes } from "./routes";
import { Swagger } from "fortjs-swagger";

const initSwagger = async () => {
    await Swagger.create({
        appInfo: {
            title: "Swagger Test",
            description: "Swagger Test",
            version: "1.0"
        },
        servers: [{
            description: "local",
            url: "http://localhost:4000"
        }],
        outputPath: path.join(__dirname, "../swagger/"),
        securitySchemes: {
            basicAuth: {
                type: "http",
                scheme: "basic"
            }
        }
    });
}

export const createApp = async () => {
    Fort.routes = routes;
    Fort.folders = [
        {
            alias: "/",
            path: path.join(__dirname, "../static")
        },
        {
            alias: "/swagger",
            path: path.join(__dirname, "../swagger")
        },
    ];
    await Fort.create();
    process.env.APP_URL = `http://localhost:${Fort.port}`;
};

if (process.env.NODE_ENV !== "test") {
    createApp().then(() => {
        initSwagger()
        Fort.logger.debug(`Your fort is located at address - localhost:${Fort.port}`);
    }).catch(err => {
        console.error(err);
    });
}