import { getDataType } from "./get_data_type";
import { DATA_TYPE } from "../enums";
import { SwaggerHandler } from "../handlers/swagger_handler";
import { SwaggerModelInfo } from "../types/swagger_model_info";
import { SwaggerModel } from "../abstracts/swagger_model";

export const extractAndSaveModel = (value) => {
    let className = "";
    const type = getDataType(value);
    const saveModelInfo = (modelValue) => {
        const model = getModelinfo(modelValue);
        if (model != null) {
            SwaggerHandler.saveModel(model);
            className = model.className;
        }
    }

    if (type === DATA_TYPE.Function) {
        saveModelInfo(value);
    }
    else if (type === DATA_TYPE.Array && value.length > 0) {
        const firstValue = value[0];
        if (getDataType(firstValue) === DATA_TYPE.Function) {
            saveModelInfo(firstValue);
        }
    }
    return className;
}

const getModelinfo = (value) => {
    try {
        let model: SwaggerModel = new value();
        let example;
        if (model.getExample) {
            example = model.getExample();
        }
        return {
            classInstance: example == null ? model : example,
            className: model.constructor.name,
            ignoredProperty: []
        } as SwaggerModelInfo;
    }
    catch (ex) {
        console.log("getModelinfo", ex);
    }
    return null;
}