"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const react_1 = require("react");
const react_custom_scrollbars_1 = require("react-custom-scrollbars");
const mobx_1 = require("mobx");
const mobx_react_1 = require("mobx-react");
const FormItem_1 = require("../../Form/FormItem/FormItem");
const bem_1 = require("../../../utils/bem");
const form_textarea_scss_1 = require("./form_textarea.scss");
let TextArea = class TextArea extends react_1.Component {
    constructor() {
        super(...arguments);
        this.getClassName = (className) => bem_1.default(className, {
            theme: this.props.model.theme,
            isReadOnly: this.props.model.isReadOnly,
            isDisabled: this.props.model.isDisabled,
            isError: this.props.model.shouldDisplayError,
            isFocused: this.props.model.shouldBeFocused,
        });
    }
    componentDidMount() {
        this.props.model.init();
    }
    render() {
        const { model } = this.props;
        return (react_1.default.createElement(FormItem_1.default, { model: model },
            react_1.default.createElement("div", { ref: model.fieldContainerRef, className: this.getClassName(form_textarea_scss_1.default.field_container) },
                react_1.default.createElement(react_custom_scrollbars_1.default, { style: mobx_1.toJS(model.scrollbarStyle) },
                    react_1.default.createElement("textarea", { ref: model.fieldRef, tabIndex: model.tabIndex, className: this.getClassName(form_textarea_scss_1.default.field), style: mobx_1.toJS(model.fieldStyle), value: model.publicValue, readOnly: model.isReadOnly || model.isDisabled, placeholder: model.placeholder, onChange: model.onChange, onFocus: model.onFocus, onBlur: model.onBlur, onKeyDown: model.onKeyDown })))));
    }
};
TextArea = tslib_1.__decorate([
    mobx_react_1.observer
], TextArea);
exports.default = TextArea;
//# sourceMappingURL=TextArea.js.map