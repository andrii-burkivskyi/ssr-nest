import { I18nString } from '../../utils/types';

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
    label?: I18nString;
    error?: I18nString;
    isReadOnly: boolean;
    isDisabled: boolean;
    shouldDisplayed: boolean;
    shouldBeFocused: boolean;
    shouldDisplayError: boolean;
}

export enum TabIndex {
    Disabled = -1,
    NotImportant = 1,
    Regular = 10,
    Important = 100,
    VeryImportant = 1000,
}

export enum FormTheme {
    DEFAULT = 'default',
}
