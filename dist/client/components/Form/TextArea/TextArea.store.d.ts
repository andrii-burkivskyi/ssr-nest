import * as React from "react";
import { ValidationType } from "../../../utils/validation";
import { FormIntegrationProps, FormItemModel, FormTheme } from "../../../components/Form/Form.types";
import { ObservableString } from "../../../utils/types";
export interface InitProps {
    defaultValue?: TextAreaStore["defaultValue"];
    label?: TextAreaStore["label"];
    theme?: TextAreaStore["theme"];
    placeholder?: TextAreaStore["placeholder"];
    validations?: TextAreaStore["validations"];
    shouldValidate?: TextAreaStore["shouldValidate"];
    shouldDisplayed?: TextAreaStore["shouldDisplayed"];
    isReadOnly?: TextAreaStore["isReadOnly"];
    isDisabled?: TextAreaStore["isDisabled"];
    onSubmit?: TextAreaStore["onSubmit"];
}
export default class TextAreaStore implements FormIntegrationProps, FormItemModel {
    static theme: typeof FormTheme;
    constructor(props?: InitProps);
    private value;
    private fieldHeight?;
    private fieldContainerHeight?;
    theme: FormTheme;
    label: ObservableString;
    defaultValue: Nullable<string>;
    placeholder: string;
    name: string;
    validations: Array<ValidationType>;
    shouldDisplayed: boolean;
    shouldValidate: boolean;
    isReadOnly: boolean;
    isDisabled: boolean;
    isFocused: boolean;
    fieldContainerRef: React.RefObject<HTMLDivElement>;
    fieldRef: React.RefObject<HTMLTextAreaElement>;
    onSubmit?: () => void;
    get publicValue(): string;
    get formValue(): string;
    get tabIndex(): number;
    get error(): string;
    get isTouched(): boolean;
    get isError(): boolean;
    get shouldDisplayError(): boolean;
    get shouldBeFocused(): boolean;
    get scrollbarStyle(): Partial<React.CSSProperties>;
    get fieldStyle(): Partial<React.CSSProperties>;
    init: () => void;
    update: (props: Partial<InitProps> & {
        value?: string | undefined;
    }) => void;
    initValue: (value: string) => void;
    reset: () => void;
    clear: () => void;
    change: (value: string) => string;
    onChange: (event: React.FormEvent<HTMLTextAreaElement>) => void;
    onFocus: () => boolean;
    onBlur: () => void;
    onKeyDown: (event: React.KeyboardEvent<HTMLTextAreaElement>) => void;
}
