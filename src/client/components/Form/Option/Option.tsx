
import React, { Component } from 'react';
import { observer } from 'mobx-react';

// import Icon from "client/components/Icon/Icon";

import { t } from '../../../utils/i18n/translations';
import bem from '../../../utils/bem';

// import checkbox from "client/assets/icons/checkbox.svg";

import OptionStore from './Option.store';

import styles from './form_option.scss';

@observer
export default class Option extends Component<ViewOf<OptionStore>> {
    getClassName = (className: string) => bem(className, {
      theme: this.props.model.theme,
      isSelected: this.props.model.isSelected,
      isChecked: this.props.model.isChecked,
    });

    render() {
      const { model } = this.props;
      return (
        <button
          className={this.getClassName(styles.container)}
          onClick={model.select}
          style={this.props.style}
        >
          {/* {
                    model.isMultiSelect &&
                    <Icon className={this.getClassName(styles.checkbox)} svg={checkbox} />
                } */}
          <span className={this.getClassName(styles.label)}>
            {t(model.label)}
          </span>
        </button>
      );
    }
}
