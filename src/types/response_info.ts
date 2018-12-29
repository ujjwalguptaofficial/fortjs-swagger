import { HTTP_STATUS_CODE } from "fortjs";

export type ResponseInfo = {
    statusCode: HTTP_STATUS_CODE,
    value: any;
}