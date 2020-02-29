"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var mobx_1 = require("mobx");
var constants_1 = require("../../../utils/constants");
var GuardBase = /** @class */ (function () {
    function GuardBase() {
        var _this = this;
        this.isModuleViewRendered = constants_1.IS_NODE();
        this.onMount = function () {
            _this.isModuleViewRendered = true;
        };
        this.onUnmount = function () {
            _this.isModuleViewRendered = false;
        };
    }
    Object.defineProperty(GuardBase.prototype, "isActive", {
        get: function () {
            return this.isModuleViewRendered;
        },
        enumerable: true,
        configurable: true
    });
    tslib_1.__decorate([
        mobx_1.observable,
        tslib_1.__metadata("design:type", Object)
    ], GuardBase.prototype, "isModuleViewRendered", void 0);
    tslib_1.__decorate([
        mobx_1.action,
        tslib_1.__metadata("design:type", Object)
    ], GuardBase.prototype, "onMount", void 0);
    tslib_1.__decorate([
        mobx_1.action,
        tslib_1.__metadata("design:type", Object)
    ], GuardBase.prototype, "onUnmount", void 0);
    tslib_1.__decorate([
        mobx_1.computed,
        tslib_1.__metadata("design:type", Boolean),
        tslib_1.__metadata("design:paramtypes", [])
    ], GuardBase.prototype, "isActive", null);
    return GuardBase;
}());
exports.GuardBase = GuardBase;
//# sourceMappingURL=Guard.base.js.map