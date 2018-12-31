import { HTTP_STATUS_CODE, MIME_TYPE } from "fortjs";
export declare const Response: (statusCode: HTTP_STATUS_CODE, value: any, contentType?: MIME_TYPE) => MethodDecorator;
