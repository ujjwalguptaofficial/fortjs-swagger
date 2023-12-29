import * as Path from "path";
import { Fort } from "fortjs";
import { Swagger } from 'fortjs-swagger';
import { routes } from "./routes";

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
        outputPath: Path.join(__dirname, "../swagger/"),
        securitySchemes: {
            basicAuth: {
                type: "http",
                scheme: "basic"
            }
        }
    });
}

export const createApp = async () => {
    Fort.folders = [{
        alias: "/",
        path: Path.join(__dirname, "../static")
    }, {
        alias: "/swagger",
        path: Path.join(__dirname, "../swagger")
    }];
    Fort.routes = routes;
    await Fort.create();
};
if (process.env.NODE_ENV !== "test") {
    createApp().then(async () => {
        await initSwagger();
        console.log("Your fort is located at address - localhost:4000");
    }).catch(err => {
        console.error(err);
    });
}

