import React from 'react';
import { observer } from 'mobx-react';
import MUITextField from '@material-ui/core/TextField';

import { t } from '../../../utils/i18n/translations';

import { TextFieldStore } from './TextField.store';

export const TextField: React.SFC<ViewOf<TextFieldStore>> = observer((props) => {
  const { className, model } = props;

  return (
    <MUITextField
      className={className}
      label={t(model.params.label)}
      placeholder={t(model.params.placeholder)}
      value={model.value.data}
      onChange={model.onChange}
      required={model.params.isRequired}
      disabled={model.params.isDisabled}
      error={model.validation.isError}
      helperText={model.validation.error || t(model.params.helperText)}
      margin='normal'
      InputLabelProps={{
        shrink: model.params.shrink,
      }}
      InputProps={{
        readOnly: model.params.isReadOnly,
      }}
      variant="filled"
    />
  )        
})

