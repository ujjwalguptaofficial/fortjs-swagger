import { Router } from "fortjs";
import { SwaggerOption } from "../types/swagger_option";
export declare class Swagger extends Router {
    constructor();
    create(option?: SwaggerOption): Promise<void>;
    private copySwaggerAssets_;
}
