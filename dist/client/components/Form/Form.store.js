"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const mobx_1 = require("mobx");
const constants_1 = require("../../utils/constants");
const typeGuards_1 = require("../../utils/typeGuards");
class FormStore {
    constructor(props) {
        this.initValues = (values) => {
            Object.entries(values).forEach(([key, value]) => {
                if (!typeGuards_1.isNill(value)) {
                    this.fields[key].initValue(value);
                }
            });
        };
        this.clear = () => {
            this._fields.forEach((field) => field.clear());
        };
        this.reset = () => {
            this._fields.forEach((field) => field.reset());
        };
        this.allowValidation = () => {
            this._fields.forEach((field) => field.shouldValidate = true);
        };
        this.init = (fields) => {
            this.fields = fields;
        };
        this.fields = props.fields;
        this._fields.forEach((field) => field.onSubmit = (field.onSubmit || props.onSubmit));
        this.submit = props.onSubmit || constants_1.DEFAULT_FUNCTION;
        this._touchHook = props.touchHook;
        this._touchHook && mobx_1.observe(this, "isTouched", this._touchHook);
        this._validHook = props.validHook;
        this._validHook && mobx_1.observe(this, "isValid", this._validHook);
    }
    get data() {
        return Object.entries(this.fields).reduce((data, [key, field]) => {
            data[key] = field.formValue;
            return data;
        }, {});
    }
    ;
    get _fields() {
        return Object.keys(this.fields).map((key) => this.fields[key]);
    }
    get isTouched() {
        return this._fields.some((field) => field.isTouched);
    }
    get isValid() {
        return !this._fields.some((field) => field.isError);
    }
}
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
exports.default = FormStore;
//# sourceMappingURL=Form.store.js.map