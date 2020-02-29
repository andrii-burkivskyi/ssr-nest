"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var module_decorator_1 = require("../../../../core/decorators/module/module.decorator");
var Module_base_1 = require("../../../../core/decorators/module/Module.base");
var BackendSidebarNav_imports_1 = require("./BackendSidebarNav.imports");
var BackendSidebarNav_guard_1 = require("./BackendSidebarNav.guard");
var BackendSidebarNavModule = /** @class */ (function (_super) {
    tslib_1.__extends(BackendSidebarNavModule, _super);
    function BackendSidebarNavModule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BackendSidebarNavModule = tslib_1.__decorate([
        module_decorator_1.Module({
            guard: BackendSidebarNav_guard_1.BackendSidebarNavGuard,
            view: BackendSidebarNav_imports_1.BackendSidebarNav.View,
            model: BackendSidebarNav_imports_1.BackendSidebarNav.Store,
        })
    ], BackendSidebarNavModule);
    return BackendSidebarNavModule;
}(Module_base_1.ModuleBase));
exports.BackendSidebarNavModule = BackendSidebarNavModule;
;
//# sourceMappingURL=index.js.map