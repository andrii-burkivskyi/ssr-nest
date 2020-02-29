"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const mobx_1 = require("mobx");
const service_decorator_1 = require("../../core/decorators/service/service.decorator");
const Projects_i18n_1 = require("./Projects.i18n");
const ProjectsList_store_1 = require("./containers/ProjectsList/ProjectsList.store");
const Projects_modals_1 = require("./Projects.modals");
let ProjectsStore = class ProjectsStore {
    constructor(list, modals) {
        this.list = list;
        this.modals = modals;
        this.addNewProject = () => {
            this.modals.project.toggle(this.list.requests.projects.addEmpty());
        };
    }
    ;
    get i18n() {
        return Projects_i18n_1.ProjectsI18n.i18n;
    }
};
tslib_1.__decorate([
    mobx_1.computed,
    tslib_1.__metadata("design:type", Object),
    tslib_1.__metadata("design:paramtypes", [])
], ProjectsStore.prototype, "i18n", null);
tslib_1.__decorate([
    mobx_1.action,
    tslib_1.__metadata("design:type", Object)
], ProjectsStore.prototype, "addNewProject", void 0);
ProjectsStore = tslib_1.__decorate([
    service_decorator_1.Service("ProjectsStore"),
    tslib_1.__metadata("design:paramtypes", [ProjectsList_store_1.ProjectsListStore,
        Projects_modals_1.ProjectsModals])
], ProjectsStore);
exports.ProjectsStore = ProjectsStore;
//# sourceMappingURL=Projects.store.js.map