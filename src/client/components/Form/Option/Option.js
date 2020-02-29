"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = require("react");
var mobx_react_1 = require("mobx-react");
// import Icon from "client/components/Icon/Icon";
var translations_1 = require("../../../utils/i18n/translations");
var bem_1 = require("../../../utils/bem");
var form_option_scss_1 = require("./form_option.scss");
var Option = /** @class */ (function (_super) {
    tslib_1.__extends(Option, _super);
    function Option() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.getClassName = function (className) { return bem_1.default(className, {
            theme: _this.props.model.theme,
            isSelected: _this.props.model.isSelected,
            isChecked: _this.props.model.isChecked
        }); };
        return _this;
    }
    Option.prototype.render = function () {
        var model = this.props.model;
        return (react_1.default.createElement("button", { className: this.getClassName(form_option_scss_1.default.container), onClick: model.select, style: this.props.style },
            react_1.default.createElement("span", { className: this.getClassName(form_option_scss_1.default.label) }, translations_1.t(model.label))));
    };
    Option = tslib_1.__decorate([
        mobx_react_1.observer
    ], Option);
    return Option;
}(react_1.Component));
exports.default = Option;
//# sourceMappingURL=Option.js.map