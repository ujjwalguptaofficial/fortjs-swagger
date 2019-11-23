import { getDataType } from "./get_data_type";
import { DATA_TYPE } from "../enums";
import { SwaggerHandler } from "../handlers/swagger_handler";
import { SwaggerModelInfo } from "../types/swagger_model_info";
import { SwaggerModel } from "../abstracts/swagger_model";
import { isCustomClass } from "./is_custom_class";

export const extractAndSaveModel = (value) => {
    let className = "";
    let type = getDataType(value);
    const saveModelInfo = (modelValue) => {
        const model = getModelinfo(modelValue, type);
        if (model != null) {
            SwaggerHandler.saveModel(model);
            className = model.className;
        }
    };
    if (type === DATA_TYPE.Function) { // means its class
        saveModelInfo(value);
    }
    else if (type === DATA_TYPE.Array && value.length > 0) { // means its array of class
        const firstValue = value[0];
        if (getDataType(firstValue) === DATA_TYPE.Function) { // it is class
            type = getDataType(firstValue);
            saveModelInfo(firstValue);
        }
    }
    else {
        if (isCustomClass(value)) {
            saveModelInfo(value);
        }
    }
    return className;
};

const getObject = (value, type) => {
    switch (type) {
        case DATA_TYPE.Function:
            return new value();
        case DATA_TYPE.Object:
            return value;
    }
};

const getModelinfo = (value, type) => {
    try {
        const model: SwaggerModel = getObject(value, type);
        if (model == null) {
            return;
        }
        let example;
        if (model.getExample != null) {
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
};