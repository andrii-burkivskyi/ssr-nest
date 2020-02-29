"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
var GKeys;
(function (GKeys) {
    GKeys["NAME"] = "guard_decorator:name";
})(GKeys = exports.GKeys || (exports.GKeys = {}));
exports.Guard = (name) => (target) => {
    Reflect.defineMetadata(GKeys.NAME, name, target.prototype);
};
//# sourceMappingURL=guard.decorator.js.map