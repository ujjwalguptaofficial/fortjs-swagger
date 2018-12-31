import { Router } from "fortjs";
export declare type SwaggerOption = {
    extension: string;
    srcFolder: string;
};
export declare class Swagger extends Router {
    constructor();
    create(option?: SwaggerOption): Promise<void>;
    private getExtension_;
}
