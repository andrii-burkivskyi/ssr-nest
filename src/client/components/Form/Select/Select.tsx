import React, { Component } from "react";
import { observer } from "mobx-react";

// import arrow from "client/assets/icons/arrow.svg";
// import search from "client/assets/icons/search.svg";

import FormItem from "../../../components/Form/FormItem/FormItem";
import Option from "../../../components/Form/Option/Option";
// import Icon from "../../../components/Icon/Icon";
import Overlay from "../../../components/Overlay/Overlay";
import List from "../../../components/List/List";
import ModalStore from "../../../components/Modal/Modal.store";

import bem from "../../../utils/bem";
import { t } from "../../../utils/i18n/translations";

import SelectStore from "./Select.store";
import styles from "./form_select.scss";
import { isNill } from "../../../utils/typeGuards";

@observer
export default class Select extends Component<ViewOf<SelectStore>> {
    getClassName = (className: string) => bem(className, {
        theme: this.props.model.theme,
        isReadOnly: this.props.model.isReadOnly,
        isDisabled: this.props.model.isDisabled,
        isError: this.props.model.shouldDisplayError,
        isFocused: this.props.model.shouldBeFocused,
    });

    focus = () => this.props.model.searchRef.current && this.props.model.searchRef.current.focus();

    render() {
        return (
            <FormItem model={this.props.model}>
                {this.renderField()}
                {this.renderDropDown()}
            </FormItem>
        )
    }

    renderField = () => (
        <button
            ref={this.props.model.targetRef}
            className={this.getClassName(styles.field_container)}
            onClick={this.props.model.toggle}
            onFocus={this.props.model.onFocus}
            onBlur={this.props.model.onBlur}
        >
            {
                Boolean(this.props.model.publicValue?.label) &&
                <div className={this.getClassName(styles.field)}>
                    {t(this.props.model.publicValue?.label)}
                </div>
            }
            {
                isNill(this.props.model.publicValue?.value) &&
                <div className={this.getClassName(styles.placeholder)}>
                    {t(this.props.model.placeholder)}
                </div>
            }
            {/* <Icon className={this.getClassName(styles.arrow)} svg={arrow} /> */}
        </button>
    );

    renderDropDown = () => Boolean(setTimeout(this.focus)) && (
        <Overlay
            target={this.props.model.targetRef}
            className={this.getClassName(styles.drop_down)}
            isOpen={this.props.model.modal.isOpen}
            onOutsideClick={ModalStore.closeModalsByClick}
            resize
        >
            <div ref={this.props.model.modal.containerRef} className={this.getClassName(styles.search_container)}>
                <input
                    ref={this.props.model.searchRef}
                    className={this.getClassName(styles.search)}
                    value={this.props.model.search}
                    onChange={this.props.model.onChangeSearch}
                />
                {/* <Icon className={this.getClassName(styles.search_icon)} svg={search} /> */}
            </div>
            <div className={this.getClassName(styles.options_container)}>
                <List
                    model={this.props.model.list}
                    ItemComponent={Option}
                />
            </div>
        </Overlay>
    )
}
