import { SwaggerRef } from "./swagger_ref";
export type SwaggerCustomParam = {
    type: string;
    items?: SwaggerRef;
    example?: any;
    format?: any;
};
