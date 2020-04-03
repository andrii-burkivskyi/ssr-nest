import * as React from 'react';
import {
  observable, action, computed, set,
} from 'mobx';
import { ValidationType, validate } from '../../../utils/validation';
import { t } from '../../../utils/i18n/translations';
import { KeyCode } from '../../../utils/keyboard';
import {
  TabIndex, FormIntegrationProps, FormItemModel, FormTheme,
} from '../../../components/Form/Form.types';
import watch from '../../../utils/watch';
import { I18nString } from '../../../utils/types';

export interface InitProps {
    defaultValue?: TextAreaStore['defaultValue'];
    label?: TextAreaStore['label'];
    theme?: TextAreaStore['theme'];
    placeholder?: TextAreaStore['placeholder'];
    validations?: TextAreaStore['validations'];

    shouldValidate?: TextAreaStore['shouldValidate'];
    shouldDisplayed?: TextAreaStore['shouldDisplayed'];

    isReadOnly?: TextAreaStore['isReadOnly'];
    isDisabled?: TextAreaStore['isDisabled'];

    onSubmit?: TextAreaStore['onSubmit'];
}

export default class TextAreaStore implements FormIntegrationProps, FormItemModel {
    static theme = FormTheme;

    constructor(props?: InitProps) {
      if (props) {
        this.value = props.defaultValue || this.defaultValue;
        set(this, props);
      }
    }

    @observable private value: Nullable<string> = null;

    @observable private fieldHeight?: number;

    @observable private fieldContainerHeight?: number;

    @observable theme: FormTheme = TextAreaStore.theme.DEFAULT;

    @observable label: I18nString = '';

    @observable defaultValue: Nullable<string> = null;

    @observable placeholder = '';

    @observable name = 'defaultName';

    @observable validations: Array<ValidationType> = [];


    @observable shouldDisplayed = true;

    @observable shouldValidate = false;

    @observable isReadOnly = false;

    @observable isDisabled = false;

    @observable isFocused = false;

    @observable fieldContainerRef: React.RefObject<HTMLDivElement> = React.createRef<HTMLDivElement>();

    @observable fieldRef: React.RefObject<HTMLTextAreaElement> = React.createRef<HTMLTextAreaElement>();

    @observable onSubmit?: () => void;

    @computed get publicValue(): string {
      return this.value ?? '';
    }

    @computed get formValue(): string {
      return this.publicValue;
    }

    @computed get tabIndex(): number {
      return this.isDisabled || this.isReadOnly
        ? TabIndex.Disabled
        : TabIndex.Regular;
    }

    @computed get error(): string {
      const [error, values] = validate(this.value, this.validations);
      return t(error, values);
    }

    @computed get isTouched(): boolean {
      return this.value !== this.defaultValue;
    }

    @computed get isError(): boolean {
      return Boolean(this.error);
    }

    @computed get shouldDisplayError(): boolean {
      return this.shouldValidate && this.isError;
    }

    @computed get shouldBeFocused(): boolean {
      return this.isFocused;
    }

    @computed get scrollbarStyle(): Partial<React.CSSProperties> {
      return { height: this.fieldContainerHeight };
    }

    @computed get fieldStyle(): Partial<React.CSSProperties> {
      return { height: this.fieldHeight };
    }

    @action init = () => {
      watch(
        () => Boolean(this.fieldContainerRef.current) && Boolean(this.fieldRef.current),
        () => {
          this.fieldContainerHeight = this.fieldContainerRef.current?.offsetHeight;
          this.fieldHeight = this.fieldRef.current?.scrollHeight;
        },
      );
    };

    @action update = (props: Partial<InitProps> & { value?: string }) => {
      const { value, ...restProps } = props;
      this.value = value || this.value;
      set(this, restProps);
    };

    @action initValue = (value: string) => {
      this.defaultValue = value;
      this.value = this.defaultValue;
      this.shouldValidate = false;
    }

    @action reset = () => {
      this.value = this.defaultValue;
      this.shouldValidate = false;
    };

    @action clear = () => {
      this.value = null;
      this.shouldValidate = false;
    };

    @action change = (value: string) => (this.value = value);

    @action onChange = (event: React.FormEvent<HTMLTextAreaElement>) => {
      this.fieldHeight = event.currentTarget.scrollHeight;
      this.value = event.currentTarget.value;
    };

    @action onFocus = () => (this.isFocused = true);

    @action onBlur = () => {
      this.isFocused = false;
      this.shouldValidate = true;
    };

    @action onKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
      if (this.onSubmit && event.keyCode === KeyCode.ENTER && event.shiftKey) {
        event.preventDefault();
        event.stopPropagation();
        this.onSubmit();
      }
    };
}
