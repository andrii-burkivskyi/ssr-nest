"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = require("react");
var mobx_react_1 = require("mobx-react");
// import arrow from "client/assets/icons/arrow.svg";
// import search from "client/assets/icons/search.svg";
var FormItem_1 = require("../../../components/Form/FormItem/FormItem");
var Option_1 = require("../../../components/Form/Option/Option");
// import Icon from "../../../components/Icon/Icon";
var Overlay_1 = require("../../../components/Overlay/Overlay");
var List_1 = require("../../../components/List/List");
var Modal_store_1 = require("../../../components/Modal/Modal.store");
var bem_1 = require("../../../utils/bem");
var translations_1 = require("../../../utils/i18n/translations");
var form_select_scss_1 = require("./form_select.scss");
var typeGuards_1 = require("../../../utils/typeGuards");
var Select = /** @class */ (function (_super) {
    tslib_1.__extends(Select, _super);
    function Select() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.getClassName = function (className) { return bem_1.default(className, {
            theme: _this.props.model.theme,
            isReadOnly: _this.props.model.isReadOnly,
            isDisabled: _this.props.model.isDisabled,
            isError: _this.props.model.shouldDisplayError,
            isFocused: _this.props.model.shouldBeFocused,
        }); };
        _this.focus = function () { return _this.props.model.searchRef.current && _this.props.model.searchRef.current.focus(); };
        _this.renderField = function () {
            var _a, _b, _c;
            return (react_1.default.createElement("button", { ref: _this.props.model.targetRef, className: _this.getClassName(form_select_scss_1.default.field_container), onClick: _this.props.model.toggle, onFocus: _this.props.model.onFocus, onBlur: _this.props.model.onBlur },
                Boolean((_a = _this.props.model.publicValue) === null || _a === void 0 ? void 0 : _a.label) &&
                    react_1.default.createElement("div", { className: _this.getClassName(form_select_scss_1.default.field) }, translations_1.t((_b = _this.props.model.publicValue) === null || _b === void 0 ? void 0 : _b.label)),
                typeGuards_1.isNill((_c = _this.props.model.publicValue) === null || _c === void 0 ? void 0 : _c.value) &&
                    react_1.default.createElement("div", { className: _this.getClassName(form_select_scss_1.default.placeholder) }, translations_1.t(_this.props.model.placeholder))));
        };
        _this.renderDropDown = function () { return Boolean(setTimeout(_this.focus)) && (react_1.default.createElement(Overlay_1.default, { target: _this.props.model.targetRef, className: _this.getClassName(form_select_scss_1.default.drop_down), isOpen: _this.props.model.modal.isOpen, onOutsideClick: Modal_store_1.default.closeModalsByClick, resize: true },
            react_1.default.createElement("div", { ref: _this.props.model.modal.containerRef, className: _this.getClassName(form_select_scss_1.default.search_container) },
                react_1.default.createElement("input", { ref: _this.props.model.searchRef, className: _this.getClassName(form_select_scss_1.default.search), value: _this.props.model.search, onChange: _this.props.model.onChangeSearch })),
            react_1.default.createElement("div", { className: _this.getClassName(form_select_scss_1.default.options_container) },
                react_1.default.createElement(List_1.default, { model: _this.props.model.list, ItemComponent: Option_1.default })))); };
        return _this;
    }
    Select.prototype.render = function () {
        return (react_1.default.createElement(FormItem_1.default, { model: this.props.model },
            this.renderField(),
            this.renderDropDown()));
    };
    Select = tslib_1.__decorate([
        mobx_react_1.observer
    ], Select);
    return Select;
}(react_1.Component));
exports.default = Select;
//# sourceMappingURL=Select.js.map