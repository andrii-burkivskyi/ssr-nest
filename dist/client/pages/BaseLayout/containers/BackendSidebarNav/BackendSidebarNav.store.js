"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const mobx_1 = require("mobx");
const Location_service_1 = require("../../../../core/services/Location.service");
const routes_1 = require("../../../../core/routes");
const service_decorator_1 = require("../../../../core/decorators/service/service.decorator");
let BackendSidebarNavStore = class BackendSidebarNavStore {
    constructor(location) {
        this.location = location;
    }
    get params() {
        return this.location.routePrams(routes_1.Routes.PROJECT);
    }
};
tslib_1.__decorate([
    mobx_1.computed,
    tslib_1.__metadata("design:type", Object),
    tslib_1.__metadata("design:paramtypes", [])
], BackendSidebarNavStore.prototype, "params", null);
BackendSidebarNavStore = tslib_1.__decorate([
    service_decorator_1.Service("BackendSidebarNavStore"),
    tslib_1.__metadata("design:paramtypes", [Location_service_1.LocationService])
], BackendSidebarNavStore);
exports.BackendSidebarNavStore = BackendSidebarNavStore;
//# sourceMappingURL=BackendSidebarNav.store.js.map