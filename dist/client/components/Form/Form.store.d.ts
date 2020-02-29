import { FormIntegrationProps } from "./Form.types";
export interface InitProps<T> {
    fields: FormStore<T>["fields"];
    touchHook?: FormStore<T>["_touchHook"];
    validHook?: FormStore<T>["_validHook"];
    onSubmit?: () => void;
}
export default class FormStore<T> {
    constructor(props: InitProps<T>);
    fields: {
        [P in keyof T]: T[P];
    };
    private _touchHook?;
    private _validHook?;
    private _readyForSubmitHook?;
    submit: () => void;
    get data(): {
        [P in keyof T]: FormIntegrationProps["formValue"];
    };
    private get _fields();
    get isTouched(): boolean;
    get isValid(): boolean;
    initValues: (values: { [P in keyof T]?: any; }) => void;
    clear: () => void;
    reset: () => void;
    allowValidation: () => void;
    init: (fields: { [P in keyof T]: T[P]; }) => void;
}
