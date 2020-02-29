"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var mobx_1 = require("mobx");
var Form_types_1 = require("../Form.types");
var validation_1 = require("../../../utils/validation");
var translations_1 = require("../../../utils/i18n/translations");
var Modal_store_1 = require("../../../components/Modal/Modal.store");
var Option_store_1 = require("../../../components/Form/Option/Option.store");
var List_store_1 = require("../../../components/List/List.store");
var Keybinding_store_1 = require("../../../core/common/Keybinding.store");
var typeGuards_1 = require("../../../utils/typeGuards");
var MultiSelectStore = /** @class */ (function () {
    function MultiSelectStore(props) {
        var _this = this;
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
        this.modal = new Modal_store_1.default({ onClose: function () { return _this.close(); } });
        this.targetRef = React.createRef();
        this.searchRef = React.createRef();
        this.list = new List_store_1.default();
        this.open = function () {
            if (!_this.isDisabled && !_this.isReadOnly) {
                _this.modal.open();
                Keybinding_store_1.default.setScope(Keybinding_store_1.default.scope.LIST_OPEN);
                _this.selectAndScrollToOption(_this.list.firstPublicOption);
            }
        };
        this.close = function () {
            var _a;
            _this.search = "";
            _this.shouldValidate = true;
            (_a = _this.targetRef.current) === null || _a === void 0 ? void 0 : _a.focus();
        };
        this.toggle = function () {
            _this.modal.isOpen
                ? _this.close()
                : _this.open();
        };
        this.changeSearch = function (search) {
            _this.search = search;
        };
        this.onChangeSearch = function (event) {
            _this.search = event.currentTarget.value;
            _this.list.filter = function (item) { return translations_1.t(item.label).includes(_this.search); };
            _this.selectAndScrollToOption(_this.list.firstPublicOption);
        };
        this.initValue = function (value) {
            var _a;
            _this.value = !typeGuards_1.isNill(value)
                ? (_a = _this.list.options.filter(function (option) { return value.includes(option.value); }), (_a !== null && _a !== void 0 ? _a : [])) : [];
            _this.selectOption(_this.list.firstPublicOption);
            _this.shouldValidate = false;
        };
        this.reset = function () {
            var _a;
            _this.value = !typeGuards_1.isNill(_this.defaultValue)
                ? (_a = _this.list.publicOptions
                    .filter(function (option) { var _a; return (_a = _this.defaultValue) === null || _a === void 0 ? void 0 : _a.includes(option); }), (_a !== null && _a !== void 0 ? _a : [])) : [];
            _this.selectOption(_this.list.firstPublicOption);
            _this.shouldValidate = false;
        };
        this.clear = function () {
            _this.value = [];
            _this.selectOption(_this.list.firstPublicOption);
            _this.shouldValidate = false;
        };
        this.selectOption = function (option) {
            _this.list.options.forEach(function (item) {
                item.isSelected = option ? option.value === item.value : false;
            });
        };
        this.checkOption = function (option) {
            _this.list.options.forEach(function (item) {
                item.isChecked = option ? option.value === item.value : item.isChecked;
            });
        };
        this.selectPrevOption = function () {
            var currentOption = _this.list.options.find(function (option) { return option.isSelected; });
            if (currentOption) {
                var currentOptionIndex = _this.list.publicOptions.indexOf(currentOption);
                var prevOption = _this.list.publicOptions[currentOptionIndex - 1] || _this.list.firstPublicOption;
                _this.selectOption(prevOption);
                _this.list.scrollTo(prevOption);
            }
        };
        this.selectNextOption = function () {
            var currentOption = _this.list.options.find(function (option) { return option.isSelected; });
            if (currentOption) {
                var currentOptionIndex = _this.list.publicOptions.indexOf(currentOption);
                var nextOption = _this.list.publicOptions[currentOptionIndex + 1] || _this.list.lastPublicOption;
                _this.selectOption(nextOption);
                _this.list.scrollTo(nextOption, false);
            }
        };
        this.selectAndScrollToOption = function (option) {
            _this.selectOption(option);
            _this.list.scrollTo(option);
        };
        this.changeValue = function (option) {
            if (_this.value.includes(option)) {
                option.isChecked = false;
                _this.value = _this.value.filter(function (settedOption) { return option !== settedOption; });
            }
            else {
                option.isChecked = true;
                _this.value.push(option);
            }
            _this.selectOption(option);
        };
        this.changeValueFromSelection = function (event) {
            event.preventDefault();
            var option = _this.list.options.find(function (option) { return option.isSelected; });
            if (option) {
                _this.changeValue(option);
            }
        };
        this.onFocus = function () {
            _this.isFocused = true;
            Keybinding_store_1.default.setScope(Keybinding_store_1.default.scope.LIST_FOCUS);
            MultiSelectStore.hotkeyListOpen.setAction(_this.open);
            MultiSelectStore.hotkeyListDown.setAction(_this.selectNextOption);
            MultiSelectStore.hotkeyListUp.setAction(_this.selectPrevOption);
            MultiSelectStore.hotkeyListChangeValue.setAction(_this.changeValueFromSelection);
        };
        this.onBlur = function () {
            _this.isFocused = false;
            if (!_this.modal.isOpen) {
                _this.shouldValidate = true;
                Keybinding_store_1.default.resetScope();
                MultiSelectStore.hotkeyListOpen.reset();
                MultiSelectStore.hotkeyListDown.reset();
                MultiSelectStore.hotkeyListUp.reset();
                MultiSelectStore.hotkeyListChangeValue.reset();
            }
        };
        var _b = props.options, options = _b === void 0 ? [] : _b, defaultValue = props.defaultValue, getOptionLabel = props.getOptionLabel, getOptionValue = props.getOptionValue, restProps = tslib_1.__rest(props, ["options", "defaultValue", "getOptionLabel", "getOptionValue"]);
        mobx_1.set(this, restProps);
        this.getOptionLabel = getOptionLabel;
        this.getOptionValue = getOptionValue;
        this.list = new List_store_1.default({
            options: options.map(function (option, index) { return new Option_store_1.default({
                theme: _this.theme,
                label: getOptionLabel(option),
                value: getOptionValue(option),
                isMultiSelect: true,
                isSelected: index === 0,
                isChecked: !typeGuards_1.isNill(defaultValue)
                    ? defaultValue.some(function (value) { return value === getOptionValue(option); })
                    : false,
                props: option,
                onClick: _this.changeValue
            }); })
        });
        this.value = !typeGuards_1.isNill(defaultValue)
            ? (_a = this.list.publicOptions
                .filter(function (option) { var _a; return (_a = defaultValue) === null || _a === void 0 ? void 0 : _a.some(function (value) { return value === getOptionValue(option); }); }), (_a !== null && _a !== void 0 ? _a : [])) : [];
        this.defaultValue = this.value;
    }
    Object.defineProperty(MultiSelectStore.prototype, "publicValue", {
        get: function () {
            return this.value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MultiSelectStore.prototype, "formValue", {
        get: function () {
            return this.publicValue.map(function (option) { return String(option.value); });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MultiSelectStore.prototype, "error", {
        get: function () {
            var _a = validation_1.validate(this.value, this.validations), error = _a[0], values = _a[1];
            return translations_1.t(error, values);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MultiSelectStore.prototype, "isError", {
        get: function () {
            return Boolean(this.error);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MultiSelectStore.prototype, "shouldDisplayError", {
        get: function () {
            return this.shouldValidate && this.isError;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MultiSelectStore.prototype, "shouldBeFocused", {
        get: function () {
            return this.isFocused || this.modal.isOpen;
        },
        enumerable: true,
        configurable: true
    });
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
    return MultiSelectStore;
}());
exports.default = MultiSelectStore;
//# sourceMappingURL=MultiSelect.store.js.map