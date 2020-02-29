"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const module_decorator_1 = require("../../../../core/decorators/module/module.decorator");
const Module_base_1 = require("../../../../core/decorators/module/Module.base");
const FrontendSidebarNav_imports_1 = require("./FrontendSidebarNav.imports");
const FrontendSidebarNav_guard_1 = require("./FrontendSidebarNav.guard");
let FrontendSidebarNavModule = class FrontendSidebarNavModule extends Module_base_1.ModuleBase {
};
FrontendSidebarNavModule = tslib_1.__decorate([
    module_decorator_1.Module({
        guard: FrontendSidebarNav_guard_1.FrontendSidebarNavGuard,
        view: FrontendSidebarNav_imports_1.FrontendSidebarNav.View,
        model: FrontendSidebarNav_imports_1.FrontendSidebarNav.Store,
    })
], FrontendSidebarNavModule);
exports.FrontendSidebarNavModule = FrontendSidebarNavModule;
;
//# sourceMappingURL=index.js.map