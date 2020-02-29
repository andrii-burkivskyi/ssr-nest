"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const module_decorator_1 = require("../../../../core/decorators/module/module.decorator");
const Module_base_1 = require("../../../../core/decorators/module/Module.base");
const BackendSidebarNav_imports_1 = require("./BackendSidebarNav.imports");
const BackendSidebarNav_guard_1 = require("./BackendSidebarNav.guard");
let BackendSidebarNavModule = class BackendSidebarNavModule extends Module_base_1.ModuleBase {
};
BackendSidebarNavModule = tslib_1.__decorate([
    module_decorator_1.Module({
        guard: BackendSidebarNav_guard_1.BackendSidebarNavGuard,
        view: BackendSidebarNav_imports_1.BackendSidebarNav.View,
        model: BackendSidebarNav_imports_1.BackendSidebarNav.Store,
    })
], BackendSidebarNavModule);
exports.BackendSidebarNavModule = BackendSidebarNavModule;
;
//# sourceMappingURL=index.js.map