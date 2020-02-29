"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var mobx_1 = require("mobx");
var validation_1 = require("../../../utils/validation");
var translations_1 = require("../../../utils/i18n/translations");
var keyboard_1 = require("../../../utils/keyboard");
var Form_types_1 = require("../../../components/Form/Form.types");
var watch_1 = require("../../../utils/watch");
var TextAreaStore = /** @class */ (function () {
    function TextAreaStore(props) {
        var _this = this;
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
        this.init = function () {
            watch_1.default(function () {
                return Boolean(_this.fieldContainerRef.current) && Boolean(_this.fieldRef.current);
            }, function () {
                var _a, _b;
                _this.fieldContainerHeight = (_a = _this.fieldContainerRef.current) === null || _a === void 0 ? void 0 : _a.offsetHeight;
                _this.fieldHeight = (_b = _this.fieldRef.current) === null || _b === void 0 ? void 0 : _b.scrollHeight;
            });
        };
        this.update = function (props) {
            var value = props.value, restProps = tslib_1.__rest(props, ["value"]);
            _this.value = value || _this.value;
            mobx_1.set(_this, restProps);
        };
        this.initValue = function (value) {
            _this.defaultValue = value;
            _this.value = _this.defaultValue;
            _this.shouldValidate = false;
        };
        this.reset = function () {
            _this.value = _this.defaultValue;
            _this.shouldValidate = false;
        };
        this.clear = function () {
            _this.value = null;
            _this.shouldValidate = false;
        };
        this.change = function (value) { return (_this.value = value); };
        this.onChange = function (event) {
            _this.fieldHeight = event.currentTarget.scrollHeight;
            _this.value = event.currentTarget.value;
        };
        this.onFocus = function () { return (_this.isFocused = true); };
        this.onBlur = function () {
            _this.isFocused = false;
            _this.shouldValidate = true;
        };
        this.onKeyDown = function (event) {
            if (_this.onSubmit && event.keyCode === keyboard_1.KeyCode.ENTER && event.shiftKey) {
                event.preventDefault();
                event.stopPropagation();
                _this.onSubmit();
            }
        };
        if (props) {
            this.value = props.defaultValue || this.defaultValue;
            mobx_1.set(this, props);
        }
    }
    Object.defineProperty(TextAreaStore.prototype, "publicValue", {
        get: function () {
            var _a;
            return _a = this.value, (_a !== null && _a !== void 0 ? _a : "");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TextAreaStore.prototype, "formValue", {
        get: function () {
            return this.publicValue;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TextAreaStore.prototype, "tabIndex", {
        get: function () {
            return this.isDisabled || this.isReadOnly
                ? Form_types_1.TabIndex.Disabled
                : Form_types_1.TabIndex.Regular;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TextAreaStore.prototype, "error", {
        get: function () {
            var _a = validation_1.validate(this.value, this.validations), error = _a[0], values = _a[1];
            return translations_1.t(error, values);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TextAreaStore.prototype, "isTouched", {
        get: function () {
            return this.value !== this.defaultValue;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TextAreaStore.prototype, "isError", {
        get: function () {
            return Boolean(this.error);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TextAreaStore.prototype, "shouldDisplayError", {
        get: function () {
            return this.shouldValidate && this.isError;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TextAreaStore.prototype, "shouldBeFocused", {
        get: function () {
            return this.isFocused;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TextAreaStore.prototype, "scrollbarStyle", {
        get: function () {
            return { height: this.fieldContainerHeight };
        },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(TextAreaStore.prototype, "fieldStyle", {
        get: function () {
            return { height: this.fieldHeight };
        },
        enumerable: true,
        configurable: true
    });
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
    return TextAreaStore;
}());
exports.default = TextAreaStore;
//# sourceMappingURL=TextArea.store.js.map