import { Component } from "react";
import InputStore from "./Input.store";
export default class Input extends Component<ViewOf<InputStore>> {
    getClassName: (className: string) => string;
    render(): JSX.Element;
    renderField: () => JSX.Element;
    renderArrows: () => false | JSX.Element;
}
