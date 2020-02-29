"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = require("react");
var react_custom_scrollbars_1 = require("react-custom-scrollbars");
var mobx_1 = require("mobx");
var mobx_react_1 = require("mobx-react");
var FormItem_1 = require("../../Form/FormItem/FormItem");
var bem_1 = require("../../../utils/bem");
var form_textarea_scss_1 = require("./form_textarea.scss");
var TextArea = /** @class */ (function (_super) {
    tslib_1.__extends(TextArea, _super);
    function TextArea() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.getClassName = function (className) {
            return bem_1.default(className, {
                theme: _this.props.model.theme,
                isReadOnly: _this.props.model.isReadOnly,
                isDisabled: _this.props.model.isDisabled,
                isError: _this.props.model.shouldDisplayError,
                isFocused: _this.props.model.shouldBeFocused,
            });
        };
        return _this;
    }
    TextArea.prototype.componentDidMount = function () {
        this.props.model.init();
    };
    TextArea.prototype.render = function () {
        var model = this.props.model;
        return (react_1.default.createElement(FormItem_1.default, { model: model },
            react_1.default.createElement("div", { ref: model.fieldContainerRef, className: this.getClassName(form_textarea_scss_1.default.field_container) },
                react_1.default.createElement(react_custom_scrollbars_1.default, { style: mobx_1.toJS(model.scrollbarStyle) },
                    react_1.default.createElement("textarea", { ref: model.fieldRef, tabIndex: model.tabIndex, className: this.getClassName(form_textarea_scss_1.default.field), style: mobx_1.toJS(model.fieldStyle), value: model.publicValue, readOnly: model.isReadOnly || model.isDisabled, placeholder: model.placeholder, onChange: model.onChange, onFocus: model.onFocus, onBlur: model.onBlur, onKeyDown: model.onKeyDown })))));
    };
    TextArea = tslib_1.__decorate([
        mobx_react_1.observer
    ], TextArea);
    return TextArea;
}(react_1.Component));
exports.default = TextArea;
//# sourceMappingURL=TextArea.js.map