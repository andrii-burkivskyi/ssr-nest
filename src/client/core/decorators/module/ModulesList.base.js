"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var mobx_1 = require("mobx");
var ModulesListBase = /** @class */ (function () {
    function ModulesListBase(modules) {
        var _this = this;
        this.initModules = [];
        this.init = function (parent) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
            var modules;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Promise.all(this.modules.map(function (lazyModule) { return lazyModule(); }))];
                    case 1:
                        modules = _a.sent();
                        modules.forEach(function (Module) {
                            _this.initModules.push(new Module(parent));
                        });
                        return [2 /*return*/];
                }
            });
        }); };
        this.onMount = function () {
            _this.initModules.forEach(function (m) { return m.guard.onMount(); });
        };
        this.onUnmount = function () {
            _this.initModules.forEach(function (m) { return m.guard.onUnmount(); });
        };
        this.modules = modules;
    }
    Object.defineProperty(ModulesListBase.prototype, "item", {
        get: function () {
            var _a;
            return _a = this.initModules.find(function (m) { return m.guard.isActive; }), (_a !== null && _a !== void 0 ? _a : null);
        },
        enumerable: true,
        configurable: true
    });
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
    return ModulesListBase;
}());
exports.ModulesListBase = ModulesListBase;
//# sourceMappingURL=ModulesList.base.js.map