"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
var queryField_decorator_1 = require("./queryField.decorator");
var constants_1 = require("../../../../utils/constants");
exports.QueryFieldExtractor = function (target) {
    var _a;
    return {
        keys: (_a = Reflect.getMetadata(queryField_decorator_1.QPDKeys.QUERY_PROPERTY_KEYS, target), (_a !== null && _a !== void 0 ? _a : constants_1.DEFAULT_ARRAY)),
        conformer: function (propertyKey) { return Reflect.getMetadata(queryField_decorator_1.QPDKeys.QUERY_PROPERTY_CONFORMER, target, propertyKey); },
    };
};
//# sourceMappingURL=queryField.extractor.js.map