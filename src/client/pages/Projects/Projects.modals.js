"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var service_decorator_1 = require("../../core/decorators/service/service.decorator");
var Modal_store_1 = require("../../components/Modal/Modal.store");
var ProjectModal_import_1 = require("./containers//ProjectModal/ProjectModal.import");
var ProjectsModals = /** @class */ (function () {
    function ProjectsModals() {
        this.project = new Modal_store_1.default({
            component: ProjectModal_import_1.ProjectModal.View,
            model: ProjectModal_import_1.ProjectModal.Store
        });
    }
    ProjectsModals = tslib_1.__decorate([
        service_decorator_1.Service("ProjectsModals")
    ], ProjectsModals);
    return ProjectsModals;
}());
exports.ProjectsModals = ProjectsModals;
//# sourceMappingURL=Projects.modals.js.map