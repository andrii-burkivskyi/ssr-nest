"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const react_1 = require("react");
const mobx_react_1 = require("mobx-react");
const translations_1 = require("../../../utils/i18n/translations");
const bem_1 = require("../../../utils/bem");
const form_option_scss_1 = require("./form_option.scss");
let Option = class Option extends react_1.Component {
    constructor() {
        super(...arguments);
        this.getClassName = (className) => bem_1.default(className, {
            theme: this.props.model.theme,
            isSelected: this.props.model.isSelected,
            isChecked: this.props.model.isChecked
        });
    }
    render() {
        const { model } = this.props;
        return (react_1.default.createElement("button", { className: this.getClassName(form_option_scss_1.default.container), onClick: model.select, style: this.props.style },
            react_1.default.createElement("span", { className: this.getClassName(form_option_scss_1.default.label) }, translations_1.t(model.label))));
    }
};
Option = tslib_1.__decorate([
    mobx_react_1.observer
], Option);
exports.default = Option;
//# sourceMappingURL=Option.js.map