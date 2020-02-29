import { Component } from "react";
import SelectStore from "./Select.store";
export default class Select extends Component<ViewOf<SelectStore>> {
    getClassName: (className: string) => string;
    focus: () => void | null;
    render(): JSX.Element;
    renderField: () => JSX.Element;
    renderDropDown: () => false | JSX.Element;
}
