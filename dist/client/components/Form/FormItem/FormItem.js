"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const react_1 = require("react");
const mobx_react_1 = require("mobx-react");
const translations_1 = require("../../../utils/i18n/translations");
const bem_1 = require("../../../utils/bem");
const form_item_scss_1 = require("./form_item.scss");
let FormItem = class FormItem extends react_1.Component {
    constructor() {
        super(...arguments);
        this.getClassName = (className, addedClassName) => bem_1.default(className, {
            theme: this.props.model.theme,
            isReadOnly: this.props.model.isReadOnly,
            isDisabled: this.props.model.isDisabled,
            isError: this.props.model.shouldDisplayError,
            isFocused: this.props.model.shouldBeFocused,
        }, addedClassName);
        this.renderLabel = () => this.props.model.label && (react_1.default.createElement("label", { className: this.getClassName(form_item_scss_1.default.label) }, translations_1.t(this.props.model.label)));
        this.renderError = () => (react_1.default.createElement("span", { className: this.getClassName(form_item_scss_1.default.error) }, this.props.model.shouldDisplayError && translations_1.t(this.props.model.error)));
    }
    render() {
        if (!this.props.model.shouldDisplayed) {
            return null;
        }
        return (react_1.default.createElement("div", { className: this.getClassName(form_item_scss_1.default.container) },
            this.renderLabel(),
            react_1.default.createElement("div", { className: this.getClassName(form_item_scss_1.default.item_container) },
                this.props.children,
                this.renderError())));
    }
    ;
};
FormItem = tslib_1.__decorate([
    mobx_react_1.observer
], FormItem);
exports.default = FormItem;
//# sourceMappingURL=FormItem.js.map