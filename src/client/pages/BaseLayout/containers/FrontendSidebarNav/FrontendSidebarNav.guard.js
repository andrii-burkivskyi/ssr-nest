"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var mobx_1 = require("mobx");
var Location_service_1 = require("../../../../core/services/Location.service");
var guard_decorator_1 = require("../../../../core/decorators/guard/guard.decorator");
var Guard_base_1 = require("../../../../core/decorators/guard/Guard.base");
var routes_1 = require("../../../../core/routes");
var FrontendSidebarNavGuard = /** @class */ (function (_super) {
    tslib_1.__extends(FrontendSidebarNavGuard, _super);
    function FrontendSidebarNavGuard(location) {
        var _this = _super.call(this) || this;
        _this.location = location;
        _this.route = {
            route: routes_1.Routes.FRONTEND,
            options: { end: false }
        };
        return _this;
    }
    Object.defineProperty(FrontendSidebarNavGuard.prototype, "isActive", {
        get: function () {
            return this.isModuleViewRendered &&
                this.location.isValidRoute(this.route);
        },
        enumerable: true,
        configurable: true
    });
    tslib_1.__decorate([
        mobx_1.computed,
        tslib_1.__metadata("design:type", Boolean),
        tslib_1.__metadata("design:paramtypes", [])
    ], FrontendSidebarNavGuard.prototype, "isActive", null);
    FrontendSidebarNavGuard = tslib_1.__decorate([
        guard_decorator_1.Guard("FrontendSidebarNavGuard"),
        tslib_1.__metadata("design:paramtypes", [Location_service_1.LocationService])
    ], FrontendSidebarNavGuard);
    return FrontendSidebarNavGuard;
}(Guard_base_1.GuardBase));
exports.FrontendSidebarNavGuard = FrontendSidebarNavGuard;
//# sourceMappingURL=FrontendSidebarNav.guard.js.map