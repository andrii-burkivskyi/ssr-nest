
import * as React from 'react';
import {
  observable, set, computed, action,
} from 'mobx';
import { FormTheme, FormItemModel, FormIntegrationProps } from '../Form.types';
import { validate, ValidationType } from '../../../utils/validation';
import { ObservableString } from '../../../utils/types';
import { t } from '../../../utils/i18n/translations';
import ModalStore from '../../../components/Modal/Modal.store';
import OptionStore from '../../../components/Form/Option/Option.store';
import ListStore from '../../../components/List/List.store';

import KeybindingStore from '../../../core/common/Keybinding.store';
import { isNill } from '../../../utils/typeGuards';

export interface InitProps<T = CommonMap> {
    theme?: SelectStore<T>['theme'];
    label?: SelectStore<T>['label'];
    placeholder?: SelectStore<T>['placeholder'];
    defaultValue?: string | number;
    options: T[];
    getOptionLabel: (option: T) => ObservableString;
    getOptionValue: (option: T) => number | string;
    search?: SelectStore<T>['search'];
    validations?: SelectStore<T>['validations'];

    shouldValidate?: SelectStore<T>['shouldValidate'];
    shouldDisplayed?: SelectStore<T>['shouldDisplayed'];

    isTouched?: SelectStore<T>['isTouched'];
    isReadOnly?: SelectStore<T>['isReadOnly'];
    isDisabled?: SelectStore<T>['isDisabled'];

    onSubmit?: SelectStore<T>['onSubmit'];
}

export default class SelectStore<T = CommonMap> implements FormIntegrationProps, FormItemModel {
    static theme = FormTheme;

    static hotkeyListOpen = new KeybindingStore({
      key: 'down',
      name: 'list.open',
      scope: KeybindingStore.scope.LIST_FOCUS,
    });

    static hotkeyListDown = new KeybindingStore({
      key: 'down',
      name: 'list.down',
      scope: KeybindingStore.scope.LIST_OPEN,
    });

    static hotkeyListUp = new KeybindingStore({
      key: 'up',
      name: 'list.up',
      scope: KeybindingStore.scope.LIST_OPEN,
    });

    static hotkeyListChangeValue = new KeybindingStore({
      key: 'enter',
      name: 'list.change_value',
      scope: KeybindingStore.scope.LIST_OPEN,
    });

    constructor(props?: InitProps<T>) {
      if (props) {
        const {
          options = [], getOptionLabel, getOptionValue, ...restProps
        } = props;
        set(this, restProps);
        this.list = new ListStore({
          options: options.map((option) => new OptionStore({
            theme: this.theme,
            label: getOptionLabel(option),
            value: getOptionValue(option),
            isSelected: !isNill(props.defaultValue) ? getOptionValue(option) === props.defaultValue : false,
            props: option,
            onClick: this.changeValue,
          })),
        });
        this.value = !isNill(props.defaultValue)
          ? this.list.publicOptions.find((option) => option.value === props.defaultValue) ?? null
          : null;
      }
    }

    @observable private value: Nullable<OptionStore> = null;


    @observable theme: FormTheme = SelectStore.theme.DEFAULT;

    @observable label?: ObservableString;

    @observable placeholder?: ObservableString;

    @observable defaultValue: Nullable<OptionStore> = null;

    @observable search = '';

    @observable shouldValidate = false;

    @observable shouldDisplayed = true;

    @observable isTouched = false;

    @observable isFocused = false;

    @observable isReadOnly = false;

    @observable isDisabled = false;

    @observable validations: Array<ValidationType> = [];

    @observable modal: ModalStore = new ModalStore({ onClose: () => this.close() });

    @observable targetRef: React.RefObject<HTMLButtonElement> = React.createRef();

    @observable searchRef: React.RefObject<HTMLInputElement> = React.createRef();

    @observable list: ListStore<OptionStore> = new ListStore();

    @observable onSubmit?: () => void;

    @computed get publicValue(): Nullable<OptionStore> {
      return this.value;
    }

    @computed get formValue(): string {
      return String(this.publicValue?.value ?? '');
    }

    @computed get error(): string {
      const [error, values] = validate(this.value, this.validations);
      return t(error, values);
    }

    @computed get isError(): boolean {
      return Boolean(this.error);
    }

    @computed get shouldDisplayError(): boolean {
      return this.shouldValidate && this.isError;
    }

    @computed get shouldBeFocused(): boolean {
      return this.isFocused || this.modal.isOpen;
    }

    @action open = () => {
      if (!this.isDisabled && !this.isReadOnly) {
        this.modal.open();
        KeybindingStore.setScope(KeybindingStore.scope.LIST_OPEN);
        this.value
          ? this.list.scrollTo(this.value)
          : this.selectAndScrollToOption(this.list.firstPublicOption);
      }
    }

    @action close = () => {
      this.search = '';
      this.shouldValidate = true;
        this.targetRef.current?.focus();
    }

    @action toggle = () => {
      this.modal.isOpen
        ? this.close()
        : this.open();
    }

    @action changeSearch = (search: string) => {
      this.search = search;
    };

    @action onChangeSearch = (event: React.FormEvent<HTMLInputElement>) => {
      this.search = event.currentTarget.value;
      this.list.filter = (item) => t(item.label).includes(this.search);
      this.selectAndScrollToOption(this.list.firstPublicOption);
    };

    @action initValue = (value: number | string) => {
      const option = this.list.options.find((option) => option.value === value);
      this.defaultValue = option ?? null;
      this.value = this.defaultValue;
      this.shouldValidate = false;
    }

    @action reset = () => {
      this.value = this.defaultValue;
      this.selectOption(this.defaultValue);
      this.shouldValidate = false;
    };

    @action clear = () => {
      this.value = null;
      this.selectOption(this.value);
      this.shouldValidate = false;
    };

    @action selectOption = (option: Nullable<OptionStore>) => {
      this.list.options.forEach((item) => {
        item.isSelected = option ? option.value === item.value : false;
      });
    }

    @action selectPrevOption = () => {
      const currentOption = this.list.options.find((option) => option.isSelected);
      if (currentOption) {
        const currentOptionIndex = this.list.publicOptions.indexOf(currentOption);
        const prevOption = this.list.publicOptions[currentOptionIndex - 1] || this.list.firstPublicOption;
        this.selectOption(prevOption);
        this.list.scrollTo(prevOption);
      }
    }

    @action selectNextOption = () => {
      const currentOption = this.list.options.find((option) => option.isSelected);
      if (currentOption) {
        const currentOptionIndex = this.list.publicOptions.indexOf(currentOption);

        const nextOption = this.list.publicOptions[currentOptionIndex + 1] || this.list.lastPublicOption;
        this.selectOption(nextOption);
        this.list.scrollTo(nextOption, false);
      }
    }

    @action selectAndScrollToOption = (option: Nullable<OptionStore>) => {
      this.selectOption(option);
      this.list.scrollTo(option);
    }

    @action changeValue = (option: OptionStore) => {
      this.value = option;
      this.selectOption(option);
      this.modal.close();
    }

    @action changeValueFromSelection = (event: KeyboardEvent) => {
      event.preventDefault();

      const option = this.list.options.find((option) => option.isSelected);

      if (option) {
        this.changeValue(option);
      }
    }

    @action onFocus = () => {
      this.isFocused = true;
      KeybindingStore.setScope(KeybindingStore.scope.LIST_FOCUS);
      SelectStore.hotkeyListOpen.setAction(this.open);
      SelectStore.hotkeyListDown.setAction(this.selectNextOption);
      SelectStore.hotkeyListUp.setAction(this.selectPrevOption);
      SelectStore.hotkeyListChangeValue.setAction(this.changeValueFromSelection);
    };

    @action onBlur = () => {
      this.isFocused = false;
      if (!this.modal.isOpen) {
        this.shouldValidate = true;
        KeybindingStore.resetScope();
        SelectStore.hotkeyListOpen.reset();
        SelectStore.hotkeyListDown.reset();
        SelectStore.hotkeyListUp.reset();
        SelectStore.hotkeyListChangeValue.reset();
      }
    };
}
