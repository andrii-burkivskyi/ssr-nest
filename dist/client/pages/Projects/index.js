"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const module_decorator_1 = require("../../core/decorators/module/module.decorator");
const Module_base_1 = require("../../core/decorators/module/Module.base");
const Projects_imports_1 = require("./Projects.imports");
const Projects_guard_1 = require("./Projects.guard");
let ProjectsModule = class ProjectsModule extends Module_base_1.ModuleBase {
};
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
exports.ProjectsModule = ProjectsModule;
;
//# sourceMappingURL=index.js.map