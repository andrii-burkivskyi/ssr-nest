import { observable, action, set } from 'mobx';

import { I18nString } from '../../../utils/types';
import { FormTheme } from '../../../components/Form/Form.types';

interface InitProps {
    theme?: OptionStore['theme'];
    label: OptionStore['label'];
    value: OptionStore['value'];
    props?: OptionStore['props'];
    onClick?: OptionStore['onClick'];
    isSelected?: OptionStore['isSelected'];
    isChecked?: OptionStore['isChecked'];
    isMultiSelect?: OptionStore['isMultiSelect'];
}

export default class OptionStore {
    static theme = FormTheme;

    constructor(props: InitProps) {
      const { label, value, ...restProps } = props;
      this.onClick = props.onClick || this.onClick;
      this.value = value;
      this.label = label;
      set(this, restProps);
    }

    @observable theme: FormTheme = OptionStore.theme.DEFAULT;

    @observable label: I18nString;

    @observable value: number | string;

    @observable props?: CommonMap;

    @observable isSelected = false;

    @observable isChecked = false;

    @observable isMultiSelect = false;

    @action private onClick: (option: OptionStore) => void = (option) => {};

    @action select = () => {
      this.onClick(this);
    }
}
