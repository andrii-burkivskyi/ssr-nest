import { action, computed, observable } from "mobx";

import { FormIntegrationProps } from "../Form.types";
import { DEFAULT_FUNCTION } from "../../../utils/constants";
import { isNill } from "../../../utils/typeGuards";

export class FormItemGroup<T> implements FormIntegrationProps {
    constructor(fields: FormItemGroup<T>['fields']) {
        this.fields = fields;
    }

    @observable fields: { [P in keyof T]: T[P] };

    onSubmit: () => void = DEFAULT_FUNCTION;

    @action init = (values: { [P in keyof T]?: any } = {}) => {
        Object.entries(values).forEach(([key, value]) => {
            const field = this.fields[key] as FormIntegrationProps;
            if (!isNill(value)) {
                field.init(value);
            }
            else {
                field.init()
            }
        });
    }

    @computed private get fieldList(): Array<FormIntegrationProps> {
        return Object.keys(this.fields).map((key) => <FormIntegrationProps> this.fields[key]);
    }

    @computed get formValue() {
        return <{ [P in keyof T]: any }>Object.entries(this.fields).reduce((data, [key, field]) => {
        data[key] = (<FormIntegrationProps>field).formValue;
        return data;
        }, {});
    }

    @computed get isTouched(): boolean {
        return this.fieldList.some((field) => field.isTouched);
    }

    @computed get isDirty(): boolean {
        return this.fieldList.some((field) => field.isDirty);
    }

    @computed get isError(): boolean {
        return this.fieldList.some((field) => field.isError);

    }
}