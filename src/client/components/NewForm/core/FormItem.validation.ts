import { observable, computed, action } from "mobx";
import { ValidationType, validate } from "../../../utils/validation";
import { t } from "../../../utils/i18n/translations";
import { DEFAULT_STRING } from "../../../utils/constants";
import { FormItemValue } from "./FormItem.value";

export class FormItemValidation<T> {
    constructor(value: FormItemValue<T>){
        this.value = value;
    }

    @observable private value: FormItemValue<T>;
    @observable private validations?: ValidationType[];
    @observable private shouldValidate = false;

    @action validate = (shouldValidate: boolean = true) => {
        this.shouldValidate = shouldValidate;
    }

    @computed get error(): string {
        if (this.validations) {
            const [error, values] = validate(this.value.data, this.validations);
            return t(error, values);
        }

        return DEFAULT_STRING;
    }

    @computed get isError(): boolean {
      return Boolean(this.error);
    }

    @computed get shouldDisplayError(): boolean {
      return this.shouldValidate && Boolean(this.error);
    }
}