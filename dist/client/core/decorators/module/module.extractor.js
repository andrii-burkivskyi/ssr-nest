"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const module_decorator_1 = require("./module.decorator");
const constants_1 = require("../../../utils/constants");
exports.AsyncModuleExtractor = (target) => {
    var _a, _b, _c;
    return {
        View: Reflect.getMetadata(module_decorator_1.MDKeys.VIEW, target),
        Model: Reflect.getMetadata(module_decorator_1.MDKeys.MODEL, target),
        Guard: (_a = Reflect.getMetadata(module_decorator_1.MDKeys.GUARD, target), (_a !== null && _a !== void 0 ? _a : null)),
        modules: (_b = Reflect.getMetadata(module_decorator_1.MDKeys.MODULES, target), (_b !== null && _b !== void 0 ? _b : constants_1.DEFAULT_ARRAY)),
        services: (_c = Reflect.getMetadata(module_decorator_1.MDKeys.SERVICES, target), (_c !== null && _c !== void 0 ? _c : constants_1.DEFAULT_ARRAY)),
    };
};
exports.SyncModuleExtractor = (target) => {
    var _a, _b, _c;
    return {
        View: Reflect.getMetadata(module_decorator_1.MDKeys.VIEW, target),
        Model: Reflect.getMetadata(module_decorator_1.MDKeys.MODEL, target),
        Guard: (_a = Reflect.getMetadata(module_decorator_1.MDKeys.GUARD, target), (_a !== null && _a !== void 0 ? _a : null)),
        modules: (_b = Reflect.getMetadata(module_decorator_1.MDKeys.MODULES, target), (_b !== null && _b !== void 0 ? _b : constants_1.DEFAULT_ARRAY)),
        services: (_c = Reflect.getMetadata(module_decorator_1.MDKeys.SERVICES, target), (_c !== null && _c !== void 0 ? _c : constants_1.DEFAULT_ARRAY)),
    };
};
exports.ClassExtractor = (target) => {
    var _a;
    return {
        paramtypes: (_a = Reflect.getMetadata('design:paramtypes', target), (_a !== null && _a !== void 0 ? _a : constants_1.DEFAULT_ARRAY)),
    };
};
//# sourceMappingURL=module.extractor.js.map