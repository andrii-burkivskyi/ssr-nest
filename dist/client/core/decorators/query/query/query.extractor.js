"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const query_decorator_1 = require("./query.decorator");
const constants_1 = require("../../../../utils/constants");
exports.QueryExtractor = (target) => {
    var _a;
    return {
        keys: (_a = Reflect.getMetadata(query_decorator_1.QFDKeys.QUERY_FIELD_KEYS, target), (_a !== null && _a !== void 0 ? _a : constants_1.DEFAULT_ARRAY)),
        isNested: (propertyKey) => Reflect.getMetadata(query_decorator_1.QFDKeys.QUERY_FIELD_IS_NESTED, target, propertyKey),
        Constructor: (propertyKey) => Reflect.getMetadata(query_decorator_1.QFDKeys.QUERY_FIELD_CONSTRUCTOR, target, propertyKey)
    };
};
//# sourceMappingURL=query.extractor.js.map