import { Component } from "react";
import OptionStore from "./Option.store";
export default class Option extends Component<ViewOf<OptionStore>> {
    getClassName: (className: string) => string;
    render(): JSX.Element;
}
