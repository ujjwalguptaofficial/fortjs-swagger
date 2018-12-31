import { DATA_TYPE } from "../enums";

export const getDataType = (value) => {
    const type = typeof value;
    switch (type) {
        case 'object':
            if (Array.isArray(value)) {
                return DATA_TYPE.Array;
            }
        default:
            return type;
    }
}