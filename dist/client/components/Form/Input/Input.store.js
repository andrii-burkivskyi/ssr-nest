"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const mobx_1 = require("mobx");
const validation_1 = require("../../../utils/validation");
const translations_1 = require("../../../utils/i18n/translations");
const keyboard_1 = require("../../../utils/keyboard");
const Form_types_1 = require("../../../components/Form/Form.types");
var InputType;
(function (InputType) {
    InputType["TEXT"] = "text";
    InputType["EMAIL"] = "email";
    InputType["PASSWORD"] = "password";
    InputType["SEARCH"] = "search";
    InputType["URL"] = "url";
    InputType["NUMBER"] = "number";
})(InputType || (InputType = {}));
;
class InputStore {
    constructor(props) {
        this.name = "defaultName";
        this.theme = InputStore.theme.DEFAULT;
        this.type = InputStore.type.TEXT;
        this.value = "";
        this.publicValue = "";
        this.defaultValue = "";
        this.validations = [];
        this.shouldDisplayed = true;
        this.isReadOnly = false;
        this.isDisabled = false;
        this.isFocused = false;
        this.shouldValidate = false;
        this.scale = 2;
        this.signed = true;
        this.thousandsSeparator = " ";
        this.radix = ",";
        this.update = (props) => {
            const { value, defaultValue } = props, restProps = tslib_1.__rest(props, ["value", "defaultValue"]);
            this.value = value || defaultValue || this.value;
            this.publicValue = value || defaultValue || this.value;
            this.defaultValue = defaultValue || this.defaultValue;
            mobx_1.set(this, restProps);
        };
        this.initValue = (value) => {
            this.defaultValue = value;
            this.value = this.defaultValue;
            this.publicValue = this.defaultValue;
            this.shouldValidate = false;
        };
        this.reset = () => {
            this.value = this.defaultValue;
            this.publicValue = this.defaultValue;
            this.shouldValidate = false;
        };
        this.clear = () => {
            this.value = "";
            this.publicValue = "";
            this.shouldValidate = false;
        };
        this.change = (value) => {
            this.value = value;
            this.publicValue = value;
        };
        this.commit = (value, mask) => {
            if (this.mask) {
                this.value = mask.unmaskedValue;
                this.publicValue = value;
            }
        };
        this.increment = () => {
            if (this.type === InputStore.type.NUMBER) {
                this.publicValue = String(Number(this.value) + 1);
            }
        };
        this.decrement = () => {
            if (this.type === InputStore.type.NUMBER) {
                this.publicValue = String(Number(this.value) - 1);
            }
        };
        this.onChange = (event) => {
            if (!this.mask) {
                this.value = event.currentTarget.value;
                this.publicValue = event.currentTarget.value;
            }
        };
        this.onAccept = (value, mask) => {
            if (this.mask) {
                this.value = mask.unmaskedValue;
                this.publicValue = value;
            }
        };
        this.focus = () => {
            this.isFocused = true;
        };
        this.blur = () => {
            this.isFocused = false;
            this.shouldValidate = true;
        };
        this.onKeyDown = (event) => {
            if (this.onSubmit && event.keyCode === keyboard_1.KeyCode.ENTER) {
                event.preventDefault();
                event.stopPropagation();
                this.onSubmit();
            }
        };
        if (props) {
            this.value = props.defaultValue || this.defaultValue;
            this.publicValue = props.defaultValue || this.defaultValue;
            this.mask = props.type === InputStore.type.NUMBER
                ? Number
                : undefined;
            mobx_1.set(this, props);
        }
    }
    get formValue() {
        return this.value;
    }
    get tabIndex() {
        return this.isDisabled || this.isReadOnly ? Form_types_1.TabIndex.Disabled : Form_types_1.TabIndex.Regular;
    }
    get publicType() {
        return this.type === InputStore.type.NUMBER
            ? InputStore.type.TEXT
            : this.type;
    }
    get error() {
        const [error, values] = validation_1.validate(this.value, this.validations);
        return translations_1.t(error, values);
    }
    get isTouched() {
        return this.value !== this.defaultValue;
    }
    get isError() {
        return Boolean(this.error);
    }
    get shouldDisplayError() {
        return this.shouldValidate && Boolean(this.error);
    }
    get shouldBeFocused() {
        return this.isFocused;
    }
}
InputStore.theme = Form_types_1.FormTheme;
InputStore.type = InputType;
tslib_1.__decorate([
    mobx_1.observable,
    tslib_1.__metadata("design:type", String)
], InputStore.prototype, "name", void 0);
tslib_1.__decorate([
    mobx_1.observable,
    tslib_1.__metadata("design:type", Object)
], InputStore.prototype, "label", void 0);
tslib_1.__decorate([
    mobx_1.observable,
    tslib_1.__metadata("design:type", String)
], InputStore.prototype, "theme", void 0);
tslib_1.__decorate([
    mobx_1.observable,
    tslib_1.__metadata("design:type", String)
], InputStore.prototype, "type", void 0);
tslib_1.__decorate([
    mobx_1.observable,
    tslib_1.__metadata("design:type", String)
], InputStore.prototype, "value", void 0);
tslib_1.__decorate([
    mobx_1.observable,
    tslib_1.__metadata("design:type", String)
], InputStore.prototype, "publicValue", void 0);
tslib_1.__decorate([
    mobx_1.observable,
    tslib_1.__metadata("design:type", Object)
], InputStore.prototype, "placeholder", void 0);
tslib_1.__decorate([
    mobx_1.observable,
    tslib_1.__metadata("design:type", String)
], InputStore.prototype, "defaultValue", void 0);
tslib_1.__decorate([
    mobx_1.observable,
    tslib_1.__metadata("design:type", Array)
], InputStore.prototype, "validations", void 0);
tslib_1.__decorate([
    mobx_1.observable,
    tslib_1.__metadata("design:type", Object)
], InputStore.prototype, "mask", void 0);
tslib_1.__decorate([
    mobx_1.observable,
    tslib_1.__metadata("design:type", Boolean)
], InputStore.prototype, "shouldDisplayed", void 0);
tslib_1.__decorate([
    mobx_1.observable,
    tslib_1.__metadata("design:type", Boolean)
], InputStore.prototype, "isReadOnly", void 0);
tslib_1.__decorate([
    mobx_1.observable,
    tslib_1.__metadata("design:type", Boolean)
], InputStore.prototype, "isDisabled", void 0);
tslib_1.__decorate([
    mobx_1.observable,
    tslib_1.__metadata("design:type", Boolean)
], InputStore.prototype, "isFocused", void 0);
tslib_1.__decorate([
    mobx_1.observable,
    tslib_1.__metadata("design:type", Boolean)
], InputStore.prototype, "shouldValidate", void 0);
tslib_1.__decorate([
    mobx_1.observable,
    tslib_1.__metadata("design:type", Function)
], InputStore.prototype, "onSubmit", void 0);
tslib_1.__decorate([
    mobx_1.observable,
    tslib_1.__metadata("design:type", Number)
], InputStore.prototype, "min", void 0);
tslib_1.__decorate([
    mobx_1.observable,
    tslib_1.__metadata("design:type", Number)
], InputStore.prototype, "max", void 0);
tslib_1.__decorate([
    mobx_1.observable,
    tslib_1.__metadata("design:type", Number)
], InputStore.prototype, "scale", void 0);
tslib_1.__decorate([
    mobx_1.observable,
    tslib_1.__metadata("design:type", Boolean)
], InputStore.prototype, "signed", void 0);
tslib_1.__decorate([
    mobx_1.observable,
    tslib_1.__metadata("design:type", String)
], InputStore.prototype, "thousandsSeparator", void 0);
tslib_1.__decorate([
    mobx_1.observable,
    tslib_1.__metadata("design:type", String)
], InputStore.prototype, "radix", void 0);
tslib_1.__decorate([
    mobx_1.computed,
    tslib_1.__metadata("design:type", String),
    tslib_1.__metadata("design:paramtypes", [])
], InputStore.prototype, "formValue", null);
tslib_1.__decorate([
    mobx_1.computed,
    tslib_1.__metadata("design:type", Number),
    tslib_1.__metadata("design:paramtypes", [])
], InputStore.prototype, "tabIndex", null);
tslib_1.__decorate([
    mobx_1.computed,
    tslib_1.__metadata("design:type", String),
    tslib_1.__metadata("design:paramtypes", [])
], InputStore.prototype, "publicType", null);
tslib_1.__decorate([
    mobx_1.computed,
    tslib_1.__metadata("design:type", String),
    tslib_1.__metadata("design:paramtypes", [])
], InputStore.prototype, "error", null);
tslib_1.__decorate([
    mobx_1.computed,
    tslib_1.__metadata("design:type", Boolean),
    tslib_1.__metadata("design:paramtypes", [])
], InputStore.prototype, "isTouched", null);
tslib_1.__decorate([
    mobx_1.computed,
    tslib_1.__metadata("design:type", Boolean),
    tslib_1.__metadata("design:paramtypes", [])
], InputStore.prototype, "isError", null);
tslib_1.__decorate([
    mobx_1.computed,
    tslib_1.__metadata("design:type", Boolean),
    tslib_1.__metadata("design:paramtypes", [])
], InputStore.prototype, "shouldDisplayError", null);
tslib_1.__decorate([
    mobx_1.computed,
    tslib_1.__metadata("design:type", Boolean),
    tslib_1.__metadata("design:paramtypes", [])
], InputStore.prototype, "shouldBeFocused", null);
tslib_1.__decorate([
    mobx_1.action,
    tslib_1.__metadata("design:type", Object)
], InputStore.prototype, "update", void 0);
tslib_1.__decorate([
    mobx_1.action,
    tslib_1.__metadata("design:type", Object)
], InputStore.prototype, "initValue", void 0);
tslib_1.__decorate([
    mobx_1.action,
    tslib_1.__metadata("design:type", Object)
], InputStore.prototype, "reset", void 0);
tslib_1.__decorate([
    mobx_1.action,
    tslib_1.__metadata("design:type", Object)
], InputStore.prototype, "clear", void 0);
tslib_1.__decorate([
    mobx_1.action,
    tslib_1.__metadata("design:type", Object)
], InputStore.prototype, "change", void 0);
tslib_1.__decorate([
    mobx_1.action,
    tslib_1.__metadata("design:type", Object)
], InputStore.prototype, "commit", void 0);
tslib_1.__decorate([
    mobx_1.action,
    tslib_1.__metadata("design:type", Object)
], InputStore.prototype, "increment", void 0);
tslib_1.__decorate([
    mobx_1.action,
    tslib_1.__metadata("design:type", Object)
], InputStore.prototype, "decrement", void 0);
tslib_1.__decorate([
    mobx_1.action,
    tslib_1.__metadata("design:type", Object)
], InputStore.prototype, "onChange", void 0);
tslib_1.__decorate([
    mobx_1.action,
    tslib_1.__metadata("design:type", Object)
], InputStore.prototype, "onAccept", void 0);
tslib_1.__decorate([
    mobx_1.action,
    tslib_1.__metadata("design:type", Object)
], InputStore.prototype, "focus", void 0);
tslib_1.__decorate([
    mobx_1.action,
    tslib_1.__metadata("design:type", Object)
], InputStore.prototype, "blur", void 0);
tslib_1.__decorate([
    mobx_1.action,
    tslib_1.__metadata("design:type", Object)
], InputStore.prototype, "onKeyDown", void 0);
exports.default = InputStore;
//# sourceMappingURL=Input.store.js.map