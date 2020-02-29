"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var module_decorator_1 = require("../../../../core/decorators/module/module.decorator");
var Module_base_1 = require("../../../../core/decorators/module/Module.base");
var FrontendSidebarNav_imports_1 = require("./FrontendSidebarNav.imports");
var FrontendSidebarNav_guard_1 = require("./FrontendSidebarNav.guard");
var FrontendSidebarNavModule = /** @class */ (function (_super) {
    tslib_1.__extends(FrontendSidebarNavModule, _super);
    function FrontendSidebarNavModule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FrontendSidebarNavModule = tslib_1.__decorate([
        module_decorator_1.Module({
            guard: FrontendSidebarNav_guard_1.FrontendSidebarNavGuard,
            view: FrontendSidebarNav_imports_1.FrontendSidebarNav.View,
            model: FrontendSidebarNav_imports_1.FrontendSidebarNav.Store,
        })
    ], FrontendSidebarNavModule);
    return FrontendSidebarNavModule;
}(Module_base_1.ModuleBase));
exports.FrontendSidebarNavModule = FrontendSidebarNavModule;
;
//# sourceMappingURL=index.js.map