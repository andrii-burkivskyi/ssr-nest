"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const react_1 = require("react");
const mobx_react_1 = require("mobx-react");
const bem_1 = require("../../utils/bem");
const translations_1 = require("../../utils/i18n/translations");
const button_scss_1 = require("./button.scss");
let Button = class Button extends react_1.Component {
    constructor() {
        super(...arguments);
        this.getClassName = (coreClassName, addedClassName = "") => bem_1.default(coreClassName, {
            theme: this.props.model.theme,
            color: this.props.model.color,
            size: this.props.model.size,
            isDisabled: this.props.model.isDisabled,
            iconPosition: this.props.model.icon && this.props.model.iconPosition,
            hasNoAction: !Boolean(this.props.model.buttonOnClick) &&
                !Boolean(this.props.model.href) &&
                !Boolean(this.props.model.to)
        }, addedClassName);
        this.renderButtonProps = () => ({
            className: this.getClassName(button_scss_1.default.button),
            to: this.props.model.to,
            href: this.props.model.href,
            onClick: this.props.model.onClick,
            target: this.props.model.target
        });
        this.renderText = () => this.props.model.text && (react_1.default.createElement("div", { "aria-disabled": true, className: this.getClassName(button_scss_1.default.text_container) },
            react_1.default.createElement("span", { "aria-disabled": true, className: this.getClassName(button_scss_1.default.text) }, translations_1.t(this.props.model.text)),
            this.props.model.counter !== undefined && this.props.model.counter > 1 &&
                react_1.default.createElement("span", { "aria-disabled": true, className: this.getClassName(button_scss_1.default.counter) }, this.props.model.counter)));
        this.renderIcon = () => this.props.model.icon && (null);
    }
    render() {
        const { model } = this.props;
        if (!model.isDisplayed) {
            return null;
        }
        return (react_1.default.createElement("div", { className: this.getClassName(button_scss_1.default.button_container), style: this.props.style }, react_1.default.createElement(model.component, this.renderButtonProps(), this.renderText(), this.renderIcon())));
    }
};
Button = tslib_1.__decorate([
    mobx_react_1.observer
], Button);
exports.default = Button;
//# sourceMappingURL=Button.js.map