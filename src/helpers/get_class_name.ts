import { getDataType } from "./get_data_type";
import { DATA_TYPE } from "../enums";
import { isCustomClass } from "./is_custom_class";

export const getClassName = (value: any) => {
    const type = getDataType(value);
    if (type === DATA_TYPE.Function) { // means its class
        return (new value()).constructor.name;
    }
    else {
        if (isCustomClass(value)) {
            return value.constructor.name;
        }
    }
    return null;
}