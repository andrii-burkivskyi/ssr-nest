"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var mobx_1 = require("mobx");
var Location_service_1 = require("../../../../core/services/Location.service");
var routes_1 = require("../../../../core/routes");
var service_decorator_1 = require("../../../../core/decorators/service/service.decorator");
var HeaderNav_i18n_1 = require("./HeaderNav.i18n");
var HeaderNavStore = /** @class */ (function () {
    function HeaderNavStore(location) {
        this.location = location;
    }
    Object.defineProperty(HeaderNavStore.prototype, "params", {
        get: function () {
            return this.location.routePrams(routes_1.Routes.PROJECT);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HeaderNavStore.prototype, "i18n", {
        get: function () {
            return HeaderNav_i18n_1.HeaderNavI18n.i18n;
        },
        enumerable: true,
        configurable: true
    });
    tslib_1.__decorate([
        mobx_1.computed,
        tslib_1.__metadata("design:type", Object),
        tslib_1.__metadata("design:paramtypes", [])
    ], HeaderNavStore.prototype, "params", null);
    tslib_1.__decorate([
        mobx_1.computed,
        tslib_1.__metadata("design:type", Object),
        tslib_1.__metadata("design:paramtypes", [])
    ], HeaderNavStore.prototype, "i18n", null);
    HeaderNavStore = tslib_1.__decorate([
        service_decorator_1.Service("HeaderNavStore"),
        tslib_1.__metadata("design:paramtypes", [Location_service_1.LocationService])
    ], HeaderNavStore);
    return HeaderNavStore;
}());
exports.HeaderNavStore = HeaderNavStore;
//# sourceMappingURL=HeaderNav.store.js.map