"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const React = require("react");
const mobx_1 = require("mobx");
const Form_types_1 = require("../Form.types");
const validation_1 = require("../../../utils/validation");
const translations_1 = require("../../../utils/i18n/translations");
const Modal_store_1 = require("../../../components/Modal/Modal.store");
const Option_store_1 = require("../../../components/Form/Option/Option.store");
const List_store_1 = require("../../../components/List/List.store");
const Keybinding_store_1 = require("../../../core/common/Keybinding.store");
const typeGuards_1 = require("../../../utils/typeGuards");
class SelectStore {
    constructor(props) {
        var _a;
        this.value = null;
        this.theme = SelectStore.theme.DEFAULT;
        this.defaultValue = null;
        this.search = "";
        this.shouldValidate = false;
        this.shouldDisplayed = true;
        this.isTouched = false;
        this.isFocused = false;
        this.isReadOnly = false;
        this.isDisabled = false;
        this.validations = [];
        this.modal = new Modal_store_1.default({ onClose: () => this.close() });
        this.targetRef = React.createRef();
        this.searchRef = React.createRef();
        this.list = new List_store_1.default();
        this.open = () => {
            if (!this.isDisabled && !this.isReadOnly) {
                this.modal.open();
                Keybinding_store_1.default.setScope(Keybinding_store_1.default.scope.LIST_OPEN);
                this.value
                    ? this.list.scrollTo(this.value)
                    : this.selectAndScrollToOption(this.list.firstPublicOption);
            }
        };
        this.close = () => {
            var _a;
            this.search = "";
            this.shouldValidate = true;
            (_a = this.targetRef.current) === null || _a === void 0 ? void 0 : _a.focus();
        };
        this.toggle = () => {
            this.modal.isOpen
                ? this.close()
                : this.open();
        };
        this.changeSearch = (search) => {
            this.search = search;
        };
        this.onChangeSearch = (event) => {
            this.search = event.currentTarget.value;
            this.list.filter = (item) => translations_1.t(item.label).includes(this.search);
            this.selectAndScrollToOption(this.list.firstPublicOption);
        };
        this.initValue = (value) => {
            const option = this.list.options.find((option) => option.value === value);
            this.defaultValue = (option !== null && option !== void 0 ? option : null);
            this.value = this.defaultValue;
            this.shouldValidate = false;
        };
        this.reset = () => {
            this.value = this.defaultValue;
            this.selectOption(this.defaultValue);
            this.shouldValidate = false;
        };
        this.clear = () => {
            this.value = null;
            this.selectOption(this.value);
            this.shouldValidate = false;
        };
        this.selectOption = (option) => {
            this.list.options.forEach((item) => {
                item.isSelected = option ? option.value === item.value : false;
            });
        };
        this.selectPrevOption = () => {
            const currentOption = this.list.options.find((option) => option.isSelected);
            if (currentOption) {
                const currentOptionIndex = this.list.publicOptions.indexOf(currentOption);
                const prevOption = this.list.publicOptions[currentOptionIndex - 1] || this.list.firstPublicOption;
                this.selectOption(prevOption);
                this.list.scrollTo(prevOption);
            }
        };
        this.selectNextOption = () => {
            const currentOption = this.list.options.find((option) => option.isSelected);
            if (currentOption) {
                const currentOptionIndex = this.list.publicOptions.indexOf(currentOption);
                const nextOption = this.list.publicOptions[currentOptionIndex + 1] || this.list.lastPublicOption;
                this.selectOption(nextOption);
                this.list.scrollTo(nextOption, false);
            }
        };
        this.selectAndScrollToOption = (option) => {
            this.selectOption(option);
            this.list.scrollTo(option);
        };
        this.changeValue = (option) => {
            this.value = option;
            this.selectOption(option);
            this.modal.close();
        };
        this.changeValueFromSelection = (event) => {
            event.preventDefault();
            const option = this.list.options.find((option) => option.isSelected);
            if (option) {
                this.changeValue(option);
            }
        };
        this.onFocus = () => {
            this.isFocused = true;
            Keybinding_store_1.default.setScope(Keybinding_store_1.default.scope.LIST_FOCUS);
            SelectStore.hotkeyListOpen.setAction(this.open);
            SelectStore.hotkeyListDown.setAction(this.selectNextOption);
            SelectStore.hotkeyListUp.setAction(this.selectPrevOption);
            SelectStore.hotkeyListChangeValue.setAction(this.changeValueFromSelection);
        };
        this.onBlur = () => {
            this.isFocused = false;
            if (!this.modal.isOpen) {
                this.shouldValidate = true;
                Keybinding_store_1.default.resetScope();
                SelectStore.hotkeyListOpen.reset();
                SelectStore.hotkeyListDown.reset();
                SelectStore.hotkeyListUp.reset();
                SelectStore.hotkeyListChangeValue.reset();
            }
        };
        if (props) {
            const { options = [], getOptionLabel, getOptionValue } = props, restProps = tslib_1.__rest(props, ["options", "getOptionLabel", "getOptionValue"]);
            mobx_1.set(this, restProps);
            this.list = new List_store_1.default({
                options: options.map((option) => new Option_store_1.default({
                    theme: this.theme,
                    label: getOptionLabel(option),
                    value: getOptionValue(option),
                    isSelected: !typeGuards_1.isNill(props.defaultValue) ? getOptionValue(option) === props.defaultValue : false,
                    props: option,
                    onClick: this.changeValue
                }))
            });
            this.value = !typeGuards_1.isNill(props.defaultValue)
                ? (_a = this.list.publicOptions.find((option) => option.value === props.defaultValue), (_a !== null && _a !== void 0 ? _a : null)) : null;
        }
    }
    get publicValue() {
        return this.value;
    }
    get formValue() {
        var _a, _b;
        return String((_b = (_a = this.publicValue) === null || _a === void 0 ? void 0 : _a.value, (_b !== null && _b !== void 0 ? _b : "")));
    }
    get error() {
        const [error, values] = validation_1.validate(this.value, this.validations);
        return translations_1.t(error, values);
    }
    get isError() {
        return Boolean(this.error);
    }
    get shouldDisplayError() {
        return this.shouldValidate && this.isError;
    }
    get shouldBeFocused() {
        return this.isFocused || this.modal.isOpen;
    }
}
SelectStore.theme = Form_types_1.FormTheme;
SelectStore.hotkeyListOpen = new Keybinding_store_1.default({
    key: "down",
    name: "list.open",
    scope: Keybinding_store_1.default.scope.LIST_FOCUS
});
SelectStore.hotkeyListDown = new Keybinding_store_1.default({
    key: "down",
    name: "list.down",
    scope: Keybinding_store_1.default.scope.LIST_OPEN
});
SelectStore.hotkeyListUp = new Keybinding_store_1.default({
    key: "up",
    name: "list.up",
    scope: Keybinding_store_1.default.scope.LIST_OPEN
});
SelectStore.hotkeyListChangeValue = new Keybinding_store_1.default({
    key: "enter",
    name: "list.change_value",
    scope: Keybinding_store_1.default.scope.LIST_OPEN
});
tslib_1.__decorate([
    mobx_1.observable,
    tslib_1.__metadata("design:type", Object)
], SelectStore.prototype, "value", void 0);
tslib_1.__decorate([
    mobx_1.observable,
    tslib_1.__metadata("design:type", String)
], SelectStore.prototype, "theme", void 0);
tslib_1.__decorate([
    mobx_1.observable,
    tslib_1.__metadata("design:type", Object)
], SelectStore.prototype, "label", void 0);
tslib_1.__decorate([
    mobx_1.observable,
    tslib_1.__metadata("design:type", Object)
], SelectStore.prototype, "placeholder", void 0);
tslib_1.__decorate([
    mobx_1.observable,
    tslib_1.__metadata("design:type", Object)
], SelectStore.prototype, "defaultValue", void 0);
tslib_1.__decorate([
    mobx_1.observable,
    tslib_1.__metadata("design:type", String)
], SelectStore.prototype, "search", void 0);
tslib_1.__decorate([
    mobx_1.observable,
    tslib_1.__metadata("design:type", Boolean)
], SelectStore.prototype, "shouldValidate", void 0);
tslib_1.__decorate([
    mobx_1.observable,
    tslib_1.__metadata("design:type", Boolean)
], SelectStore.prototype, "shouldDisplayed", void 0);
tslib_1.__decorate([
    mobx_1.observable,
    tslib_1.__metadata("design:type", Boolean)
], SelectStore.prototype, "isTouched", void 0);
tslib_1.__decorate([
    mobx_1.observable,
    tslib_1.__metadata("design:type", Boolean)
], SelectStore.prototype, "isFocused", void 0);
tslib_1.__decorate([
    mobx_1.observable,
    tslib_1.__metadata("design:type", Boolean)
], SelectStore.prototype, "isReadOnly", void 0);
tslib_1.__decorate([
    mobx_1.observable,
    tslib_1.__metadata("design:type", Boolean)
], SelectStore.prototype, "isDisabled", void 0);
tslib_1.__decorate([
    mobx_1.observable,
    tslib_1.__metadata("design:type", Array)
], SelectStore.prototype, "validations", void 0);
tslib_1.__decorate([
    mobx_1.observable,
    tslib_1.__metadata("design:type", Modal_store_1.default)
], SelectStore.prototype, "modal", void 0);
tslib_1.__decorate([
    mobx_1.observable,
    tslib_1.__metadata("design:type", Object)
], SelectStore.prototype, "targetRef", void 0);
tslib_1.__decorate([
    mobx_1.observable,
    tslib_1.__metadata("design:type", Object)
], SelectStore.prototype, "searchRef", void 0);
tslib_1.__decorate([
    mobx_1.observable,
    tslib_1.__metadata("design:type", List_store_1.default)
], SelectStore.prototype, "list", void 0);
tslib_1.__decorate([
    mobx_1.observable,
    tslib_1.__metadata("design:type", Function)
], SelectStore.prototype, "onSubmit", void 0);
tslib_1.__decorate([
    mobx_1.computed,
    tslib_1.__metadata("design:type", Object),
    tslib_1.__metadata("design:paramtypes", [])
], SelectStore.prototype, "publicValue", null);
tslib_1.__decorate([
    mobx_1.computed,
    tslib_1.__metadata("design:type", String),
    tslib_1.__metadata("design:paramtypes", [])
], SelectStore.prototype, "formValue", null);
tslib_1.__decorate([
    mobx_1.computed,
    tslib_1.__metadata("design:type", String),
    tslib_1.__metadata("design:paramtypes", [])
], SelectStore.prototype, "error", null);
tslib_1.__decorate([
    mobx_1.computed,
    tslib_1.__metadata("design:type", Boolean),
    tslib_1.__metadata("design:paramtypes", [])
], SelectStore.prototype, "isError", null);
tslib_1.__decorate([
    mobx_1.computed,
    tslib_1.__metadata("design:type", Boolean),
    tslib_1.__metadata("design:paramtypes", [])
], SelectStore.prototype, "shouldDisplayError", null);
tslib_1.__decorate([
    mobx_1.computed,
    tslib_1.__metadata("design:type", Boolean),
    tslib_1.__metadata("design:paramtypes", [])
], SelectStore.prototype, "shouldBeFocused", null);
tslib_1.__decorate([
    mobx_1.action,
    tslib_1.__metadata("design:type", Object)
], SelectStore.prototype, "open", void 0);
tslib_1.__decorate([
    mobx_1.action,
    tslib_1.__metadata("design:type", Object)
], SelectStore.prototype, "close", void 0);
tslib_1.__decorate([
    mobx_1.action,
    tslib_1.__metadata("design:type", Object)
], SelectStore.prototype, "toggle", void 0);
tslib_1.__decorate([
    mobx_1.action,
    tslib_1.__metadata("design:type", Object)
], SelectStore.prototype, "changeSearch", void 0);
tslib_1.__decorate([
    mobx_1.action,
    tslib_1.__metadata("design:type", Object)
], SelectStore.prototype, "onChangeSearch", void 0);
tslib_1.__decorate([
    mobx_1.action,
    tslib_1.__metadata("design:type", Object)
], SelectStore.prototype, "initValue", void 0);
tslib_1.__decorate([
    mobx_1.action,
    tslib_1.__metadata("design:type", Object)
], SelectStore.prototype, "reset", void 0);
tslib_1.__decorate([
    mobx_1.action,
    tslib_1.__metadata("design:type", Object)
], SelectStore.prototype, "clear", void 0);
tslib_1.__decorate([
    mobx_1.action,
    tslib_1.__metadata("design:type", Object)
], SelectStore.prototype, "selectOption", void 0);
tslib_1.__decorate([
    mobx_1.action,
    tslib_1.__metadata("design:type", Object)
], SelectStore.prototype, "selectPrevOption", void 0);
tslib_1.__decorate([
    mobx_1.action,
    tslib_1.__metadata("design:type", Object)
], SelectStore.prototype, "selectNextOption", void 0);
tslib_1.__decorate([
    mobx_1.action,
    tslib_1.__metadata("design:type", Object)
], SelectStore.prototype, "selectAndScrollToOption", void 0);
tslib_1.__decorate([
    mobx_1.action,
    tslib_1.__metadata("design:type", Object)
], SelectStore.prototype, "changeValue", void 0);
tslib_1.__decorate([
    mobx_1.action,
    tslib_1.__metadata("design:type", Object)
], SelectStore.prototype, "changeValueFromSelection", void 0);
tslib_1.__decorate([
    mobx_1.action,
    tslib_1.__metadata("design:type", Object)
], SelectStore.prototype, "onFocus", void 0);
tslib_1.__decorate([
    mobx_1.action,
    tslib_1.__metadata("design:type", Object)
], SelectStore.prototype, "onBlur", void 0);
exports.default = SelectStore;
//# sourceMappingURL=Select.store.js.map