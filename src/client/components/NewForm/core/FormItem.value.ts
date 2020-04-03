import { observable, computed, action } from "mobx";

interface ValueProps<T> {
    empty: T;
    default?: T;
}

export class FormItemValue<T> {
    constructor(props: ValueProps<T>){
        this.data = props.default ?? props.empty;
        this.default = props.default ?? props.empty;
        this.empty = props.empty;
    }

    @observable data: T;
    @observable default: T;
    @observable empty: T;
    @observable isDirty = false;

    @action init = (value?: T) => {
        this.data = value ?? this.empty;
        this.default = value ?? this.empty;
        this.isDirty = false;
    }

    @action changeValue = (value: T) => {
        this.data = value;
        this.isDirty = true;
    }

    @computed get isTouched(): boolean {
      return this.data !== this.default;
    }
}