"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const constants_1 = require("../../../../utils/constants");
const requestItem_decorator_1 = require("./requestItem.decorator");
exports.RequestItemExtractor = (target) => {
    var _a;
    return {
        keys: (_a = Reflect.getMetadata(requestItem_decorator_1.RIKeys.KEYS, target), (_a !== null && _a !== void 0 ? _a : constants_1.DEFAULT_ARRAY)),
        query: Reflect.getMetadata(requestItem_decorator_1.RIKeys.QUERY, target),
        name: Reflect.getMetadata(requestItem_decorator_1.RIKeys.NAME, target),
        isPrimary: (propertyKey) => Reflect.getMetadata(requestItem_decorator_1.RIKeys.IS_PRIMARY, target, propertyKey),
    };
};
//# sourceMappingURL=requestItem.extractor.js.map