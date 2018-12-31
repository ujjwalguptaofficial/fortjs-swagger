export declare type SwaggerResponse = {
    description: string;
    schema: SwaggerModelResponse | SwaggerCustomTypeResponse;
};
export declare type SwaggerModelResponse = {
    $ref: string;
};
export declare type SwaggerCustomTypeResponse = {
    type: string;
    items: SwaggerModelResponse;
    example: any;
};
export declare type SwaggerContent = {
    mimeType: SwaggerResponse;
};
