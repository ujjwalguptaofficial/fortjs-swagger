import { Fort } from 'fortjs';
import { routes } from './routes';
import { FortViewEngine } from 'eshtml';
import * as path from "path";
import { Swagger } from '@fortjs/swagger';



export class App extends Fort {
    constructor() {
        super();
        this.routes = routes;
        this.viewEngine = FortViewEngine;
    }
}

new App().create({
    defaultPath: "default",
    folders: [{
        alias: "/",
        path: path.join(__dirname, "../static")
    }]
}).then(() => {
    // const Path = path.join(__dirname, "../src/controllers/user_controller.ts");
    // console.log(jsdoc);
    // jsdoc(Path, (err, ast) => {
    //     console.log("err", err);
    //     console.log("ast", ast);
    // })
    new Swagger().create();
})

console.log("Your fort is located at address - localhost:4000");