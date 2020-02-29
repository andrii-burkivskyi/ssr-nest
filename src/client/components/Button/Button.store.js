"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var mobx_1 = require("mobx");
var Link_1 = require("../Link/Link");
var dom_1 = require("../../utils/dom");
var ButtonTheme;
(function (ButtonTheme) {
    ButtonTheme["DEFAULT"] = "default";
})(ButtonTheme || (ButtonTheme = {}));
var ButtonSize;
(function (ButtonSize) {
    ButtonSize["SMALL"] = "small";
    ButtonSize["NORMAL"] = "normal";
})(ButtonSize || (ButtonSize = {}));
var ButtonColor;
(function (ButtonColor) {
    ButtonColor["WHITE"] = "white";
})(ButtonColor || (ButtonColor = {}));
var ButtonIconPosition;
(function (ButtonIconPosition) {
    ButtonIconPosition["LEFT"] = "left";
    ButtonIconPosition["RIGHT"] = "right";
})(ButtonIconPosition || (ButtonIconPosition = {}));
var ButtonStore = /** @class */ (function () {
    function ButtonStore(props) {
        var _this = this;
        this.theme = ButtonStore.theme.DEFAULT;
        this.size = ButtonStore.size.NORMAL;
        this.color = ButtonStore.color.WHITE;
        this.iconPosition = ButtonStore.iconPosition.LEFT;
        this.isDisplayed = true;
        this.isDisabled = false;
        this.setIsDisplayed = function (isDisplayed) { return _this.isDisplayed = isDisplayed; };
        this.setIsDisabled = function (isDisabled) { return _this.isDisabled = isDisabled; };
        this.onClick = function () {
            _this.buttonOnClick && _this.buttonOnClick();
            dom_1.blurAll();
        };
        var onClick = props.onClick, restProps = tslib_1.__rest(props, ["onClick"]);
        mobx_1.set(this, tslib_1.__assign({}, restProps));
        this.buttonOnClick = onClick;
    }
    Object.defineProperty(ButtonStore.prototype, "component", {
        get: function () {
            return this.href && "a" || this.to && Link_1.default || this.buttonOnClick && "button" || "span";
        },
        enumerable: true,
        configurable: true
    });
    ButtonStore.theme = ButtonTheme;
    ButtonStore.size = ButtonSize;
    ButtonStore.color = ButtonColor;
    ButtonStore.iconPosition = ButtonIconPosition;
    tslib_1.__decorate([
        mobx_1.observable,
        tslib_1.__metadata("design:type", String)
    ], ButtonStore.prototype, "theme", void 0);
    tslib_1.__decorate([
        mobx_1.observable,
        tslib_1.__metadata("design:type", String)
    ], ButtonStore.prototype, "size", void 0);
    tslib_1.__decorate([
        mobx_1.observable,
        tslib_1.__metadata("design:type", String)
    ], ButtonStore.prototype, "color", void 0);
    tslib_1.__decorate([
        mobx_1.observable,
        tslib_1.__metadata("design:type", String)
    ], ButtonStore.prototype, "iconPosition", void 0);
    tslib_1.__decorate([
        mobx_1.observable,
        tslib_1.__metadata("design:type", Number)
    ], ButtonStore.prototype, "iconWidth", void 0);
    tslib_1.__decorate([
        mobx_1.observable,
        tslib_1.__metadata("design:type", Object)
    ], ButtonStore.prototype, "text", void 0);
    tslib_1.__decorate([
        mobx_1.observable,
        tslib_1.__metadata("design:type", Number)
    ], ButtonStore.prototype, "counter", void 0);
    tslib_1.__decorate([
        mobx_1.observable,
        tslib_1.__metadata("design:type", String)
    ], ButtonStore.prototype, "icon", void 0);
    tslib_1.__decorate([
        mobx_1.observable,
        tslib_1.__metadata("design:type", String)
    ], ButtonStore.prototype, "target", void 0);
    tslib_1.__decorate([
        mobx_1.observable,
        tslib_1.__metadata("design:type", String)
    ], ButtonStore.prototype, "to", void 0);
    tslib_1.__decorate([
        mobx_1.observable,
        tslib_1.__metadata("design:type", String)
    ], ButtonStore.prototype, "href", void 0);
    tslib_1.__decorate([
        mobx_1.observable,
        tslib_1.__metadata("design:type", Function)
    ], ButtonStore.prototype, "buttonOnClick", void 0);
    tslib_1.__decorate([
        mobx_1.observable,
        tslib_1.__metadata("design:type", Boolean)
    ], ButtonStore.prototype, "isDisplayed", void 0);
    tslib_1.__decorate([
        mobx_1.observable,
        tslib_1.__metadata("design:type", Boolean)
    ], ButtonStore.prototype, "isDisabled", void 0);
    tslib_1.__decorate([
        mobx_1.computed,
        tslib_1.__metadata("design:type", Object),
        tslib_1.__metadata("design:paramtypes", [])
    ], ButtonStore.prototype, "component", null);
    tslib_1.__decorate([
        mobx_1.action,
        tslib_1.__metadata("design:type", Object)
    ], ButtonStore.prototype, "setIsDisplayed", void 0);
    tslib_1.__decorate([
        mobx_1.action,
        tslib_1.__metadata("design:type", Object)
    ], ButtonStore.prototype, "setIsDisabled", void 0);
    tslib_1.__decorate([
        mobx_1.action,
        tslib_1.__metadata("design:type", Object)
    ], ButtonStore.prototype, "onClick", void 0);
    return ButtonStore;
}());
exports.default = ButtonStore;
//# sourceMappingURL=Button.store.js.map