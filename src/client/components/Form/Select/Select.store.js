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
var SelectStore = /** @class */ (function () {
    function SelectStore(props) {
        var _this = this;
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
        this.modal = new Modal_store_1.default({ onClose: function () { return _this.close(); } });
        this.targetRef = React.createRef();
        this.searchRef = React.createRef();
        this.list = new List_store_1.default();
        this.open = function () {
            if (!_this.isDisabled && !_this.isReadOnly) {
                _this.modal.open();
                Keybinding_store_1.default.setScope(Keybinding_store_1.default.scope.LIST_OPEN);
                _this.value
                    ? _this.list.scrollTo(_this.value)
                    : _this.selectAndScrollToOption(_this.list.firstPublicOption);
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
            var option = _this.list.options.find(function (option) { return option.value === value; });
            _this.defaultValue = (option !== null && option !== void 0 ? option : null);
            _this.value = _this.defaultValue;
            _this.shouldValidate = false;
        };
        this.reset = function () {
            _this.value = _this.defaultValue;
            _this.selectOption(_this.defaultValue);
            _this.shouldValidate = false;
        };
        this.clear = function () {
            _this.value = null;
            _this.selectOption(_this.value);
            _this.shouldValidate = false;
        };
        this.selectOption = function (option) {
            _this.list.options.forEach(function (item) {
                item.isSelected = option ? option.value === item.value : false;
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
            _this.value = option;
            _this.selectOption(option);
            _this.modal.close();
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
            SelectStore.hotkeyListOpen.setAction(_this.open);
            SelectStore.hotkeyListDown.setAction(_this.selectNextOption);
            SelectStore.hotkeyListUp.setAction(_this.selectPrevOption);
            SelectStore.hotkeyListChangeValue.setAction(_this.changeValueFromSelection);
        };
        this.onBlur = function () {
            _this.isFocused = false;
            if (!_this.modal.isOpen) {
                _this.shouldValidate = true;
                Keybinding_store_1.default.resetScope();
                SelectStore.hotkeyListOpen.reset();
                SelectStore.hotkeyListDown.reset();
                SelectStore.hotkeyListUp.reset();
                SelectStore.hotkeyListChangeValue.reset();
            }
        };
        if (props) {
            var _b = props.options, options = _b === void 0 ? [] : _b, getOptionLabel_1 = props.getOptionLabel, getOptionValue_1 = props.getOptionValue, restProps = tslib_1.__rest(props, ["options", "getOptionLabel", "getOptionValue"]);
            mobx_1.set(this, restProps);
            this.list = new List_store_1.default({
                options: options.map(function (option) { return new Option_store_1.default({
                    theme: _this.theme,
                    label: getOptionLabel_1(option),
                    value: getOptionValue_1(option),
                    isSelected: !typeGuards_1.isNill(props.defaultValue) ? getOptionValue_1(option) === props.defaultValue : false,
                    props: option,
                    onClick: _this.changeValue
                }); })
            });
            this.value = !typeGuards_1.isNill(props.defaultValue)
                ? (_a = this.list.publicOptions.find(function (option) { return option.value === props.defaultValue; }), (_a !== null && _a !== void 0 ? _a : null)) : null;
        }
    }
    Object.defineProperty(SelectStore.prototype, "publicValue", {
        get: function () {
            return this.value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SelectStore.prototype, "formValue", {
        get: function () {
            var _a, _b;
            return String((_b = (_a = this.publicValue) === null || _a === void 0 ? void 0 : _a.value, (_b !== null && _b !== void 0 ? _b : "")));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SelectStore.prototype, "error", {
        get: function () {
            var _a = validation_1.validate(this.value, this.validations), error = _a[0], values = _a[1];
            return translations_1.t(error, values);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SelectStore.prototype, "isError", {
        get: function () {
            return Boolean(this.error);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SelectStore.prototype, "shouldDisplayError", {
        get: function () {
            return this.shouldValidate && this.isError;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SelectStore.prototype, "shouldBeFocused", {
        get: function () {
            return this.isFocused || this.modal.isOpen;
        },
        enumerable: true,
        configurable: true
    });
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
    return SelectStore;
}());
exports.default = SelectStore;
//# sourceMappingURL=Select.store.js.map