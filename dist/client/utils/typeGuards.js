"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isSyntheticEvent = (event) => typeof event !== 'string' &&
    Boolean(event) &&
    Boolean(event.nativeEvent) &&
    event.nativeEvent instanceof Event;
exports.isCallable = (value) => {
    return value instanceof Function;
};
exports.isConstructable = (value) => {
    var _a, _b;
    return value instanceof Function &&
        ((_b = (_a = value) === null || _a === void 0 ? void 0 : _a.prototype) === null || _b === void 0 ? void 0 : _b.constructor) === value;
};
exports.isString = (translation) => typeof translation === 'string';
exports.isNill = (value) => value === undefined || value === null;
//# sourceMappingURL=typeGuards.js.map