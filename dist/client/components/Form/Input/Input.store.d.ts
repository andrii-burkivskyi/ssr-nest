import * as React from "react";
import { ValidationType } from "../../../utils/validation";
import { ObservableString } from "../../../utils/types";
import { FormTheme, FormIntegrationProps, FormItemModel } from "../../../components/Form/Form.types";
declare enum InputType {
    TEXT = "text",
    EMAIL = "email",
    PASSWORD = "password",
    SEARCH = "search",
    URL = "url",
    NUMBER = "number"
}
interface InitNumberProps {
    type: InputType.NUMBER;
    theme?: InputStore["theme"];
    defaultValue?: InputStore["defaultValue"];
    label?: InputStore["label"];
    placeholder?: InputStore["placeholder"];
    validations?: InputStore["validations"];
    mask?: InputStore["mask"];
    shouldDisplayed?: InputStore["shouldDisplayed"];
    isReadOnly?: InputStore["isReadOnly"];
    isDisabled?: InputStore["isDisabled"];
    onSubmit?: InputStore["onSubmit"];
    min?: InputStore["min"];
    max?: InputStore["max"];
    scale?: InputStore["scale"];
    signed?: InputStore["signed"];
    thousandsSeparator?: InputStore["thousandsSeparator"];
    radix?: InputStore["radix"];
}
interface InitCommonProps {
    type: InputType.TEXT | InputType.EMAIL | InputType.PASSWORD | InputType.SEARCH | InputType.URL;
    theme?: InputStore["theme"];
    defaultValue?: InputStore["defaultValue"];
    label?: InputStore["label"];
    placeholder?: InputStore["placeholder"];
    validations?: InputStore["validations"];
    mask?: InputStore["mask"];
    shouldDisplayed?: InputStore["shouldDisplayed"];
    isReadOnly?: InputStore["isReadOnly"];
    isDisabled?: InputStore["isDisabled"];
    onSubmit?: InputStore["onSubmit"];
}
export declare type InitProps = InitCommonProps | InitNumberProps;
interface MaskObject {
    unmaskedValue: string;
}
export default class InputStore implements FormIntegrationProps, FormItemModel {
    static theme: typeof FormTheme;
    static type: typeof InputType;
    constructor(props?: InitProps);
    name: string;
    label?: ObservableString;
    theme: FormTheme;
    type: InputType;
    value: string;
    publicValue: string;
    placeholder?: ObservableString;
    defaultValue: string;
    validations: Array<ValidationType>;
    mask?: string | CommonMap[] | CommonMap;
    shouldDisplayed: boolean;
    isReadOnly: boolean;
    isDisabled: boolean;
    isFocused: boolean;
    shouldValidate: boolean;
    onSubmit?: () => void;
    min?: number;
    max?: number;
    scale: number;
    signed: boolean;
    thousandsSeparator: string;
    radix: string;
    get formValue(): string;
    get tabIndex(): number;
    get publicType(): InputType;
    get error(): string;
    get isTouched(): boolean;
    get isError(): boolean;
    get shouldDisplayError(): boolean;
    get shouldBeFocused(): boolean;
    update: (props: (Partial<InitNumberProps> & {
        value?: string | undefined;
    }) | (Partial<InitCommonProps> & {
        value?: string | undefined;
    })) => void;
    initValue: (value: string) => void;
    reset: () => void;
    clear: () => void;
    change: (value: string) => void;
    commit: (value: string, mask: MaskObject) => void;
    increment: () => void;
    decrement: () => void;
    onChange: (event: React.FormEvent<HTMLInputElement>) => void;
    onAccept: (value: string, mask: MaskObject) => void;
    focus: () => void;
    blur: () => void;
    onKeyDown: (event: React.KeyboardEvent<HTMLInputElement>) => void;
}
export {};
