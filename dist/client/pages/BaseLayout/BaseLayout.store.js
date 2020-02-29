"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const service_decorator_1 = require("../../core/decorators/service/service.decorator");
const Location_service_1 = require("../../core/services/Location.service");
const _1 = require(".");
let BaseLayoutStore = class BaseLayoutStore {
    constructor(module, location) {
        this.module = module;
        this.location = location;
    }
};
BaseLayoutStore = tslib_1.__decorate([
    service_decorator_1.Service('BaseLayoutStore'),
    tslib_1.__metadata("design:paramtypes", [_1.BaseLayoutModule,
        Location_service_1.LocationService])
], BaseLayoutStore);
exports.BaseLayoutStore = BaseLayoutStore;
//# sourceMappingURL=BaseLayout.store.js.map