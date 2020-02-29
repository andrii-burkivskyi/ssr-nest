import { Component } from "react";
import ButtonStore from "./Button.store";
export default class Button extends Component<ViewOf<ButtonStore>> {
    getClassName: (coreClassName: string, addedClassName?: string) => string;
    render(): JSX.Element | null;
    renderButtonProps: () => any;
    renderText: () => "" | JSX.Element | undefined;
    renderIcon: () => "" | null | undefined;
}
