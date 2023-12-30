import * as path from "path";
import { Fort } from "fortjs";
import { routes } from "@/routes";
import { swagger } from "fortjs-swagger";

const swaggerPath = path.join(__dirname, "../dist/swagger/");

const initSwagger = async () => {
    await swagger.create({
        appInfo: {
            title: "Swagger Test",
            description: "Swagger Test",
            version: "1.0"
        },
        servers: [{
            description: "local",
            url: "http://localhost:4000"
        }],
        outputPath: swaggerPath,
        securitySchemes: {
            basicAuth: {
                type: "http",
                scheme: "basic"
            }
        }
    });
}

export const createApp = async () => {
    Fort.folders = [
        {
            alias: "/",
            path: path.join(__dirname, "../static")
        },
        {
            alias: "/swagger",
            path: swaggerPath
        }
    ];

    Fort.routes = routes;
    await initSwagger();
    await Fort.create();
    process.env.APP_URL = `http://localhost:${Fort.port}`;
};
if (process.env.NODE_ENV !== "test") {
    createApp().then(() => {
        Fort.logger.debug(`Your fort has been forged and is now ready for exploration at ${process.env.APP_URL}`);
    }).catch(err => {
        console.error(err);
    });
}

