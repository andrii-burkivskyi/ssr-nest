"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const queryField_decorator_1 = require("./queryField.decorator");
const constants_1 = require("../../../../utils/constants");
exports.QueryFieldExtractor = (target) => {
    var _a;
    return {
        keys: (_a = Reflect.getMetadata(queryField_decorator_1.QPDKeys.QUERY_PROPERTY_KEYS, target), (_a !== null && _a !== void 0 ? _a : constants_1.DEFAULT_ARRAY)),
        conformer: (propertyKey) => Reflect.getMetadata(queryField_decorator_1.QPDKeys.QUERY_PROPERTY_CONFORMER, target, propertyKey),
    };
};
//# sourceMappingURL=queryField.extractor.js.map