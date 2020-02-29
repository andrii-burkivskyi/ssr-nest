"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var mobx_1 = require("mobx");
var service_decorator_1 = require("../../../../core/decorators/service/service.decorator");
var Projects_i18n_1 = require("../../Projects.i18n");
var Projects_requests_1 = require("../../Projects.requests");
var Projects_modals_1 = require("../../Projects.modals");
var ProjectsListStore = /** @class */ (function () {
    function ProjectsListStore(requests, modals) {
        this.requests = requests;
        this.modals = modals;
    }
    Object.defineProperty(ProjectsListStore.prototype, "i18n", {
        get: function () {
            return Projects_i18n_1.ProjectsI18n.i18n;
        },
        enumerable: true,
        configurable: true
    });
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
    return ProjectsListStore;
}());
exports.ProjectsListStore = ProjectsListStore;
//# sourceMappingURL=ProjectsList.store.js.map