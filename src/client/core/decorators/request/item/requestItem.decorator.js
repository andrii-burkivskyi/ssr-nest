"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
var metadata_1 = require("../../../../utils/metadata");
var RIKeys;
(function (RIKeys) {
    RIKeys["NAME"] = "front_ri_keys:name";
    RIKeys["QUERY"] = "front_ri_keys:query";
    RIKeys["KEYS"] = "front_ri_keys:keys";
    RIKeys["IS_PRIMARY"] = "front_ri_keys:is_primary";
})(RIKeys = exports.RIKeys || (exports.RIKeys = {}));
exports.GqlConnect = function (name, props) { return function (target) {
    Reflect.defineMetadata(RIKeys.NAME, name, target.prototype);
    Reflect.defineMetadata(RIKeys.QUERY, props, target.prototype);
}; };
exports.GqlPrimaryField = function () { return exports.GqlField({ isPrimary: true }); };
exports.GqlField = function (props) { return function (target, propertyKey) {
    var _a, _b;
    metadata_1.pushPropertyKey(RIKeys.KEYS, target, propertyKey);
    var isPrimary = (_b = (_a = props) === null || _a === void 0 ? void 0 : _a.isPrimary, (_b !== null && _b !== void 0 ? _b : false));
    Reflect.defineMetadata(RIKeys.IS_PRIMARY, isPrimary, target, propertyKey);
}; };
//# sourceMappingURL=requestItem.decorator.js.map