"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const metadata_1 = require("../../../../utils/metadata");
var QPDKeys;
(function (QPDKeys) {
    QPDKeys["QUERY_PROPERTY_KEYS"] = "front_query:query_property_keys";
    QPDKeys["QUERY_PROPERTY_CONFORMER"] = "front_query:query_property_conformer";
})(QPDKeys = exports.QPDKeys || (exports.QPDKeys = {}));
exports.QueryProperty = (conformer) => (target, propertyKey) => {
    if (conformer) {
        metadata_1.pushPropertyKey(QPDKeys.QUERY_PROPERTY_KEYS, target, propertyKey);
    }
    Reflect.defineMetadata(QPDKeys.QUERY_PROPERTY_CONFORMER, conformer, target, propertyKey);
};
//# sourceMappingURL=queryField.decorator.js.map