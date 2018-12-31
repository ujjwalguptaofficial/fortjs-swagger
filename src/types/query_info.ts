import { DATA_TYPE } from "../enums/data_type";

export type QueryInfo = {
    variableName: string,
    type: DATA_TYPE;
    description: string;
}