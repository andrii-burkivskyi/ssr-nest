import * as React from 'react';
import { observable, action, computed } from 'mobx';

import { FormItemParams, FormItemParamsProps } from "../core/FormItem.params";
import { FormItemValue } from "../core/FormItem.value";
import { FormItemValidation } from "../core/FormItem.validation";
import { DEFAULT_STRING, DEFAULT_FUNCTION } from "../../../utils/constants";
import { FormIntegrationProps } from "../Form.types";

interface TextFieldProps extends FormItemParamsProps {
}

export class TextFieldStore implements FormIntegrationProps {
    constructor(props: Partial<TextFieldProps>) {
      this.update(props);
    }

    params = new FormItemParams();
    value = new FormItemValue<string>({ empty: DEFAULT_STRING });
    validation = new FormItemValidation<string>(this.value);

    @observable onSubmit: () => void = DEFAULT_FUNCTION;
    
    @action update = (props: Partial<TextFieldProps>) => {
      this.params.update(props);
    }

    @action onChange: React.ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement> = (event) => {
      this.value.data = event.target.value;
    }

    @action init = (value?: string) => {
      this.value.init(value);
    }

    @computed get formValue() {
        return this.value.data ?? this.value.empty;
    }

    @computed get isTouched() {
        return this.value.isTouched;
    }

    @computed get isDirty() {
        return this.value.isDirty;
    }

    @computed get isError() {
        return this.validation.isError;
    }
}
