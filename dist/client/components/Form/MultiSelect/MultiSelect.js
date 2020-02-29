"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const react_1 = require("react");
const mobx_react_1 = require("mobx-react");
const FormItem_1 = require("../../../components/Form/FormItem/FormItem");
const Option_1 = require("../../../components/Form/Option/Option");
const Overlay_1 = require("../../../components/Overlay/Overlay");
const List_1 = require("../../../components/List/List");
const Modal_store_1 = require("../../../components/Modal/Modal.store");
const bem_1 = require("../../../utils/bem");
const translations_1 = require("../../../utils/i18n/translations");
const form_multi_select_scss_1 = require("./form_multi_select.scss");
let MultiSelect = class MultiSelect extends react_1.Component {
    constructor() {
        super(...arguments);
        this.getClassName = (className) => bem_1.default(className, {
            theme: this.props.model.theme,
            isReadOnly: this.props.model.isReadOnly,
            isDisabled: this.props.model.isDisabled,
            isError: this.props.model.shouldDisplayError,
            isFocused: this.props.model.shouldBeFocused,
        });
        this.focus = () => this.props.model.searchRef.current && this.props.model.searchRef.current.focus();
        this.renderField = () => {
            var _a, _b;
            return (react_1.default.createElement("button", { ref: this.props.model.targetRef, className: this.getClassName(form_multi_select_scss_1.default.field_container), onClick: this.props.model.toggle, onFocus: this.props.model.onFocus, onBlur: this.props.model.onBlur },
                ((_a = this.props.model.publicValue) === null || _a === void 0 ? void 0 : _a.length) !== 0 &&
                    react_1.default.createElement("div", { className: this.getClassName(form_multi_select_scss_1.default.field) },
                        react_1.default.createElement("span", { className: this.getClassName(form_multi_select_scss_1.default.field_child) }, this.props.model.publicValue.map((option) => translations_1.t(option.label)).join(", "))),
                ((_b = this.props.model.publicValue) === null || _b === void 0 ? void 0 : _b.length) === 0 &&
                    react_1.default.createElement("div", { className: this.getClassName(form_multi_select_scss_1.default.placeholder) }, translations_1.t(this.props.model.placeholder))));
        };
        this.renderDropDown = () => Boolean(setTimeout(this.focus)) && (react_1.default.createElement(Overlay_1.default, { target: this.props.model.targetRef, className: this.getClassName(form_multi_select_scss_1.default.drop_down), isOpen: this.props.model.modal.isOpen, onOutsideClick: Modal_store_1.default.closeModalsByClick, resize: true },
            react_1.default.createElement("div", { ref: this.props.model.modal.containerRef, className: this.getClassName(form_multi_select_scss_1.default.search_container) },
                react_1.default.createElement("input", { ref: this.props.model.searchRef, className: this.getClassName(form_multi_select_scss_1.default.search), value: this.props.model.search, onChange: this.props.model.onChangeSearch })),
            react_1.default.createElement("div", { className: this.getClassName(form_multi_select_scss_1.default.options_container) },
                react_1.default.createElement(List_1.default, { model: this.props.model.list, ItemComponent: Option_1.default }))));
    }
    render() {
        return (react_1.default.createElement(FormItem_1.default, { model: this.props.model },
            this.renderField(),
            this.renderDropDown()));
    }
};
MultiSelect = tslib_1.__decorate([
    mobx_react_1.observer
], MultiSelect);
exports.default = MultiSelect;
//# sourceMappingURL=MultiSelect.js.map