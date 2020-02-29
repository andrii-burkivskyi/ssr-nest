"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.merge = (mainObject, partialObject) => Object.keys(mainObject).reduce((acc, key) => {
    var _a;
    return (Object.assign(Object.assign({}, acc), { [key]: (_a = partialObject[key], (_a !== null && _a !== void 0 ? _a : acc[key])) }));
}, mainObject);
//# sourceMappingURL=mergeStrategy.js.map