"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const service_decorator_1 = require("./service.decorator");
exports.ServiceExtractor = (target) => {
    return {
        name: Reflect.getMetadata(service_decorator_1.SKeys.NAME, target.prototype),
        isGlobal: Reflect.getMetadata(service_decorator_1.SKeys.IS_GLOBAL, target.prototype)
    };
};
//# sourceMappingURL=service.extractor.js.map