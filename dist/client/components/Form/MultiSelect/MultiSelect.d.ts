import { Component } from "react";
import MultiSelectStore from "./MultiSelect.store";
export default class MultiSelect<T> extends Component<ViewOf<MultiSelectStore<T>>> {
    getClassName: (className: string) => string;
    focus: () => void | null;
    render(): JSX.Element;
    renderField: () => JSX.Element;
    renderDropDown: () => false | JSX.Element;
}
