"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var mobx_1 = require("mobx");
var validation_1 = require("../../../utils/validation");
var translations_1 = require("../../../utils/i18n/translations");
var keyboard_1 = require("../../../utils/keyboard");
var Form_types_1 = require("../../../components/Form/Form.types");
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
var InputStore = /** @class */ (function () {
    function InputStore(props) {
        var _this = this;
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
        this.update = function (props) {
            var value = props.value, defaultValue = props.defaultValue, restProps = tslib_1.__rest(props, ["value", "defaultValue"]);
            _this.value = value || defaultValue || _this.value;
            _this.publicValue = value || defaultValue || _this.value;
            _this.defaultValue = defaultValue || _this.defaultValue;
            mobx_1.set(_this, restProps);
        };
        this.initValue = function (value) {
            _this.defaultValue = value;
            _this.value = _this.defaultValue;
            _this.publicValue = _this.defaultValue;
            _this.shouldValidate = false;
        };
        this.reset = function () {
            _this.value = _this.defaultValue;
            _this.publicValue = _this.defaultValue;
            _this.shouldValidate = false;
        };
        this.clear = function () {
            _this.value = "";
            _this.publicValue = "";
            _this.shouldValidate = false;
        };
        this.change = function (value) {
            _this.value = value;
            _this.publicValue = value;
        };
        /**
         * Technical method for react-imask
         */
        this.commit = function (value, mask) {
            if (_this.mask) {
                _this.value = mask.unmaskedValue;
                _this.publicValue = value;
            }
        };
        /**
         * Method increment value of input with type number
         *
         * @remarks
         * This method do nothing if `InputStore.type` differs from `NUMBER`
         */
        this.increment = function () {
            if (_this.type === InputStore.type.NUMBER) {
                _this.publicValue = String(Number(_this.value) + 1);
            }
        };
        /**
         * Method decrement value of input with type number
         *
         * @remarks
         * This method do nothing if `InputStore.type` differs from `NUMBER`
         */
        this.decrement = function () {
            if (_this.type === InputStore.type.NUMBER) {
                _this.publicValue = String(Number(_this.value) - 1);
            }
        };
        /**
         * Technical method for controlled input
         *
         * @remarks
         * This method do nothing if `InputStore.mask` is set
         */
        this.onChange = function (event) {
            if (!_this.mask) {
                _this.value = event.currentTarget.value;
                _this.publicValue = event.currentTarget.value;
            }
        };
        /**
         * Technical method for controlled input
         *
         * @remarks
         * This method do nothing if `InputStore.mask` is not set
         */
        this.onAccept = function (value, mask) {
            if (_this.mask) {
                _this.value = mask.unmaskedValue;
                _this.publicValue = value;
            }
        };
        this.focus = function () {
            _this.isFocused = true;
        };
        this.blur = function () {
            _this.isFocused = false;
            _this.shouldValidate = true;
        };
        /**
         * Technical method for implementing submit on `enter` mechanic
         */
        this.onKeyDown = function (event) {
            if (_this.onSubmit && event.keyCode === keyboard_1.KeyCode.ENTER) {
                event.preventDefault();
                event.stopPropagation();
                _this.onSubmit();
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
    Object.defineProperty(InputStore.prototype, "formValue", {
        get: function () {
            return this.value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InputStore.prototype, "tabIndex", {
        get: function () {
            return this.isDisabled || this.isReadOnly ? Form_types_1.TabIndex.Disabled : Form_types_1.TabIndex.Regular;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InputStore.prototype, "publicType", {
        get: function () {
            return this.type === InputStore.type.NUMBER
                ? InputStore.type.TEXT
                : this.type;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InputStore.prototype, "error", {
        get: function () {
            var _a = validation_1.validate(this.value, this.validations), error = _a[0], values = _a[1];
            return translations_1.t(error, values);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InputStore.prototype, "isTouched", {
        get: function () {
            return this.value !== this.defaultValue;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InputStore.prototype, "isError", {
        get: function () {
            return Boolean(this.error);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InputStore.prototype, "shouldDisplayError", {
        get: function () {
            return this.shouldValidate && Boolean(this.error);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InputStore.prototype, "shouldBeFocused", {
        get: function () {
            return this.isFocused;
        },
        enumerable: true,
        configurable: true
    });
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
    return InputStore;
}());
exports.default = InputStore;
//# sourceMappingURL=Input.store.js.map