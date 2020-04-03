import { observable, action, set, has } from "mobx";
import { I18nString } from "../../../utils/types";
import { setOwnProps } from "../utils/setOwnProps";

export interface FormItemParamsProps {
    label: FormItemParams['label'];
    placeholder: FormItemParams['placeholder'];
    helperText: FormItemParams['helperText'];
    isReadOnly: FormItemParams['isReadOnly'];
    isDisabled: FormItemParams['isDisabled'];
    isRequired: FormItemParams['isRequired'];
    margin: FormItemParams['margin'];
    shrink: FormItemParams['shrink'];
    shouldDisplayed: FormItemParams['shouldDisplayed'];
}

export class FormItemParams {
    @observable label?: I18nString;
    @observable placeholder?: I18nString;
    @observable helperText?: I18nString;
    @observable isReadOnly = false;
    @observable isDisabled = false;
    @observable margin: 'none' | 'dense' | 'normal' = 'normal';
    @observable shrink = true;
    @observable isRequired = false;
    @observable shouldDisplayed = true;

    @action update = (props: Partial<FormItemParamsProps> & Record<string, any>) => {
        setOwnProps(this, props);
    }
}