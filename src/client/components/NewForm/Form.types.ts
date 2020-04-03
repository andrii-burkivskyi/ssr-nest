export interface FormIntegrationProps<T = any> {
    onSubmit: () => void;

    init: (value?: T) => void;

    formValue: T;
    isTouched: boolean;
    isDirty: boolean;
    isError: boolean;
}
