import { action, computed, observable } from "mobx";

import { FormIntegrationProps } from "../Form.types";
import { DEFAULT_FUNCTION } from "../../../utils/constants";
import { FormItemGroup } from "./FormItem.group";

interface FieldProps<C extends (...args: any) => any> {
    Constructor: C;
    props: Parameters<C>[0];
}

interface AddFields<T> {
    ():  { [P in keyof T]: T[P]}
}

export class FormItemList<T> implements FormIntegrationProps {
    constructor(addFields: AddFields<T>) {
        this.addFields = addFields;
    }

    @observable addFields: AddFields<T>;
    @observable fields: FormItemGroup<{ [P in keyof T]: T[P] }>[] = [];

    onSubmit: () => void = DEFAULT_FUNCTION;

    @action init = (value: { [P in keyof T]?: any }[] = []) => {
        this.fields = value.map(() => new FormItemGroup(this.addFields()));
    }

    @computed get formValue() {
        return this.fields.map((field) => field.formValue);
    }

    @computed get isTouched() {
        return this.fields.some((field) => field.isTouched);
    }

    @computed get isDirty() {
        return this.fields.some((field) => field.isDirty);
    }

    @computed get isError() {
        return this.fields.some((field) => field.isError);
    }
}