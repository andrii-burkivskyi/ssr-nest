"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const mobx_1 = require("mobx");
const Location_service_1 = require("../../../../core/services/Location.service");
const guard_decorator_1 = require("../../../../core/decorators/guard/guard.decorator");
const Guard_base_1 = require("../../../../core/decorators/guard/Guard.base");
const routes_1 = require("../../../../core/routes");
let FrontendSidebarNavGuard = class FrontendSidebarNavGuard extends Guard_base_1.GuardBase {
    constructor(location) {
        super();
        this.location = location;
        this.route = {
            route: routes_1.Routes.FRONTEND,
            options: { end: false }
        };
    }
    get isActive() {
        return this.isModuleViewRendered &&
            this.location.isValidRoute(this.route);
    }
};
tslib_1.__decorate([
    mobx_1.computed,
    tslib_1.__metadata("design:type", Boolean),
    tslib_1.__metadata("design:paramtypes", [])
], FrontendSidebarNavGuard.prototype, "isActive", null);
FrontendSidebarNavGuard = tslib_1.__decorate([
    guard_decorator_1.Guard("FrontendSidebarNavGuard"),
    tslib_1.__metadata("design:paramtypes", [Location_service_1.LocationService])
], FrontendSidebarNavGuard);
exports.FrontendSidebarNavGuard = FrontendSidebarNavGuard;
//# sourceMappingURL=FrontendSidebarNav.guard.js.map