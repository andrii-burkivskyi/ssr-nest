"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var mobx_1 = require("mobx");
var RequestItem_base_1 = require("../../core/decorators/request/item/RequestItem.base");
var RequestList_base_1 = require("../../core/decorators/request/list/RequestList.base");
var requestItem_decorator_1 = require("../../core/decorators/request/item/requestItem.decorator");
var requestList_decorator_1 = require("../../core/decorators/request/list/requestList.decorator");
var gql_1 = require("./gql");
var Project = /** @class */ (function (_super) {
    tslib_1.__extends(Project, _super);
    function Project() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    tslib_1.__decorate([
        requestItem_decorator_1.GqlPrimaryField(),
        mobx_1.observable,
        tslib_1.__metadata("design:type", Number)
    ], Project.prototype, "id", void 0);
    tslib_1.__decorate([
        requestItem_decorator_1.GqlField(),
        mobx_1.observable,
        tslib_1.__metadata("design:type", String)
    ], Project.prototype, "name", void 0);
    tslib_1.__decorate([
        requestItem_decorator_1.GqlField(),
        mobx_1.observable,
        tslib_1.__metadata("design:type", String)
    ], Project.prototype, "color", void 0);
    tslib_1.__decorate([
        requestItem_decorator_1.GqlField(),
        mobx_1.observable,
        tslib_1.__metadata("design:type", String)
    ], Project.prototype, "url", void 0);
    Project = tslib_1.__decorate([
        requestItem_decorator_1.GqlConnect("Project", gql_1.default)
    ], Project);
    return Project;
}(RequestItem_base_1.RequestItemBase));
exports.Project = Project;
var ProjectsList = /** @class */ (function (_super) {
    tslib_1.__extends(ProjectsList, _super);
    function ProjectsList() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ProjectsList = tslib_1.__decorate([
        requestList_decorator_1.GqlListConnect("ProjectsList", gql_1.default, Project)
    ], ProjectsList);
    return ProjectsList;
}(RequestList_base_1.RequestListBase));
exports.ProjectsList = ProjectsList;
//# sourceMappingURL=Project.service.js.map