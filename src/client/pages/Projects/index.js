"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var module_decorator_1 = require("../../core/decorators/module/module.decorator");
var Module_base_1 = require("../../core/decorators/module/Module.base");
var Projects_imports_1 = require("./Projects.imports");
var Projects_guard_1 = require("./Projects.guard");
var ProjectsModule = /** @class */ (function (_super) {
    tslib_1.__extends(ProjectsModule, _super);
    function ProjectsModule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ProjectsModule = tslib_1.__decorate([
        module_decorator_1.Module({
            view: Projects_imports_1.Projects.View,
            model: Projects_imports_1.Projects.Store,
            guard: Projects_guard_1.ProjectsGuard,
            services: [
                Projects_imports_1.Projects.RequestService,
                Projects_imports_1.Projects.ListService,
                Projects_imports_1.Projects.ModalsService
            ]
        })
    ], ProjectsModule);
    return ProjectsModule;
}(Module_base_1.ModuleBase));
exports.ProjectsModule = ProjectsModule;
;
//# sourceMappingURL=index.js.map