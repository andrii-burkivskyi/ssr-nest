"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const React = require("react");
const mobx_1 = require("mobx");
const validation_1 = require("../../../utils/validation");
const translations_1 = require("../../../utils/i18n/translations");
const keyboard_1 = require("../../../utils/keyboard");
const Form_types_1 = require("../../../components/Form/Form.types");
const watch_1 = require("../../../utils/watch");
class TextAreaStore {
    constructor(props) {
        this.value = null;
        this.theme = TextAreaStore.theme.DEFAULT;
        this.label = "";
        this.defaultValue = null;
        this.placeholder = "";
        this.name = "defaultName";
        this.validations = [];
        this.shouldDisplayed = true;
        this.shouldValidate = false;
        this.isReadOnly = false;
        this.isDisabled = false;
        this.isFocused = false;
        this.fieldContainerRef = React.createRef();
        this.fieldRef = React.createRef();
        this.init = () => {
            watch_1.default(() => {
                return Boolean(this.fieldContainerRef.current) && Boolean(this.fieldRef.current);
            }, () => {
                var _a, _b;
                this.fieldContainerHeight = (_a = this.fieldContainerRef.current) === null || _a === void 0 ? void 0 : _a.offsetHeight;
                this.fieldHeight = (_b = this.fieldRef.current) === null || _b === void 0 ? void 0 : _b.scrollHeight;
            });
        };
        this.update = (props) => {
            const { value } = props, restProps = tslib_1.__rest(props, ["value"]);
            this.value = value || this.value;
            mobx_1.set(this, restProps);
        };
        this.initValue = (value) => {
            this.defaultValue = value;
            this.value = this.defaultValue;
            this.shouldValidate = false;
        };
        this.reset = () => {
            this.value = this.defaultValue;
            this.shouldValidate = false;
        };
        this.clear = () => {
            this.value = null;
            this.shouldValidate = false;
        };
        this.change = (value) => (this.value = value);
        this.onChange = (event) => {
            this.fieldHeight = event.currentTarget.scrollHeight;
            this.value = event.currentTarget.value;
        };
        this.onFocus = () => (this.isFocused = true);
        this.onBlur = () => {
            this.isFocused = false;
            this.shouldValidate = true;
        };
        this.onKeyDown = (event) => {
            if (this.onSubmit && event.keyCode === keyboard_1.KeyCode.ENTER && event.shiftKey) {
                event.preventDefault();
                event.stopPropagation();
                this.onSubmit();
            }
        };
        if (props) {
            this.value = props.defaultValue || this.defaultValue;
            mobx_1.set(this, props);
        }
    }
    get publicValue() {
        var _a;
        return _a = this.value, (_a !== null && _a !== void 0 ? _a : "");
    }
    get formValue() {
        return this.publicValue;
    }
    get tabIndex() {
        return this.isDisabled || this.isReadOnly
            ? Form_types_1.TabIndex.Disabled
            : Form_types_1.TabIndex.Regular;
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
        return this.shouldValidate && this.isError;
    }
    get shouldBeFocused() {
        return this.isFocused;
    }
    get scrollbarStyle() {
        return { height: this.fieldContainerHeight };
    }
    ;
    get fieldStyle() {
        return { height: this.fieldHeight };
    }
}
TextAreaStore.theme = Form_types_1.FormTheme;
tslib_1.__decorate([
    mobx_1.observable,
    tslib_1.__metadata("design:type", Object)
], TextAreaStore.prototype, "value", void 0);
tslib_1.__decorate([
    mobx_1.observable,
    tslib_1.__metadata("design:type", Number)
], TextAreaStore.prototype, "fieldHeight", void 0);
tslib_1.__decorate([
    mobx_1.observable,
    tslib_1.__metadata("design:type", Number)
], TextAreaStore.prototype, "fieldContainerHeight", void 0);
tslib_1.__decorate([
    mobx_1.observable,
    tslib_1.__metadata("design:type", String)
], TextAreaStore.prototype, "theme", void 0);
tslib_1.__decorate([
    mobx_1.observable,
    tslib_1.__metadata("design:type", Object)
], TextAreaStore.prototype, "label", void 0);
tslib_1.__decorate([
    mobx_1.observable,
    tslib_1.__metadata("design:type", Object)
], TextAreaStore.prototype, "defaultValue", void 0);
tslib_1.__decorate([
    mobx_1.observable,
    tslib_1.__metadata("design:type", String)
], TextAreaStore.prototype, "placeholder", void 0);
tslib_1.__decorate([
    mobx_1.observable,
    tslib_1.__metadata("design:type", String)
], TextAreaStore.prototype, "name", void 0);
tslib_1.__decorate([
    mobx_1.observable,
    tslib_1.__metadata("design:type", Array)
], TextAreaStore.prototype, "validations", void 0);
tslib_1.__decorate([
    mobx_1.observable,
    tslib_1.__metadata("design:type", Boolean)
], TextAreaStore.prototype, "shouldDisplayed", void 0);
tslib_1.__decorate([
    mobx_1.observable,
    tslib_1.__metadata("design:type", Boolean)
], TextAreaStore.prototype, "shouldValidate", void 0);
tslib_1.__decorate([
    mobx_1.observable,
    tslib_1.__metadata("design:type", Boolean)
], TextAreaStore.prototype, "isReadOnly", void 0);
tslib_1.__decorate([
    mobx_1.observable,
    tslib_1.__metadata("design:type", Boolean)
], TextAreaStore.prototype, "isDisabled", void 0);
tslib_1.__decorate([
    mobx_1.observable,
    tslib_1.__metadata("design:type", Boolean)
], TextAreaStore.prototype, "isFocused", void 0);
tslib_1.__decorate([
    mobx_1.observable,
    tslib_1.__metadata("design:type", Object)
], TextAreaStore.prototype, "fieldContainerRef", void 0);
tslib_1.__decorate([
    mobx_1.observable,
    tslib_1.__metadata("design:type", Object)
], TextAreaStore.prototype, "fieldRef", void 0);
tslib_1.__decorate([
    mobx_1.observable,
    tslib_1.__metadata("design:type", Function)
], TextAreaStore.prototype, "onSubmit", void 0);
tslib_1.__decorate([
    mobx_1.computed,
    tslib_1.__metadata("design:type", String),
    tslib_1.__metadata("design:paramtypes", [])
], TextAreaStore.prototype, "publicValue", null);
tslib_1.__decorate([
    mobx_1.computed,
    tslib_1.__metadata("design:type", String),
    tslib_1.__metadata("design:paramtypes", [])
], TextAreaStore.prototype, "formValue", null);
tslib_1.__decorate([
    mobx_1.computed,
    tslib_1.__metadata("design:type", Number),
    tslib_1.__metadata("design:paramtypes", [])
], TextAreaStore.prototype, "tabIndex", null);
tslib_1.__decorate([
    mobx_1.computed,
    tslib_1.__metadata("design:type", String),
    tslib_1.__metadata("design:paramtypes", [])
], TextAreaStore.prototype, "error", null);
tslib_1.__decorate([
    mobx_1.computed,
    tslib_1.__metadata("design:type", Boolean),
    tslib_1.__metadata("design:paramtypes", [])
], TextAreaStore.prototype, "isTouched", null);
tslib_1.__decorate([
    mobx_1.computed,
    tslib_1.__metadata("design:type", Boolean),
    tslib_1.__metadata("design:paramtypes", [])
], TextAreaStore.prototype, "isError", null);
tslib_1.__decorate([
    mobx_1.computed,
    tslib_1.__metadata("design:type", Boolean),
    tslib_1.__metadata("design:paramtypes", [])
], TextAreaStore.prototype, "shouldDisplayError", null);
tslib_1.__decorate([
    mobx_1.computed,
    tslib_1.__metadata("design:type", Boolean),
    tslib_1.__metadata("design:paramtypes", [])
], TextAreaStore.prototype, "shouldBeFocused", null);
tslib_1.__decorate([
    mobx_1.computed,
    tslib_1.__metadata("design:type", Object),
    tslib_1.__metadata("design:paramtypes", [])
], TextAreaStore.prototype, "scrollbarStyle", null);
tslib_1.__decorate([
    mobx_1.computed,
    tslib_1.__metadata("design:type", Object),
    tslib_1.__metadata("design:paramtypes", [])
], TextAreaStore.prototype, "fieldStyle", null);
tslib_1.__decorate([
    mobx_1.action,
    tslib_1.__metadata("design:type", Object)
], TextAreaStore.prototype, "init", void 0);
tslib_1.__decorate([
    mobx_1.action,
    tslib_1.__metadata("design:type", Object)
], TextAreaStore.prototype, "update", void 0);
tslib_1.__decorate([
    mobx_1.action,
    tslib_1.__metadata("design:type", Object)
], TextAreaStore.prototype, "initValue", void 0);
tslib_1.__decorate([
    mobx_1.action,
    tslib_1.__metadata("design:type", Object)
], TextAreaStore.prototype, "reset", void 0);
tslib_1.__decorate([
    mobx_1.action,
    tslib_1.__metadata("design:type", Object)
], TextAreaStore.prototype, "clear", void 0);
tslib_1.__decorate([
    mobx_1.action,
    tslib_1.__metadata("design:type", Object)
], TextAreaStore.prototype, "change", void 0);
tslib_1.__decorate([
    mobx_1.action,
    tslib_1.__metadata("design:type", Object)
], TextAreaStore.prototype, "onChange", void 0);
tslib_1.__decorate([
    mobx_1.action,
    tslib_1.__metadata("design:type", Object)
], TextAreaStore.prototype, "onFocus", void 0);
tslib_1.__decorate([
    mobx_1.action,
    tslib_1.__metadata("design:type", Object)
], TextAreaStore.prototype, "onBlur", void 0);
tslib_1.__decorate([
    mobx_1.action,
    tslib_1.__metadata("design:type", Object)
], TextAreaStore.prototype, "onKeyDown", void 0);
exports.default = TextAreaStore;
//# sourceMappingURL=TextArea.store.js.map