import { MIME_TYPE } from "fortjs";

export type SwaggerResponse = {
    description: string;
    schema: SwaggerModelResponse | SwaggerCustomTypeResponse;
}

export type SwaggerModelResponse = {
    $ref: string;
}

export type SwaggerCustomTypeResponse = {
    type: string;
    items: SwaggerModelResponse;
    example: any;
}

export type SwaggerContent = {
    mimeType: SwaggerResponse;
}