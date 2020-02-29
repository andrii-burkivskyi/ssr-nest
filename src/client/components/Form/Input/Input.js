"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = require("react");
var mobx_react_1 = require("mobx-react");
var mobx_1 = require("mobx");
var react_imask_1 = require("react-imask");
// import Icon from "../../Icon/Icon";
var FormItem_1 = require("../../Form/FormItem/FormItem");
var bem_1 = require("../../../utils/bem");
var translations_1 = require("../../../utils/i18n/translations");
var Input_store_1 = require("./Input.store");
var form_input_scss_1 = require("./form_input.scss");
var Input = /** @class */ (function (_super) {
    tslib_1.__extends(Input, _super);
    function Input() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.getClassName = function (className) { return bem_1.default(className, {
            theme: _this.props.model.theme,
            isReadOnly: _this.props.model.isReadOnly,
            isDisabled: _this.props.model.isDisabled,
            isError: _this.props.model.shouldDisplayError,
            isFocused: _this.props.model.shouldBeFocused,
            isNumber: _this.props.model.type === Input_store_1.default.type.NUMBER
        }); };
        _this.renderField = function () { return (react_1.default.createElement("div", { className: _this.getClassName(form_input_scss_1.default.field_container) },
            react_1.default.createElement(react_imask_1.IMaskInput, { className: _this.getClassName(form_input_scss_1.default.field), value: _this.props.model.publicValue, type: _this.props.model.publicType, mask: mobx_1.toJS(_this.props.model.mask), placeholder: translations_1.t(_this.props.model.placeholder), onKeyDown: _this.props.model.onKeyDown, onChange: _this.props.model.onChange, commit: _this.props.model.commit, onAccept: _this.props.model.onAccept, onFocus: _this.props.model.focus, onBlur: _this.props.model.blur, min: _this.props.model.min, max: _this.props.model.max, scale: _this.props.model.scale, signed: _this.props.model.signed, readOnly: _this.props.model.isReadOnly || _this.props.model.isDisabled, thousandsSeparator: _this.props.model.thousandsSeparator, radix: _this.props.model.radix, tabIndex: _this.props.model.tabIndex }),
            _this.renderArrows())); };
        _this.renderArrows = function () { return _this.props.model.type === Input_store_1.default.type.NUMBER && (react_1.default.createElement("div", { className: _this.getClassName(form_input_scss_1.default.number_arrows) },
            react_1.default.createElement("button", { "aria-disabled": true, className: _this.getClassName(form_input_scss_1.default.number_arrow), onClick: _this.props.model.increment, tabIndex: -1 }),
            react_1.default.createElement("button", { "aria-disabled": true, className: _this.getClassName(form_input_scss_1.default.number_arrow), onClick: _this.props.model.decrement, tabIndex: -1 }))); };
        return _this;
    }
    Input.prototype.render = function () {
        return (react_1.default.createElement(FormItem_1.default, { model: this.props.model }, this.renderField()));
    };
    Input = tslib_1.__decorate([
        mobx_react_1.observer
    ], Input);
    return Input;
}(react_1.Component));
exports.default = Input;
//# sourceMappingURL=Input.js.map