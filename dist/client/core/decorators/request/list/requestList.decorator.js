"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var RLIKeys;
(function (RLIKeys) {
    RLIKeys["NAME"] = "front_rli_keys:name";
    RLIKeys["QUERY"] = "front_rli_keys:query";
    RLIKeys["ITEM_CONSTRUCTOR"] = "front_rli_keys:item_constructor";
})(RLIKeys = exports.RLIKeys || (exports.RLIKeys = {}));
exports.GqlListConnect = (name, gql, ItemConstructor) => (target) => {
    Reflect.defineMetadata(RLIKeys.NAME, name, target.prototype);
    Reflect.defineMetadata(RLIKeys.QUERY, gql, target.prototype);
    Reflect.defineMetadata(RLIKeys.ITEM_CONSTRUCTOR, ItemConstructor, target.prototype);
};
//# sourceMappingURL=requestList.decorator.js.map