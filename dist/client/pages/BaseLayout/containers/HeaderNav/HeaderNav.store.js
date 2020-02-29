"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const mobx_1 = require("mobx");
const Location_service_1 = require("../../../../core/services/Location.service");
const routes_1 = require("../../../../core/routes");
const service_decorator_1 = require("../../../../core/decorators/service/service.decorator");
const HeaderNav_i18n_1 = require("./HeaderNav.i18n");
let HeaderNavStore = class HeaderNavStore {
    constructor(location) {
        this.location = location;
    }
    get params() {
        return this.location.routePrams(routes_1.Routes.PROJECT);
    }
    get i18n() {
        return HeaderNav_i18n_1.HeaderNavI18n.i18n;
    }
};
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
exports.HeaderNavStore = HeaderNavStore;
//# sourceMappingURL=HeaderNav.store.js.map