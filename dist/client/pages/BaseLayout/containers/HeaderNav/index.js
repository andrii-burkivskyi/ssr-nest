"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const module_decorator_1 = require("../../../../core/decorators/module/module.decorator");
const Module_base_1 = require("../../../../core/decorators/module/Module.base");
const HeaderNav_imports_1 = require("./HeaderNav.imports");
const HeaderNav_guard_1 = require("./HeaderNav.guard");
let HeaderNavModule = class HeaderNavModule extends Module_base_1.ModuleBase {
};
HeaderNavModule = tslib_1.__decorate([
    module_decorator_1.Module({
        guard: HeaderNav_guard_1.HeaderNavGuard,
        view: HeaderNav_imports_1.HeaderNav.View,
        model: HeaderNav_imports_1.HeaderNav.Store,
    })
], HeaderNavModule);
exports.HeaderNavModule = HeaderNavModule;
;
//# sourceMappingURL=index.js.map