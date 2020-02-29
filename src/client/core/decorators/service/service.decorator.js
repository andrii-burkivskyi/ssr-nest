"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
var defaultServiceOptions = {
    isGlobal: false,
};
var SKeys;
(function (SKeys) {
    SKeys["NAME"] = "service_decorator:name";
    SKeys["IS_GLOBAL"] = "service_decorator:is_global";
})(SKeys = exports.SKeys || (exports.SKeys = {}));
exports.Service = function (name, options) {
    if (options === void 0) { options = defaultServiceOptions; }
    return function (target) {
        Reflect.defineMetadata(SKeys.NAME, name, target.prototype);
        Reflect.defineMetadata(SKeys.IS_GLOBAL, options.isGlobal, target.prototype);
    };
};
//# sourceMappingURL=service.decorator.js.map