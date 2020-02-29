"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const mobx_1 = require("mobx");
const constants_1 = require("../../../utils/constants");
class GuardBase {
    constructor() {
        this.isModuleViewRendered = constants_1.IS_NODE();
        this.onMount = () => {
            this.isModuleViewRendered = true;
        };
        this.onUnmount = () => {
            this.isModuleViewRendered = false;
        };
    }
    get isActive() {
        return this.isModuleViewRendered;
    }
}
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
exports.GuardBase = GuardBase;
//# sourceMappingURL=Guard.base.js.map