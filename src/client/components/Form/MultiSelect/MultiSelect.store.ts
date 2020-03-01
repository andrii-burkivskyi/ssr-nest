import * as React from 'react';
import {
  observable, observe, set, computed, action,
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
    theme?: MultiSelectStore<T>['theme'];
    label?: MultiSelectStore<T>['label'];
    placeholder?: MultiSelectStore<T>['placeholder'];
    defaultValue?: Array<string | number>;
    options: T[];
    getOptionLabel: (option: T) => ObservableString;
    getOptionValue: (option: T) => number | string;
    search?: MultiSelectStore<T>['search'];
    validations?: MultiSelectStore<T>['validations'];

    shouldValidate?: MultiSelectStore<T>['shouldValidate'];
    shouldDisplayed?: MultiSelectStore<T>['shouldDisplayed'];

    isTouched?: MultiSelectStore<T>['isTouched'];
    isReadOnly?: MultiSelectStore<T>['isReadOnly'];
    isDisabled?: MultiSelectStore<T>['isDisabled'];

    onSubmit?: MultiSelectStore<T>['onSubmit'];
}

export default class MultiSelectStore<T = CommonMap> implements FormIntegrationProps, FormItemModel {
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

    constructor(props: InitProps<T>) {
      const {
        options = [], defaultValue, getOptionLabel, getOptionValue, ...restProps
      } = props;
      set(this, restProps);
      this.getOptionLabel = getOptionLabel;
      this.getOptionValue = getOptionValue;
      this.list = new ListStore({
        options: options.map((option, index) => new OptionStore({
          theme: this.theme,
          label: getOptionLabel(option),
          value: getOptionValue(option),
          isMultiSelect: true,
          isSelected: index === 0,
          isChecked: !isNill(defaultValue)
            ? defaultValue.some((value) => value === getOptionValue(option))
            : false,
          props: option,
          onClick: this.changeValue,
        })),
      });
      this.value = !isNill(defaultValue)
        ? this.list.publicOptions
          .filter((option) => defaultValue?.some((value) => value === getOptionValue(option as any))) ?? []
        : [];
      this.defaultValue = this.value;
    }

    @observable private value: OptionStore[] = [];

    @observable getOptionValue: (option: T) => number | string;


    @observable theme: FormTheme = MultiSelectStore.theme.DEFAULT;

    @observable label?: ObservableString;

    @observable getOptionLabel: (option: T) => ObservableString;

    @observable placeholder?: ObservableString;

    @observable defaultValue: OptionStore[] = [];

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

    @computed get publicValue(): OptionStore[] {
      return this.value;
    }

    @computed get formValue(): string[] {
      return this.publicValue.map((option) => String(option.value));
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
        this.selectAndScrollToOption(this.list.firstPublicOption);
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

    @action initValue = (value: Array<string | number>) => {
      this.value = !isNill(value)
        ? this.list.options.filter((option) => value.includes(option.value)) ?? []
        : [];
      this.selectOption(this.list.firstPublicOption);
      this.shouldValidate = false;
    }

    @action reset = () => {
      this.value = !isNill(this.defaultValue)
        ? this.list.publicOptions
          .filter((option) => this.defaultValue?.includes(option)) ?? []
        : [];
      this.selectOption(this.list.firstPublicOption);
      this.shouldValidate = false;
    };

    @action clear = () => {
      this.value = [];
      this.selectOption(this.list.firstPublicOption);
      this.shouldValidate = false;
    };

    @action selectOption = (option: Nullable<OptionStore>) => {
      this.list.options.forEach((item) => {
        item.isSelected = option ? option.value === item.value : false;
      });
    }

    @action checkOption = (option: Nullable<OptionStore>) => {
      this.list.options.forEach((item) => {
        item.isChecked = option ? option.value === item.value : item.isChecked;
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
      if (this.value.includes(option)) {
        option.isChecked = false;
        this.value = this.value.filter((settedOption) => option !== settedOption);
      } else {
        option.isChecked = true;
        this.value.push(option);
      }
      this.selectOption(option);
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
      MultiSelectStore.hotkeyListOpen.setAction(this.open);
      MultiSelectStore.hotkeyListDown.setAction(this.selectNextOption);
      MultiSelectStore.hotkeyListUp.setAction(this.selectPrevOption);
      MultiSelectStore.hotkeyListChangeValue.setAction(this.changeValueFromSelection);
    };

    @action onBlur = () => {
      this.isFocused = false;
      if (!this.modal.isOpen) {
        this.shouldValidate = true;
        KeybindingStore.resetScope();
        MultiSelectStore.hotkeyListOpen.reset();
        MultiSelectStore.hotkeyListDown.reset();
        MultiSelectStore.hotkeyListUp.reset();
        MultiSelectStore.hotkeyListChangeValue.reset();
      }
    };
}
