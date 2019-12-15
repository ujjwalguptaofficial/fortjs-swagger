import { SwaggerOption } from "../types/swagger_option";
import { SwaggerStructure } from "../types/swagger_structure";
import { SwaggerControllerInfo } from "../types/swagger_controller_info";
export declare class SwaggerFormatter {
    tags_: SwaggerControllerInfo[];
    getTags_(): any[];
    format(option: SwaggerOption): SwaggerStructure;
    private getTag_;
    private getControllerSecurity_;
    private getSummary_;
    private getDescription_;
    private getModels_;
    private getResponses_;
    private getParams_;
}
