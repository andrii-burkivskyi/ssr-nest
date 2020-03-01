import {
  observable, computed, action, toJS,
} from 'mobx';
import { FormItemModel, FormTheme, FormIntegrationProps } from '../Form.types';

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

    @observable shouldValidate = false;

    @observable isTouched = false;

    @observable isError = false;

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
