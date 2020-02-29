"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = require("react");
var mobx_react_1 = require("mobx-react");
// import Icon from "../Icon/Icon";
var bem_1 = require("../../utils/bem");
var translations_1 = require("../../utils/i18n/translations");
var button_scss_1 = require("./button.scss");
var Button = /** @class */ (function (_super) {
    tslib_1.__extends(Button, _super);
    function Button() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.getClassName = function (coreClassName, addedClassName) {
            if (addedClassName === void 0) { addedClassName = ""; }
            return bem_1.default(coreClassName, {
                theme: _this.props.model.theme,
                color: _this.props.model.color,
                size: _this.props.model.size,
                isDisabled: _this.props.model.isDisabled,
                iconPosition: _this.props.model.icon && _this.props.model.iconPosition,
                hasNoAction: !Boolean(_this.props.model.buttonOnClick) &&
                    !Boolean(_this.props.model.href) &&
                    !Boolean(_this.props.model.to)
            }, addedClassName);
        };
        _this.renderButtonProps = function () { return ({
            className: _this.getClassName(button_scss_1.default.button),
            to: _this.props.model.to,
            href: _this.props.model.href,
            onClick: _this.props.model.onClick,
            target: _this.props.model.target
        }); };
        _this.renderText = function () { return _this.props.model.text && (react_1.default.createElement("div", { "aria-disabled": true, className: _this.getClassName(button_scss_1.default.text_container) },
            react_1.default.createElement("span", { "aria-disabled": true, className: _this.getClassName(button_scss_1.default.text) }, translations_1.t(_this.props.model.text)),
            _this.props.model.counter !== undefined && _this.props.model.counter > 1 &&
                react_1.default.createElement("span", { "aria-disabled": true, className: _this.getClassName(button_scss_1.default.counter) }, _this.props.model.counter))); };
        _this.renderIcon = function () { return _this.props.model.icon && (null
        // <Icon
        //     className={this.getClassName(styles.icon)}
        //     style={{ width: this.props.model.iconWidth }}
        //     svg={this.props.model.icon}
        // />
        ); };
        return _this;
    }
    Button.prototype.render = function () {
        var model = this.props.model;
        if (!model.isDisplayed) {
            return null;
        }
        return (react_1.default.createElement("div", { className: this.getClassName(button_scss_1.default.button_container), style: this.props.style }, react_1.default.createElement(model.component, this.renderButtonProps(), this.renderText(), this.renderIcon())));
    };
    Button = tslib_1.__decorate([
        mobx_react_1.observer
    ], Button);
    return Button;
}(react_1.Component));
exports.default = Button;
//# sourceMappingURL=Button.js.map