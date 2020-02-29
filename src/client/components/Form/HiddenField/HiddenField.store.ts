import { FormItemModel, FormTheme, FormIntegrationProps } from "../Form.types";
import { observable, computed, action, toJS } from "mobx";

interface InitProps<V> {
    value: V;
}

export default class HiddenFieldStore<V> implements FormIntegrationProps {
    constructor(props: InitProps<V>) {
        this.value = props.value;
        this.defaultValue = props.value;
    }

    @observable value: Nullable<V> = null;
    @observable defaultValue: Nullable<V> = null;
    @observable shouldValidate: boolean = false;
    @observable isTouched: boolean = false;
    @observable isError: boolean = false;
    @observable onSubmit?: () => void;


    @computed get formValue(): Nullable<V> {
        return toJS(this.value);
    }

    @action initValue = (value: V) => {
        this.defaultValue = value;
        this.value = this.defaultValue;
    }

    @action clear = () => {
        this.value = null;
        this.defaultValue = null;
    };

    @action reset = () => {
        this.value = this.defaultValue;
    };
}