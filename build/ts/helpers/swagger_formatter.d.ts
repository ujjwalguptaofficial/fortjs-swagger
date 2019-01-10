import { SwaggerOption } from "../types/swagger_option";
import { SwaggerStructure } from "../types/swagger_structure";
export declare class SwaggerFormatter {
    format(option: SwaggerOption): SwaggerStructure;
    private getSummary_;
    private getDescription_;
    private getModels_;
    private getResponses_;
    private getParams_;
}
