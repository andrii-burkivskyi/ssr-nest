"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
var guard_decorator_1 = require("./guard.decorator");
exports.GuardExtractor = function (target) {
    return {
        name: Reflect.getMetadata(guard_decorator_1.GKeys.NAME, target.prototype),
    };
};
//# sourceMappingURL=guard.extractor.js.map