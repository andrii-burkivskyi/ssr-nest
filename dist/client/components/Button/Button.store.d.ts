import { ObservableString } from "../../utils/types";
declare enum ButtonTheme {
    DEFAULT = "default"
}
declare enum ButtonSize {
    SMALL = "small",
    NORMAL = "normal"
}
declare enum ButtonColor {
    WHITE = "white"
}
declare enum ButtonIconPosition {
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
    onClick?: ButtonStore["buttonOnClick"];
    theme?: ButtonStore["theme"];
    size?: ButtonStore["size"];
    color?: ButtonStore["color"];
    iconPosition?: ButtonStore["iconPosition"];
    iconWidth?: ButtonStore["iconWidth"];
}
export default class ButtonStore {
    static theme: typeof ButtonTheme;
    static size: typeof ButtonSize;
    static color: typeof ButtonColor;
    static iconPosition: typeof ButtonIconPosition;
    constructor(props: InitProps);
    theme: ButtonTheme;
    size: ButtonSize;
    color: ButtonColor;
    iconPosition: ButtonIconPosition;
    iconWidth?: number;
    text?: ObservableString;
    counter?: number;
    icon?: string;
    target?: "_blank";
    to?: string;
    href?: string;
    buttonOnClick?: () => void;
    isDisplayed: boolean;
    isDisabled: boolean;
    get component(): any;
    setIsDisplayed: (isDisplayed: boolean) => boolean;
    setIsDisabled: (isDisabled: boolean) => boolean;
    onClick: () => void;
}
export {};
