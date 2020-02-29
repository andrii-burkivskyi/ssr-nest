import React, { Component } from "react";
import Scrollbars from "react-custom-scrollbars";
import { toJS } from "mobx";
import { observer } from "mobx-react";

import FormItem from "../../Form/FormItem/FormItem";
import bem from "../../../utils/bem";

import TextAreaStore from "./TextArea.store";

import styles from "./form_textarea.scss";


@observer
export default class TextArea extends Component<ViewOf<TextAreaStore>> {
    componentDidMount() {
        this.props.model.init();
    }

    getClassName = (className: string) =>
        bem(className, {
            theme: this.props.model.theme,
            isReadOnly: this.props.model.isReadOnly,
            isDisabled: this.props.model.isDisabled,
            isError: this.props.model.shouldDisplayError,
            isFocused: this.props.model.shouldBeFocused,
        });

    render() {
        const { model } = this.props;
        return (
            <FormItem model={model}>
                <div
                    ref={model.fieldContainerRef}
                    className={this.getClassName(styles.field_container)}
                >
                    <Scrollbars style={toJS(model.scrollbarStyle)}>
                        <textarea
                            ref={model.fieldRef}
                            tabIndex={model.tabIndex}
                            className={this.getClassName(styles.field)}
                            style={toJS(model.fieldStyle)}
                            value={model.publicValue}
                            readOnly={model.isReadOnly || model.isDisabled}
                            placeholder={model.placeholder}
                            onChange={model.onChange}
                            onFocus={model.onFocus}
                            onBlur={model.onBlur}
                            onKeyDown={model.onKeyDown}
                        />
                    </Scrollbars>
                </div>
            </FormItem>
        );
    }
}
