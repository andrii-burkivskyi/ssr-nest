"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var module_decorator_1 = require("../../core/decorators/module/module.decorator");
var Module_base_1 = require("../../core/decorators/module/Module.base");
var BaseLayout_imports_1 = require("./BaseLayout.imports");
exports.SidebarNavModulesList = Module_base_1.ModuleBase.list(BaseLayout_imports_1.BaseLayout.FrontendSidebarNavModule, BaseLayout_imports_1.BaseLayout.BackendSidebarNavModule);
exports.PagesModulesList = Module_base_1.ModuleBase.list(BaseLayout_imports_1.BaseLayout.ProjectsModule);
var BaseLayoutModule = /** @class */ (function (_super) {
    tslib_1.__extends(BaseLayoutModule, _super);
    function BaseLayoutModule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BaseLayoutModule = tslib_1.__decorate([
        module_decorator_1.Module({
            view: BaseLayout_imports_1.BaseLayout.View,
            model: BaseLayout_imports_1.BaseLayout.Store,
            modules: [
                BaseLayout_imports_1.BaseLayout.HeaderNavModule,
                exports.SidebarNavModulesList,
                exports.PagesModulesList,
            ]
        })
    ], BaseLayoutModule);
    return BaseLayoutModule;
}(Module_base_1.ModuleBase));
exports.BaseLayoutModule = BaseLayoutModule;
;
//# sourceMappingURL=index.js.map