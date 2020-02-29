"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const mobx_1 = require("mobx");
const Location_service_1 = require("../../../../core/services/Location.service");
const routes_1 = require("../../../../core/routes");
const service_decorator_1 = require("../../../../core/decorators/service/service.decorator");
let FrontendSidebarNavStore = class FrontendSidebarNavStore {
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
], FrontendSidebarNavStore.prototype, "params", null);
FrontendSidebarNavStore = tslib_1.__decorate([
    service_decorator_1.Service("FrontendSidebarNavStore"),
    tslib_1.__metadata("design:paramtypes", [Location_service_1.LocationService])
], FrontendSidebarNavStore);
exports.FrontendSidebarNavStore = FrontendSidebarNavStore;
//# sourceMappingURL=FrontendSidebarNav.store.js.map