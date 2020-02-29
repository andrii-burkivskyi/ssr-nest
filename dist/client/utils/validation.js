"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isRequired = (value) => Boolean(value);
exports.isEmail = (value) => !Boolean(value) ||
    Boolean(value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i));
exports.isPhone = (value) => !Boolean(value) ||
    Boolean(value.match(/^380\d{9}$/i));
exports.validate = (value, arr) => {
    const result = arr.find(([validator]) => !validator(value));
    if (!result) {
        return ["", []];
    }
    const error = result[1] || "";
    const values = (result.length === 3 && result[2]()) || {};
    return [error, values];
};
//# sourceMappingURL=validation.js.map