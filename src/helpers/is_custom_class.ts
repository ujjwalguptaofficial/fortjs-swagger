export const isCustomClass = (value: any) => {
    const constructorName = value.constructor.name;
    switch (constructorName) {
        case "Array":
        case "String":
        case "Object":
            // case "Function":
            return false;
        default:
            return true;
    }
};