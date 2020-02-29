import { observable, action, set, computed } from "mobx";

import Link from "../Link/Link";

import { ObservableString } from "../../utils/types";
import { blurAll } from "../../utils/dom";

enum ButtonTheme {
    DEFAULT = "default"
}

enum ButtonSize {
    SMALL = "small",
    NORMAL = "normal"
}

enum ButtonColor {
    WHITE = "white"
}

enum ButtonIconPosition {
    LEFT = "left",
    RIGHT = "right"
}
interface InitProps {
    isDisplayed?: ButtonStore["isDisplayed"];
    isDisabled?: ButtonStore["isDisabled"];
    text?: ButtonStore["text"];
    counter?: ButtonStore["counter"];
    icon?: ButtonStore["icon"];
    target?: ButtonStore["target"];
    to?: ButtonStore["to"];
    href?: ButtonStore["href"];
    onClick?: ButtonStore["buttonOnClick"]

    theme?: ButtonStore["theme"];
    size?: ButtonStore["size"];
    color?: ButtonStore["color"];
    iconPosition?: ButtonStore["iconPosition"];
    iconWidth?: ButtonStore["iconWidth"];
}

export default class ButtonStore {
    static theme = ButtonTheme;
    static size = ButtonSize;
    static color = ButtonColor;
    static iconPosition = ButtonIconPosition;

    constructor(props: InitProps) {
        const { onClick, ...restProps} = props;
        set(this, { ...restProps })
        this.buttonOnClick = onClick;
    }

    @observable theme: ButtonTheme = ButtonStore.theme.DEFAULT;
    @observable size: ButtonSize = ButtonStore.size.NORMAL;
    @observable color: ButtonColor = ButtonStore.color.WHITE;
    @observable iconPosition: ButtonIconPosition = ButtonStore.iconPosition.LEFT;
    @observable iconWidth?: number;

    @observable text?: ObservableString;
    @observable counter?: number;
    @observable icon?: string; 

    @observable target?: "_blank";
    @observable to?: string;
    @observable href?: string;
    @observable buttonOnClick?: () => void;

    @observable isDisplayed: boolean = true;
    @observable isDisabled: boolean = false;

    @computed get component(): any {
        return this.href && "a" || this.to && Link || this.buttonOnClick && "button" || "span";
    }

    @action setIsDisplayed = (isDisplayed: boolean) => this.isDisplayed = isDisplayed;
    @action setIsDisabled = (isDisabled: boolean) => this.isDisabled = isDisabled;
    @action onClick = () => {
        this.buttonOnClick && this.buttonOnClick()
        blurAll();
    }
}