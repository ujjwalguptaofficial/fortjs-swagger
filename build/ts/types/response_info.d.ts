import { HTTP_STATUS_CODE, MIME_TYPE } from "fortjs";
export declare type ResponseInfo = {
    statusCode: HTTP_STATUS_CODE;
    value: any;
    contentType: MIME_TYPE[];
};
