"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var service_decorator_1 = require("../../core/decorators/service/service.decorator");
var Location_service_1 = require("../../core/services/Location.service");
var _1 = require(".");
var BaseLayoutStore = /** @class */ (function () {
    function BaseLayoutStore(module, location) {
        this.module = module;
        this.location = location;
    }
    BaseLayoutStore = tslib_1.__decorate([
        service_decorator_1.Service('BaseLayoutStore'),
        tslib_1.__metadata("design:paramtypes", [_1.BaseLayoutModule,
            Location_service_1.LocationService])
    ], BaseLayoutStore);
    return BaseLayoutStore;
}());
exports.BaseLayoutStore = BaseLayoutStore;
//# sourceMappingURL=BaseLayout.store.js.map