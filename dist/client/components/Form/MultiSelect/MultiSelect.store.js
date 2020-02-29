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
class MultiSelectStore {
    constructor(props) {
        var _a;
        this.value = [];
        this.theme = MultiSelectStore.theme.DEFAULT;
        this.defaultValue = [];
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
                this.selectAndScrollToOption(this.list.firstPublicOption);
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
            var _a;
            this.value = !typeGuards_1.isNill(value)
                ? (_a = this.list.options.filter((option) => value.includes(option.value)), (_a !== null && _a !== void 0 ? _a : [])) : [];
            this.selectOption(this.list.firstPublicOption);
            this.shouldValidate = false;
        };
        this.reset = () => {
            var _a;
            this.value = !typeGuards_1.isNill(this.defaultValue)
                ? (_a = this.list.publicOptions
                    .filter((option) => { var _a; return (_a = this.defaultValue) === null || _a === void 0 ? void 0 : _a.includes(option); }), (_a !== null && _a !== void 0 ? _a : [])) : [];
            this.selectOption(this.list.firstPublicOption);
            this.shouldValidate = false;
        };
        this.clear = () => {
            this.value = [];
            this.selectOption(this.list.firstPublicOption);
            this.shouldValidate = false;
        };
        this.selectOption = (option) => {
            this.list.options.forEach((item) => {
                item.isSelected = option ? option.value === item.value : false;
            });
        };
        this.checkOption = (option) => {
            this.list.options.forEach((item) => {
                item.isChecked = option ? option.value === item.value : item.isChecked;
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
            if (this.value.includes(option)) {
                option.isChecked = false;
                this.value = this.value.filter((settedOption) => option !== settedOption);
            }
            else {
                option.isChecked = true;
                this.value.push(option);
            }
            this.selectOption(option);
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
            MultiSelectStore.hotkeyListOpen.setAction(this.open);
            MultiSelectStore.hotkeyListDown.setAction(this.selectNextOption);
            MultiSelectStore.hotkeyListUp.setAction(this.selectPrevOption);
            MultiSelectStore.hotkeyListChangeValue.setAction(this.changeValueFromSelection);
        };
        this.onBlur = () => {
            this.isFocused = false;
            if (!this.modal.isOpen) {
                this.shouldValidate = true;
                Keybinding_store_1.default.resetScope();
                MultiSelectStore.hotkeyListOpen.reset();
                MultiSelectStore.hotkeyListDown.reset();
                MultiSelectStore.hotkeyListUp.reset();
                MultiSelectStore.hotkeyListChangeValue.reset();
            }
        };
        const { options = [], defaultValue, getOptionLabel, getOptionValue } = props, restProps = tslib_1.__rest(props, ["options", "defaultValue", "getOptionLabel", "getOptionValue"]);
        mobx_1.set(this, restProps);
        this.getOptionLabel = getOptionLabel;
        this.getOptionValue = getOptionValue;
        this.list = new List_store_1.default({
            options: options.map((option, index) => new Option_store_1.default({
                theme: this.theme,
                label: getOptionLabel(option),
                value: getOptionValue(option),
                isMultiSelect: true,
                isSelected: index === 0,
                isChecked: !typeGuards_1.isNill(defaultValue)
                    ? defaultValue.some((value) => value === getOptionValue(option))
                    : false,
                props: option,
                onClick: this.changeValue
            }))
        });
        this.value = !typeGuards_1.isNill(defaultValue)
            ? (_a = this.list.publicOptions
                .filter((option) => { var _a; return (_a = defaultValue) === null || _a === void 0 ? void 0 : _a.some((value) => value === getOptionValue(option)); }), (_a !== null && _a !== void 0 ? _a : [])) : [];
        this.defaultValue = this.value;
    }
    get publicValue() {
        return this.value;
    }
    get formValue() {
        return this.publicValue.map((option) => String(option.value));
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
MultiSelectStore.theme = Form_types_1.FormTheme;
MultiSelectStore.hotkeyListOpen = new Keybinding_store_1.default({
    key: "down",
    name: "list.open",
    scope: Keybinding_store_1.default.scope.LIST_FOCUS
});
MultiSelectStore.hotkeyListDown = new Keybinding_store_1.default({
    key: "down",
    name: "list.down",
    scope: Keybinding_store_1.default.scope.LIST_OPEN
});
MultiSelectStore.hotkeyListUp = new Keybinding_store_1.default({
    key: "up",
    name: "list.up",
    scope: Keybinding_store_1.default.scope.LIST_OPEN
});
MultiSelectStore.hotkeyListChangeValue = new Keybinding_store_1.default({
    key: "enter",
    name: "list.change_value",
    scope: Keybinding_store_1.default.scope.LIST_OPEN
});
tslib_1.__decorate([
    mobx_1.observable,
    tslib_1.__metadata("design:type", Array)
], MultiSelectStore.prototype, "value", void 0);
tslib_1.__decorate([
    mobx_1.observable,
    tslib_1.__metadata("design:type", Function)
], MultiSelectStore.prototype, "getOptionValue", void 0);
tslib_1.__decorate([
    mobx_1.observable,
    tslib_1.__metadata("design:type", String)
], MultiSelectStore.prototype, "theme", void 0);
tslib_1.__decorate([
    mobx_1.observable,
    tslib_1.__metadata("design:type", Object)
], MultiSelectStore.prototype, "label", void 0);
tslib_1.__decorate([
    mobx_1.observable,
    tslib_1.__metadata("design:type", Function)
], MultiSelectStore.prototype, "getOptionLabel", void 0);
tslib_1.__decorate([
    mobx_1.observable,
    tslib_1.__metadata("design:type", Object)
], MultiSelectStore.prototype, "placeholder", void 0);
tslib_1.__decorate([
    mobx_1.observable,
    tslib_1.__metadata("design:type", Array)
], MultiSelectStore.prototype, "defaultValue", void 0);
tslib_1.__decorate([
    mobx_1.observable,
    tslib_1.__metadata("design:type", String)
], MultiSelectStore.prototype, "search", void 0);
tslib_1.__decorate([
    mobx_1.observable,
    tslib_1.__metadata("design:type", Boolean)
], MultiSelectStore.prototype, "shouldValidate", void 0);
tslib_1.__decorate([
    mobx_1.observable,
    tslib_1.__metadata("design:type", Boolean)
], MultiSelectStore.prototype, "shouldDisplayed", void 0);
tslib_1.__decorate([
    mobx_1.observable,
    tslib_1.__metadata("design:type", Boolean)
], MultiSelectStore.prototype, "isTouched", void 0);
tslib_1.__decorate([
    mobx_1.observable,
    tslib_1.__metadata("design:type", Boolean)
], MultiSelectStore.prototype, "isFocused", void 0);
tslib_1.__decorate([
    mobx_1.observable,
    tslib_1.__metadata("design:type", Boolean)
], MultiSelectStore.prototype, "isReadOnly", void 0);
tslib_1.__decorate([
    mobx_1.observable,
    tslib_1.__metadata("design:type", Boolean)
], MultiSelectStore.prototype, "isDisabled", void 0);
tslib_1.__decorate([
    mobx_1.observable,
    tslib_1.__metadata("design:type", Array)
], MultiSelectStore.prototype, "validations", void 0);
tslib_1.__decorate([
    mobx_1.observable,
    tslib_1.__metadata("design:type", Modal_store_1.default)
], MultiSelectStore.prototype, "modal", void 0);
tslib_1.__decorate([
    mobx_1.observable,
    tslib_1.__metadata("design:type", Object)
], MultiSelectStore.prototype, "targetRef", void 0);
tslib_1.__decorate([
    mobx_1.observable,
    tslib_1.__metadata("design:type", Object)
], MultiSelectStore.prototype, "searchRef", void 0);
tslib_1.__decorate([
    mobx_1.observable,
    tslib_1.__metadata("design:type", List_store_1.default)
], MultiSelectStore.prototype, "list", void 0);
tslib_1.__decorate([
    mobx_1.observable,
    tslib_1.__metadata("design:type", Function)
], MultiSelectStore.prototype, "onSubmit", void 0);
tslib_1.__decorate([
    mobx_1.computed,
    tslib_1.__metadata("design:type", Array),
    tslib_1.__metadata("design:paramtypes", [])
], MultiSelectStore.prototype, "publicValue", null);
tslib_1.__decorate([
    mobx_1.computed,
    tslib_1.__metadata("design:type", Array),
    tslib_1.__metadata("design:paramtypes", [])
], MultiSelectStore.prototype, "formValue", null);
tslib_1.__decorate([
    mobx_1.computed,
    tslib_1.__metadata("design:type", String),
    tslib_1.__metadata("design:paramtypes", [])
], MultiSelectStore.prototype, "error", null);
tslib_1.__decorate([
    mobx_1.computed,
    tslib_1.__metadata("design:type", Boolean),
    tslib_1.__metadata("design:paramtypes", [])
], MultiSelectStore.prototype, "isError", null);
tslib_1.__decorate([
    mobx_1.computed,
    tslib_1.__metadata("design:type", Boolean),
    tslib_1.__metadata("design:paramtypes", [])
], MultiSelectStore.prototype, "shouldDisplayError", null);
tslib_1.__decorate([
    mobx_1.computed,
    tslib_1.__metadata("design:type", Boolean),
    tslib_1.__metadata("design:paramtypes", [])
], MultiSelectStore.prototype, "shouldBeFocused", null);
tslib_1.__decorate([
    mobx_1.action,
    tslib_1.__metadata("design:type", Object)
], MultiSelectStore.prototype, "open", void 0);
tslib_1.__decorate([
    mobx_1.action,
    tslib_1.__metadata("design:type", Object)
], MultiSelectStore.prototype, "close", void 0);
tslib_1.__decorate([
    mobx_1.action,
    tslib_1.__metadata("design:type", Object)
], MultiSelectStore.prototype, "toggle", void 0);
tslib_1.__decorate([
    mobx_1.action,
    tslib_1.__metadata("design:type", Object)
], MultiSelectStore.prototype, "changeSearch", void 0);
tslib_1.__decorate([
    mobx_1.action,
    tslib_1.__metadata("design:type", Object)
], MultiSelectStore.prototype, "onChangeSearch", void 0);
tslib_1.__decorate([
    mobx_1.action,
    tslib_1.__metadata("design:type", Object)
], MultiSelectStore.prototype, "initValue", void 0);
tslib_1.__decorate([
    mobx_1.action,
    tslib_1.__metadata("design:type", Object)
], MultiSelectStore.prototype, "reset", void 0);
tslib_1.__decorate([
    mobx_1.action,
    tslib_1.__metadata("design:type", Object)
], MultiSelectStore.prototype, "clear", void 0);
tslib_1.__decorate([
    mobx_1.action,
    tslib_1.__metadata("design:type", Object)
], MultiSelectStore.prototype, "selectOption", void 0);
tslib_1.__decorate([
    mobx_1.action,
    tslib_1.__metadata("design:type", Object)
], MultiSelectStore.prototype, "checkOption", void 0);
tslib_1.__decorate([
    mobx_1.action,
    tslib_1.__metadata("design:type", Object)
], MultiSelectStore.prototype, "selectPrevOption", void 0);
tslib_1.__decorate([
    mobx_1.action,
    tslib_1.__metadata("design:type", Object)
], MultiSelectStore.prototype, "selectNextOption", void 0);
tslib_1.__decorate([
    mobx_1.action,
    tslib_1.__metadata("design:type", Object)
], MultiSelectStore.prototype, "selectAndScrollToOption", void 0);
tslib_1.__decorate([
    mobx_1.action,
    tslib_1.__metadata("design:type", Object)
], MultiSelectStore.prototype, "changeValue", void 0);
tslib_1.__decorate([
    mobx_1.action,
    tslib_1.__metadata("design:type", Object)
], MultiSelectStore.prototype, "changeValueFromSelection", void 0);
tslib_1.__decorate([
    mobx_1.action,
    tslib_1.__metadata("design:type", Object)
], MultiSelectStore.prototype, "onFocus", void 0);
tslib_1.__decorate([
    mobx_1.action,
    tslib_1.__metadata("design:type", Object)
], MultiSelectStore.prototype, "onBlur", void 0);
exports.default = MultiSelectStore;
//# sourceMappingURL=MultiSelect.store.js.map