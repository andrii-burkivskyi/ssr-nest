"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const service_decorator_1 = require("../../core/decorators/service/service.decorator");
const Modal_store_1 = require("../../components/Modal/Modal.store");
const ProjectModal_import_1 = require("./containers//ProjectModal/ProjectModal.import");
let ProjectsModals = class ProjectsModals {
    constructor() {
        this.project = new Modal_store_1.default({
            component: ProjectModal_import_1.ProjectModal.View,
            model: ProjectModal_import_1.ProjectModal.Store
        });
    }
};
ProjectsModals = tslib_1.__decorate([
    service_decorator_1.Service("ProjectsModals")
], ProjectsModals);
exports.ProjectsModals = ProjectsModals;
//# sourceMappingURL=Projects.modals.js.map