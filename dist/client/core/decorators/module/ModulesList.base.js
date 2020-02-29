"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const mobx_1 = require("mobx");
class ModulesListBase {
    constructor(modules) {
        this.initModules = [];
        this.init = async (parent) => {
            const modules = await Promise.all(this.modules.map((lazyModule) => lazyModule()));
            modules.forEach((Module) => {
                this.initModules.push(new Module(parent));
            });
        };
        this.onMount = () => {
            this.initModules.forEach((m) => m.guard.onMount());
        };
        this.onUnmount = () => {
            this.initModules.forEach((m) => m.guard.onUnmount());
        };
        this.modules = modules;
    }
    get item() {
        var _a;
        return _a = this.initModules.find((m) => m.guard.isActive), (_a !== null && _a !== void 0 ? _a : null);
    }
}
tslib_1.__decorate([
    mobx_1.observable,
    tslib_1.__metadata("design:type", Array)
], ModulesListBase.prototype, "modules", void 0);
tslib_1.__decorate([
    mobx_1.observable,
    tslib_1.__metadata("design:type", Object)
], ModulesListBase.prototype, "initModules", void 0);
tslib_1.__decorate([
    mobx_1.computed,
    tslib_1.__metadata("design:type", Object),
    tslib_1.__metadata("design:paramtypes", [])
], ModulesListBase.prototype, "item", null);
tslib_1.__decorate([
    mobx_1.action,
    tslib_1.__metadata("design:type", Object)
], ModulesListBase.prototype, "init", void 0);
tslib_1.__decorate([
    mobx_1.action,
    tslib_1.__metadata("design:type", Object)
], ModulesListBase.prototype, "onMount", void 0);
tslib_1.__decorate([
    mobx_1.action,
    tslib_1.__metadata("design:type", Object)
], ModulesListBase.prototype, "onUnmount", void 0);
exports.ModulesListBase = ModulesListBase;
//# sourceMappingURL=ModulesList.base.js.map