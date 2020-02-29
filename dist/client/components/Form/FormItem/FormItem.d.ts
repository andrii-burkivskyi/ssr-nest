import { Component } from "react";
import { FormItemModel } from "../../Form/Form.types";
export default class FormItem extends Component<ViewOf<FormItemModel>> {
    getClassName: (className: string, addedClassName?: string | undefined) => string;
    render(): JSX.Element | null;
    renderLabel: () => "" | JSX.Element | undefined;
    renderError: () => JSX.Element;
}
