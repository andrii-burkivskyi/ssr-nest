
import React, {Component} from "react";
import { observer } from "mobx-react";

import { FormItemModel } from "../../Form/Form.types";
import { t } from "../../../utils/i18n/translations";

import bem from "../../../utils/bem";

import styles from "./form_item.scss";

@observer
export default class FormItem extends Component<ViewOf<FormItemModel>> {
    getClassName = (className: string, addedClassName?: string) => bem(className, {
        theme: this.props.model.theme,
        isReadOnly: this.props.model.isReadOnly,
        isDisabled: this.props.model.isDisabled,
        isError: this.props.model.shouldDisplayError,
        isFocused: this.props.model.shouldBeFocused,
    }, addedClassName);

    render() {
        if (!this.props.model.shouldDisplayed) { return null; }

        return (
            <div className={this.getClassName(styles.container)}>
                {this.renderLabel()}
                <div className={this.getClassName(styles.item_container)}>
                    {this.props.children}
                    {this.renderError()}
                </div>
            </div>
        );

    };

    renderLabel = () => this.props.model.label && (
        <label className={this.getClassName(styles.label)}>
            {t(this.props.model.label)}
        </label>
    );


    renderError = () =>  (
        <span className={this.getClassName(styles.error)}>
            { this.props.model.shouldDisplayError && t(this.props.model.error) }
        </span>
    );
}
