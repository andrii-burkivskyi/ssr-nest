"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const module_decorator_1 = require("../../core/decorators/module/module.decorator");
const Module_base_1 = require("../../core/decorators/module/Module.base");
const BaseLayout_imports_1 = require("./BaseLayout.imports");
exports.SidebarNavModulesList = Module_base_1.ModuleBase.list(BaseLayout_imports_1.BaseLayout.FrontendSidebarNavModule, BaseLayout_imports_1.BaseLayout.BackendSidebarNavModule);
exports.PagesModulesList = Module_base_1.ModuleBase.list(BaseLayout_imports_1.BaseLayout.ProjectsModule);
let BaseLayoutModule = class BaseLayoutModule extends Module_base_1.ModuleBase {
};
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
exports.BaseLayoutModule = BaseLayoutModule;
;
//# sourceMappingURL=index.js.map