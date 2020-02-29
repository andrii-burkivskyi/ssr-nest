import { FormIntegrationProps } from "../Form.types";
interface InitProps<V> {
    value: V;
}
export default class HiddenFieldStore<V> implements FormIntegrationProps {
    constructor(props: InitProps<V>);
    value: Nullable<V>;
    defaultValue: Nullable<V>;
    shouldValidate: boolean;
    isTouched: boolean;
    isError: boolean;
    onSubmit?: () => void;
    get formValue(): Nullable<V>;
    initValue: (value: V) => void;
    clear: () => void;
    reset: () => void;
}
export {};
