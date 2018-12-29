import { Router } from "fortjs";
import { Global } from "../global";

export class Swagger extends Router {
    constructor() {
        super();
        Global.routes = this.routes;
    }
    async create() {

    }
}