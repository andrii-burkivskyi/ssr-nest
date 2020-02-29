import { ObservableString } from "../../utils/types";
export interface FormIntegrationProps {
    formValue: any;
    initValue: (value: any) => void;
    shouldValidate: boolean;
    isTouched: boolean;
    isError: boolean;
    clear: () => void;
    reset: () => void;
    onSubmit?: () => void;
}
export interface FormItemModel {
    theme: FormTheme;
    label?: ObservableString;
    error?: ObservableString;
    isReadOnly: boolean;
    isDisabled: boolean;
    shouldDisplayed: boolean;
    shouldBeFocused: boolean;
    shouldDisplayError: boolean;
}
export declare enum TabIndex {
    Disabled = -1,
    NotImportant = 1,
    Regular = 10,
    Important = 100,
    VeryImportant = 1000
}
export declare enum FormTheme {
    DEFAULT = "default"
}
