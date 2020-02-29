"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const metadata_1 = require("../../../../utils/metadata");
var QFDKeys;
(function (QFDKeys) {
    QFDKeys["QUERY_FIELD_KEYS"] = "front_query:query_field_keys";
    QFDKeys["QUERY_FIELD_IS_NESTED"] = "front_query:query_field_is_nested";
    QFDKeys["QUERY_FIELD_CONSTRUCTOR"] = "front_query:query_field_constructor";
})(QFDKeys = exports.QFDKeys || (exports.QFDKeys = {}));
exports.QueryField = (FieldConstructor) => (target, propertyKey) => {
    metadata_1.pushPropertyKey(QFDKeys.QUERY_FIELD_KEYS, target, propertyKey);
    Reflect.defineMetadata(QFDKeys.QUERY_FIELD_IS_NESTED, false, target, propertyKey);
    Reflect.defineMetadata(QFDKeys.QUERY_FIELD_CONSTRUCTOR, FieldConstructor, target, propertyKey);
};
exports.QueryNestedField = (NestedFieldConstructor) => (target, propertyKey) => {
    metadata_1.pushPropertyKey(QFDKeys.QUERY_FIELD_KEYS, target, propertyKey);
    Reflect.defineMetadata(QFDKeys.QUERY_FIELD_IS_NESTED, true, target, propertyKey);
    Reflect.defineMetadata(QFDKeys.QUERY_FIELD_CONSTRUCTOR, NestedFieldConstructor, target, propertyKey);
};
//# sourceMappingURL=query.decorator.js.map