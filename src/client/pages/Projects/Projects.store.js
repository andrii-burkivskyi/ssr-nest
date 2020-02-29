"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var mobx_1 = require("mobx");
var service_decorator_1 = require("../../core/decorators/service/service.decorator");
var Projects_i18n_1 = require("./Projects.i18n");
var ProjectsList_store_1 = require("./containers/ProjectsList/ProjectsList.store");
var Projects_modals_1 = require("./Projects.modals");
var ProjectsStore = /** @class */ (function () {
    function ProjectsStore(list, modals) {
        var _this = this;
        this.list = list;
        this.modals = modals;
        this.addNewProject = function () {
            _this.modals.project.toggle(_this.list.requests.projects.addEmpty());
        };
    }
    ;
    Object.defineProperty(ProjectsStore.prototype, "i18n", {
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
    return ProjectsStore;
}());
exports.ProjectsStore = ProjectsStore;
//# sourceMappingURL=Projects.store.js.map