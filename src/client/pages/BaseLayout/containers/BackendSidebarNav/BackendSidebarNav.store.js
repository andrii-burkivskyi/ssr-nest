"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var mobx_1 = require("mobx");
var Location_service_1 = require("../../../../core/services/Location.service");
var routes_1 = require("../../../../core/routes");
var service_decorator_1 = require("../../../../core/decorators/service/service.decorator");
var BackendSidebarNavStore = /** @class */ (function () {
    function BackendSidebarNavStore(location) {
        this.location = location;
    }
    Object.defineProperty(BackendSidebarNavStore.prototype, "params", {
        get: function () {
            return this.location.routePrams(routes_1.Routes.PROJECT);
        },
        enumerable: true,
        configurable: true
    });
    tslib_1.__decorate([
        mobx_1.computed,
        tslib_1.__metadata("design:type", Object),
        tslib_1.__metadata("design:paramtypes", [])
    ], BackendSidebarNavStore.prototype, "params", null);
    BackendSidebarNavStore = tslib_1.__decorate([
        service_decorator_1.Service("BackendSidebarNavStore"),
        tslib_1.__metadata("design:paramtypes", [Location_service_1.LocationService])
    ], BackendSidebarNavStore);
    return BackendSidebarNavStore;
}());
exports.BackendSidebarNavStore = BackendSidebarNavStore;
//# sourceMappingURL=BackendSidebarNav.store.js.map