"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var mobx_1 = require("mobx");
var HiddenFieldStore = /** @class */ (function () {
    function HiddenFieldStore(props) {
        var _this = this;
        this.value = null;
        this.defaultValue = null;
        this.shouldValidate = false;
        this.isTouched = false;
        this.isError = false;
        this.initValue = function (value) {
            _this.defaultValue = value;
            _this.value = _this.defaultValue;
        };
        this.clear = function () {
            _this.value = null;
            _this.defaultValue = null;
        };
        this.reset = function () {
            _this.value = _this.defaultValue;
        };
        this.value = props.value;
        this.defaultValue = props.value;
    }
    Object.defineProperty(HiddenFieldStore.prototype, "formValue", {
        get: function () {
            return mobx_1.toJS(this.value);
        },
        enumerable: true,
        configurable: true
    });
    tslib_1.__decorate([
        mobx_1.observable,
        tslib_1.__metadata("design:type", Object)
    ], HiddenFieldStore.prototype, "value", void 0);
    tslib_1.__decorate([
        mobx_1.observable,
        tslib_1.__metadata("design:type", Object)
    ], HiddenFieldStore.prototype, "defaultValue", void 0);
    tslib_1.__decorate([
        mobx_1.observable,
        tslib_1.__metadata("design:type", Boolean)
    ], HiddenFieldStore.prototype, "shouldValidate", void 0);
    tslib_1.__decorate([
        mobx_1.observable,
        tslib_1.__metadata("design:type", Boolean)
    ], HiddenFieldStore.prototype, "isTouched", void 0);
    tslib_1.__decorate([
        mobx_1.observable,
        tslib_1.__metadata("design:type", Boolean)
    ], HiddenFieldStore.prototype, "isError", void 0);
    tslib_1.__decorate([
        mobx_1.observable,
        tslib_1.__metadata("design:type", Function)
    ], HiddenFieldStore.prototype, "onSubmit", void 0);
    tslib_1.__decorate([
        mobx_1.computed,
        tslib_1.__metadata("design:type", Object),
        tslib_1.__metadata("design:paramtypes", [])
    ], HiddenFieldStore.prototype, "formValue", null);
    tslib_1.__decorate([
        mobx_1.action,
        tslib_1.__metadata("design:type", Object)
    ], HiddenFieldStore.prototype, "initValue", void 0);
    tslib_1.__decorate([
        mobx_1.action,
        tslib_1.__metadata("design:type", Object)
    ], HiddenFieldStore.prototype, "clear", void 0);
    tslib_1.__decorate([
        mobx_1.action,
        tslib_1.__metadata("design:type", Object)
    ], HiddenFieldStore.prototype, "reset", void 0);
    return HiddenFieldStore;
}());
exports.default = HiddenFieldStore;
//# sourceMappingURL=HiddenField.store.js.map