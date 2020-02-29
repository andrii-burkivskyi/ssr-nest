"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const mobx_1 = require("mobx");
const RequestItem_base_1 = require("../../core/decorators/request/item/RequestItem.base");
const RequestList_base_1 = require("../../core/decorators/request/list/RequestList.base");
const requestItem_decorator_1 = require("../../core/decorators/request/item/requestItem.decorator");
const requestList_decorator_1 = require("../../core/decorators/request/list/requestList.decorator");
const gql_1 = require("./gql");
let Project = class Project extends RequestItem_base_1.RequestItemBase {
};
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
exports.Project = Project;
let ProjectsList = class ProjectsList extends RequestList_base_1.RequestListBase {
};
ProjectsList = tslib_1.__decorate([
    requestList_decorator_1.GqlListConnect("ProjectsList", gql_1.default, Project)
], ProjectsList);
exports.ProjectsList = ProjectsList;
//# sourceMappingURL=Project.service.js.map