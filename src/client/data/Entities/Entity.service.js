"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var mobx_1 = require("mobx");
var RequestItem_base_1 = require("../../core/decorators/request/item/RequestItem.base");
var RequestList_base_1 = require("../../core/decorators/request/list/RequestList.base");
var requestItem_decorator_1 = require("../../core/decorators/request/item/requestItem.decorator");
var requestList_decorator_1 = require("../../core/decorators/request/list/requestList.decorator");
var gql_1 = require("./gql");
var Project_service_1 = require("../Projects/Project.service");
var Entity = /** @class */ (function (_super) {
    tslib_1.__extends(Entity, _super);
    function Entity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
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
    return Entity;
}(RequestItem_base_1.RequestItemBase));
exports.Entity = Entity;
var EntitiesList = /** @class */ (function (_super) {
    tslib_1.__extends(EntitiesList, _super);
    function EntitiesList() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EntitiesList = tslib_1.__decorate([
        requestList_decorator_1.GqlListConnect("EntitiesList", gql_1.default, Entity)
    ], EntitiesList);
    return EntitiesList;
}(RequestList_base_1.RequestListBase));
exports.EntitiesList = EntitiesList;
//# sourceMappingURL=Entity.service.js.map