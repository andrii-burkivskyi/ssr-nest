"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ensureString = (value) => {
    if (typeof value === "string") {
        return value;
    }
    if (typeof value === "number" && !isNaN(value)) {
        return String(value);
    }
    return undefined;
};
exports.ensureNumber = (value) => {
    if (typeof value === "string" && !isNaN(Number(value))) {
        return Number(value);
    }
    if (typeof value === "number" && !isNaN(value)) {
        return value;
    }
    return undefined;
};
exports.ensureArrayOfStrings = (value) => {
    if (Array.isArray(value)) {
        const arr = value.map(exports.ensureString).filter((v) => v !== undefined);
        return arr.length !== 0 ? arr : undefined;
    }
    const str = exports.ensureString(value);
    return str === undefined ? undefined : [str];
};
exports.ensureArrayOfNumbers = (value) => {
    if (Array.isArray(value)) {
        const arr = value.map(exports.ensureNumber).filter((v) => v !== undefined);
        return arr.length !== 0 ? arr : undefined;
    }
    const num = exports.ensureNumber(value);
    return num === undefined ? undefined : [num];
};
//# sourceMappingURL=converters.js.map