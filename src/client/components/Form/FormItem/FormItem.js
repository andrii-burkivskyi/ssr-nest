"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = require("react");
var mobx_react_1 = require("mobx-react");
var translations_1 = require("../../../utils/i18n/translations");
var bem_1 = require("../../../utils/bem");
var form_item_scss_1 = require("./form_item.scss");
var FormItem = /** @class */ (function (_super) {
    tslib_1.__extends(FormItem, _super);
    function FormItem() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.getClassName = function (className, addedClassName) { return bem_1.default(className, {
            theme: _this.props.model.theme,
            isReadOnly: _this.props.model.isReadOnly,
            isDisabled: _this.props.model.isDisabled,
            isError: _this.props.model.shouldDisplayError,
            isFocused: _this.props.model.shouldBeFocused,
        }, addedClassName); };
        _this.renderLabel = function () { return _this.props.model.label && (react_1.default.createElement("label", { className: _this.getClassName(form_item_scss_1.default.label) }, translations_1.t(_this.props.model.label))); };
        _this.renderError = function () { return (react_1.default.createElement("span", { className: _this.getClassName(form_item_scss_1.default.error) }, _this.props.model.shouldDisplayError && translations_1.t(_this.props.model.error))); };
        return _this;
    }
    FormItem.prototype.render = function () {
        if (!this.props.model.shouldDisplayed) {
            return null;
        }
        return (react_1.default.createElement("div", { className: this.getClassName(form_item_scss_1.default.container) },
            this.renderLabel(),
            react_1.default.createElement("div", { className: this.getClassName(form_item_scss_1.default.item_container) },
                this.props.children,
                this.renderError())));
    };
    ;
    FormItem = tslib_1.__decorate([
        mobx_react_1.observer
    ], FormItem);
    return FormItem;
}(react_1.Component));
exports.default = FormItem;
//# sourceMappingURL=FormItem.js.map