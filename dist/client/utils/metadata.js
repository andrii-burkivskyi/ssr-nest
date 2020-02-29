"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
exports.pushPropertyKey = (metadataKey, target, propertyKey) => {
    var _a;
    const keys = (_a = Reflect.getMetadata(metadataKey, target), (_a !== null && _a !== void 0 ? _a : []));
    keys.push(propertyKey);
    Reflect.defineMetadata(metadataKey, keys, target);
};
exports.pushPropertyData = (metadataKey, target, data) => {
    var _a;
    const keys = (_a = Reflect.getMetadata(metadataKey, target), (_a !== null && _a !== void 0 ? _a : []));
    keys.push(data);
    Reflect.defineMetadata(metadataKey, keys, target);
};
//# sourceMappingURL=metadata.js.map