import React, { Component } from 'react';
import { observer } from 'mobx-react';

// import arrow from "client/assets/icons/arrow.svg";
// import search from "client/assets/icons/search.svg";

import FormItem from '../../../components/Form/FormItem/FormItem';
import Option from '../../../components/Form/Option/Option';
// import Icon from "../../../components/Icon/Icon";
import Overlay from '../../../components/Overlay/Overlay';
import List from '../../../components/List/List';
import ModalStore from '../../../components/Modal/Modal.store';

import bem from '../../../utils/bem';
import { t } from '../../../utils/i18n/translations';

import MultiSelectStore from './MultiSelect.store';
import styles from './form_multi_select.scss';

@observer
export default class MultiSelect<T> extends Component<ViewOf<MultiSelectStore<T>>> {
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
      );
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
                this.props.model.publicValue?.length !== 0 &&
                <div className={this.getClassName(styles.field)}>
                  <span className={this.getClassName(styles.field_child)}>
                    {this.props.model.publicValue.map((option) => t(option.label)).join(', ')}
                  </span>
                </div>
        }
        {
                this.props.model.publicValue?.length === 0 &&
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
          <List model={this.props.model.list} ItemComponent={Option} />
        </div>
      </Overlay>
    )
}
