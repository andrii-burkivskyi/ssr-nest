"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var mobx_1 = require("mobx");
var constants_1 = require("../../utils/constants");
var typeGuards_1 = require("../../utils/typeGuards");
var FormStore = /** @class */ (function () {
    function FormStore(props) {
        var _this = this;
        this.initValues = function (values) {
            Object.entries(values).forEach(function (_a) {
                var key = _a[0], value = _a[1];
                if (!typeGuards_1.isNill(value)) {
                    _this.fields[key].initValue(value);
                }
            });
        };
        this.clear = function () {
            _this._fields.forEach(function (field) { return field.clear(); });
        };
        this.reset = function () {
            _this._fields.forEach(function (field) { return field.reset(); });
        };
        this.allowValidation = function () {
            _this._fields.forEach(function (field) { return field.shouldValidate = true; });
        };
        this.init = function (fields) {
            _this.fields = fields;
        };
        this.fields = props.fields;
        this._fields.forEach(function (field) { return field.onSubmit = (field.onSubmit || props.onSubmit); });
        this.submit = props.onSubmit || constants_1.DEFAULT_FUNCTION;
        this._touchHook = props.touchHook;
        this._touchHook && mobx_1.observe(this, "isTouched", this._touchHook);
        this._validHook = props.validHook;
        this._validHook && mobx_1.observe(this, "isValid", this._validHook);
    }
    Object.defineProperty(FormStore.prototype, "data", {
        get: function () {
            return Object.entries(this.fields).reduce(function (data, _a) {
                var key = _a[0], field = _a[1];
                data[key] = field.formValue;
                return data;
            }, {});
        },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(FormStore.prototype, "_fields", {
        get: function () {
            var _this = this;
            return Object.keys(this.fields).map(function (key) { return _this.fields[key]; });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormStore.prototype, "isTouched", {
        get: function () {
            return this._fields.some(function (field) { return field.isTouched; });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormStore.prototype, "isValid", {
        get: function () {
            return !this._fields.some(function (field) { return field.isError; });
        },
        enumerable: true,
        configurable: true
    });
    tslib_1.__decorate([
        mobx_1.observable,
        tslib_1.__metadata("design:type", Object)
    ], FormStore.prototype, "fields", void 0);
    tslib_1.__decorate([
        mobx_1.observable,
        tslib_1.__metadata("design:type", Function)
    ], FormStore.prototype, "_touchHook", void 0);
    tslib_1.__decorate([
        mobx_1.observable,
        tslib_1.__metadata("design:type", Function)
    ], FormStore.prototype, "_validHook", void 0);
    tslib_1.__decorate([
        mobx_1.observable,
        tslib_1.__metadata("design:type", Function)
    ], FormStore.prototype, "_readyForSubmitHook", void 0);
    tslib_1.__decorate([
        mobx_1.observable,
        tslib_1.__metadata("design:type", Function)
    ], FormStore.prototype, "submit", void 0);
    tslib_1.__decorate([
        mobx_1.computed,
        tslib_1.__metadata("design:type", Object),
        tslib_1.__metadata("design:paramtypes", [])
    ], FormStore.prototype, "data", null);
    tslib_1.__decorate([
        mobx_1.computed,
        tslib_1.__metadata("design:type", Array),
        tslib_1.__metadata("design:paramtypes", [])
    ], FormStore.prototype, "_fields", null);
    tslib_1.__decorate([
        mobx_1.computed,
        tslib_1.__metadata("design:type", Boolean),
        tslib_1.__metadata("design:paramtypes", [])
    ], FormStore.prototype, "isTouched", null);
    tslib_1.__decorate([
        mobx_1.computed,
        tslib_1.__metadata("design:type", Boolean),
        tslib_1.__metadata("design:paramtypes", [])
    ], FormStore.prototype, "isValid", null);
    tslib_1.__decorate([
        mobx_1.action,
        tslib_1.__metadata("design:type", Object)
    ], FormStore.prototype, "initValues", void 0);
    tslib_1.__decorate([
        mobx_1.action,
        tslib_1.__metadata("design:type", Object)
    ], FormStore.prototype, "clear", void 0);
    tslib_1.__decorate([
        mobx_1.action,
        tslib_1.__metadata("design:type", Object)
    ], FormStore.prototype, "reset", void 0);
    tslib_1.__decorate([
        mobx_1.action,
        tslib_1.__metadata("design:type", Object)
    ], FormStore.prototype, "allowValidation", void 0);
    tslib_1.__decorate([
        mobx_1.action,
        tslib_1.__metadata("design:type", Object)
    ], FormStore.prototype, "init", void 0);
    return FormStore;
}());
exports.default = FormStore;
//# sourceMappingURL=Form.store.js.map