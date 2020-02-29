"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const mobx_1 = require("mobx");
class HiddenFieldStore {
    constructor(props) {
        this.value = null;
        this.defaultValue = null;
        this.shouldValidate = false;
        this.isTouched = false;
        this.isError = false;
        this.initValue = (value) => {
            this.defaultValue = value;
            this.value = this.defaultValue;
        };
        this.clear = () => {
            this.value = null;
            this.defaultValue = null;
        };
        this.reset = () => {
            this.value = this.defaultValue;
        };
        this.value = props.value;
        this.defaultValue = props.value;
    }
    get formValue() {
        return mobx_1.toJS(this.value);
    }
}
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
exports.default = HiddenFieldStore;
//# sourceMappingURL=HiddenField.store.js.map