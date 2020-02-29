"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const mobx_1 = require("mobx");
const RequestItem_base_1 = require("../../core/decorators/request/item/RequestItem.base");
const RequestList_base_1 = require("../../core/decorators/request/list/RequestList.base");
const requestItem_decorator_1 = require("../../core/decorators/request/item/requestItem.decorator");
const requestList_decorator_1 = require("../../core/decorators/request/list/requestList.decorator");
const gql_1 = require("./gql");
const Project_service_1 = require("../Projects/Project.service");
let Entity = class Entity extends RequestItem_base_1.RequestItemBase {
};
tslib_1.__decorate([
    requestItem_decorator_1.GqlPrimaryField(),
    mobx_1.observable,
    tslib_1.__metadata("design:type", Number)
], Entity.prototype, "id", void 0);
tslib_1.__decorate([
    requestItem_decorator_1.GqlField(),
    mobx_1.observable,
    tslib_1.__metadata("design:type", String)
], Entity.prototype, "name", void 0);
tslib_1.__decorate([
    requestItem_decorator_1.GqlField(),
    mobx_1.observable,
    tslib_1.__metadata("design:type", Project_service_1.Project)
], Entity.prototype, "project", void 0);
Entity = tslib_1.__decorate([
    requestItem_decorator_1.GqlConnect("Entity", gql_1.default)
], Entity);
exports.Entity = Entity;
let EntitiesList = class EntitiesList extends RequestList_base_1.RequestListBase {
};
EntitiesList = tslib_1.__decorate([
    requestList_decorator_1.GqlListConnect("EntitiesList", gql_1.default, Entity)
], EntitiesList);
exports.EntitiesList = EntitiesList;
//# sourceMappingURL=Entity.service.js.map