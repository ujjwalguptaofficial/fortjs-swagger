import { DATA_TYPE } from "../enums";
export declare const getDataType: (value: any) => "string" | "number" | "bigint" | "boolean" | "symbol" | "undefined" | "object" | "function" | DATA_TYPE.Array;
