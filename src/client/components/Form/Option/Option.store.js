"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var mobx_1 = require("mobx");
var Form_types_1 = require("../../../components/Form/Form.types");
var OptionStore = /** @class */ (function () {
    function OptionStore(props) {
        var _this = this;
        this.theme = OptionStore.theme.DEFAULT;
        this.isSelected = false;
        this.isChecked = false;
        this.isMultiSelect = false;
        this.onClick = function (option) { };
        this.select = function () {
            _this.onClick(_this);
        };
        var label = props.label, value = props.value, restProps = tslib_1.__rest(props, ["label", "value"]);
        this.onClick = props.onClick || this.onClick;
        this.value = value;
        this.label = label;
        mobx_1.set(this, restProps);
    }
    OptionStore.theme = Form_types_1.FormTheme;
    tslib_1.__decorate([
        mobx_1.observable,
        tslib_1.__metadata("design:type", String)
    ], OptionStore.prototype, "theme", void 0);
    tslib_1.__decorate([
        mobx_1.observable,
        tslib_1.__metadata("design:type", Object)
    ], OptionStore.prototype, "label", void 0);
    tslib_1.__decorate([
        mobx_1.observable,
        tslib_1.__metadata("design:type", Object)
    ], OptionStore.prototype, "value", void 0);
    tslib_1.__decorate([
        mobx_1.observable,
        tslib_1.__metadata("design:type", Object)
    ], OptionStore.prototype, "props", void 0);
    tslib_1.__decorate([
        mobx_1.observable,
        tslib_1.__metadata("design:type", Boolean)
    ], OptionStore.prototype, "isSelected", void 0);
    tslib_1.__decorate([
        mobx_1.observable,
        tslib_1.__metadata("design:type", Boolean)
    ], OptionStore.prototype, "isChecked", void 0);
    tslib_1.__decorate([
        mobx_1.observable,
        tslib_1.__metadata("design:type", Boolean)
    ], OptionStore.prototype, "isMultiSelect", void 0);
    tslib_1.__decorate([
        mobx_1.action,
        tslib_1.__metadata("design:type", Function)
    ], OptionStore.prototype, "onClick", void 0);
    tslib_1.__decorate([
        mobx_1.action,
        tslib_1.__metadata("design:type", Object)
    ], OptionStore.prototype, "select", void 0);
    return OptionStore;
}());
exports.default = OptionStore;
//# sourceMappingURL=Option.store.js.map