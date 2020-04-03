import {
  observable, action, computed, observe, IValueDidChange,
} from 'mobx';

import { DEFAULT_FUNCTION } from '../../utils/constants';
import { isNill } from '../../utils/typeGuards';

import { FormIntegrationProps } from './Form.types';

interface InitProps<T> {
    fields: FormStore<T>['fields'];
    onSubmit?: () => void;
}

export default class FormStore<T> {
  constructor(props: InitProps<T>) {
    this.fields = props.fields;
    this.fieldList.forEach((field) => field.onSubmit = (field.onSubmit || props.onSubmit));
    this.submit = props.onSubmit || DEFAULT_FUNCTION;
  }

  @observable fields: { [P in keyof T]: T[P] };

  @observable submit: () => void;

  @computed get data() {
    return <{ [P in keyof T]: any }>Object.entries(this.fields).reduce((data, [key, field]) => {
      data[key] = (<FormIntegrationProps>field).formValue;
      return data;
    }, {});
  }

  @computed private get fieldList(): Array<FormIntegrationProps> {
    return Object.keys(this.fields).map((key) => <FormIntegrationProps> this.fields[key]);
  }

  @computed get isTouched(): boolean {
    return this.fieldList.some((field) => field.isTouched);
  }

  @computed get isDirty(): boolean {
    return this.fieldList.some((field) => field.isDirty);
  }

  @computed get isValid(): boolean {
    return !this.fieldList.some((field) => field.isError);
  }

  @action initValues = (values: { [P in keyof T]?: any }) => {
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
}
