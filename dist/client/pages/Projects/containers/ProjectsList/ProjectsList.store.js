"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const mobx_1 = require("mobx");
const service_decorator_1 = require("../../../../core/decorators/service/service.decorator");
const Projects_i18n_1 = require("../../Projects.i18n");
const Projects_requests_1 = require("../../Projects.requests");
const Projects_modals_1 = require("../../Projects.modals");
let ProjectsListStore = class ProjectsListStore {
    constructor(requests, modals) {
        this.requests = requests;
        this.modals = modals;
    }
    get i18n() {
        return Projects_i18n_1.ProjectsI18n.i18n;
    }
};
tslib_1.__decorate([
    mobx_1.computed,
    tslib_1.__metadata("design:type", Object),
    tslib_1.__metadata("design:paramtypes", [])
], ProjectsListStore.prototype, "i18n", null);
ProjectsListStore = tslib_1.__decorate([
    service_decorator_1.Service("ProjectsListStore"),
    tslib_1.__metadata("design:paramtypes", [Projects_requests_1.ProjectsRequests,
        Projects_modals_1.ProjectsModals])
], ProjectsListStore);
exports.ProjectsListStore = ProjectsListStore;
//# sourceMappingURL=ProjectsList.store.js.map