import React, {Component} from "react";
import { observer } from "mobx-react";

// import Icon from "../Icon/Icon";

import bem from "../../utils/bem";
import { t } from "../../utils/i18n/translations";

import ButtonStore from "./Button.store";

import styles from "./button.scss"

@observer
export default class Button extends Component<ViewOf<ButtonStore>> {
    getClassName = (coreClassName: string, addedClassName: string = "") => bem(coreClassName,
        {
            theme: this.props.model.theme,
            color: this.props.model.color,
            size: this.props.model.size,
            isDisabled: this.props.model.isDisabled,
            iconPosition: this.props.model.icon && this.props.model.iconPosition,
            hasNoAction: !Boolean(this.props.model.buttonOnClick) &&
                !Boolean(this.props.model.href) &&
                !Boolean(this.props.model.to)
        },
        addedClassName
    );

    render() {
        const { model } = this.props;
        if (!model.isDisplayed) { return null; }

        return (
            <div className={this.getClassName(styles.button_container)} style={this.props.style}>
                {
                    React.createElement(
                        model.component,
                        this.renderButtonProps(),
                        this.renderText(),
                        this.renderIcon()
                    )
                }
            </div>
        );
    }

    renderButtonProps = () => ({
        className: this.getClassName(styles.button),
        to: this.props.model.to,
        href: this.props.model.href,
        onClick: this.props.model.onClick,
        target: this.props.model.target
    }) as any;

    renderText = () => this.props.model.text && (
        <div aria-disabled className={this.getClassName(styles.text_container)}>
            <span aria-disabled className={this.getClassName(styles.text)}>{t(this.props.model.text)}</span>
            {
                this.props.model.counter !== undefined && this.props.model.counter > 1 &&
                <span aria-disabled className={this.getClassName(styles.counter)}>
                    {this.props.model.counter}
                </span>
            }
        </div>
    );
    
    renderIcon = () => this.props.model.icon && (
        null
        // <Icon
        //     className={this.getClassName(styles.icon)}
        //     style={{ width: this.props.model.iconWidth }}
        //     svg={this.props.model.icon}
        // />
    );
}