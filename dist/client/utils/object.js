"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_isplainobject_1 = require("lodash.isplainobject");
exports.isEmpty = (obj) => {
    return obj ? Object.keys(obj).length === 0 : false;
};
exports.isRequiredFieldsNotEmpty = (obj, keys) => {
    return keys.every((key) => obj[key] !== undefined);
};
exports.clearUndefinedValues = (obj) => {
    if (!lodash_isplainobject_1.default(obj)) {
        return obj;
    }
    const arrayHandler = (valueArr) => {
        return valueArr.filter((value) => value !== undefined)
            .map(exports.clearUndefinedValues);
    };
    return Object.entries(obj).reduce((acc, [key, value]) => {
        let newValue = value;
        if (!obj.hasOwnProperty(key) || value === undefined) {
            return acc;
        }
        if (lodash_isplainobject_1.default(value)) {
            newValue = exports.clearUndefinedValues(value);
        }
        if (Array.isArray(value)) {
            newValue = arrayHandler(value);
        }
        return Object.assign(Object.assign({}, acc), { [key]: newValue });
    }, {});
};
//# sourceMappingURL=object.js.map