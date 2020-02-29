import { Component } from "react";
import TextAreaStore from "./TextArea.store";
export default class TextArea extends Component<ViewOf<TextAreaStore>> {
    componentDidMount(): void;
    getClassName: (className: string) => string;
    render(): JSX.Element;
}
