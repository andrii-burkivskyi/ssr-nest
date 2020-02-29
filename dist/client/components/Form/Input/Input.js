"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const react_1 = require("react");
const mobx_react_1 = require("mobx-react");
const mobx_1 = require("mobx");
const react_imask_1 = require("react-imask");
const FormItem_1 = require("../../Form/FormItem/FormItem");
const bem_1 = require("../../../utils/bem");
const translations_1 = require("../../../utils/i18n/translations");
const Input_store_1 = require("./Input.store");
const form_input_scss_1 = require("./form_input.scss");
let Input = class Input extends react_1.Component {
    constructor() {
        super(...arguments);
        this.getClassName = (className) => bem_1.default(className, {
            theme: this.props.model.theme,
            isReadOnly: this.props.model.isReadOnly,
            isDisabled: this.props.model.isDisabled,
            isError: this.props.model.shouldDisplayError,
            isFocused: this.props.model.shouldBeFocused,
            isNumber: this.props.model.type === Input_store_1.default.type.NUMBER
        });
        this.renderField = () => (react_1.default.createElement("div", { className: this.getClassName(form_input_scss_1.default.field_container) },
            react_1.default.createElement(react_imask_1.IMaskInput, { className: this.getClassName(form_input_scss_1.default.field), value: this.props.model.publicValue, type: this.props.model.publicType, mask: mobx_1.toJS(this.props.model.mask), placeholder: translations_1.t(this.props.model.placeholder), onKeyDown: this.props.model.onKeyDown, onChange: this.props.model.onChange, commit: this.props.model.commit, onAccept: this.props.model.onAccept, onFocus: this.props.model.focus, onBlur: this.props.model.blur, min: this.props.model.min, max: this.props.model.max, scale: this.props.model.scale, signed: this.props.model.signed, readOnly: this.props.model.isReadOnly || this.props.model.isDisabled, thousandsSeparator: this.props.model.thousandsSeparator, radix: this.props.model.radix, tabIndex: this.props.model.tabIndex }),
            this.renderArrows()));
        this.renderArrows = () => this.props.model.type === Input_store_1.default.type.NUMBER && (react_1.default.createElement("div", { className: this.getClassName(form_input_scss_1.default.number_arrows) },
            react_1.default.createElement("button", { "aria-disabled": true, className: this.getClassName(form_input_scss_1.default.number_arrow), onClick: this.props.model.increment, tabIndex: -1 }),
            react_1.default.createElement("button", { "aria-disabled": true, className: this.getClassName(form_input_scss_1.default.number_arrow), onClick: this.props.model.decrement, tabIndex: -1 })));
    }
    render() {
        return (react_1.default.createElement(FormItem_1.default, { model: this.props.model }, this.renderField()));
    }
};
Input = tslib_1.__decorate([
    mobx_react_1.observer
], Input);
exports.default = Input;
//# sourceMappingURL=Input.js.map