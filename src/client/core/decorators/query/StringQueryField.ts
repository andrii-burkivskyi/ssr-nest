import { ensureString, ensureArrayOfStrings } from '../../../utils/converters';
import { StringFilterInput } from '../../../../common/filter';

import { QueryProperty } from './field/queryField.decorator';
import { QueryFieldBase } from './field/QueryField.base';

export const isStringQueryField = (constructor: StringQueryField | any): constructor is StringQueryField => constructor === StringQueryField;

export class StringQueryField extends QueryFieldBase<StringFilterInput> {
    @QueryProperty(ensureString)
    equal!: (value?: string) => StringQueryField;

    @QueryProperty(ensureString)
    not_equal!: (value?: string) => StringQueryField;

    @QueryProperty(ensureArrayOfStrings)
    in!: (value?: string[]) => StringQueryField;

    @QueryProperty(ensureArrayOfStrings)
    not_in!: (value?: string[]) => StringQueryField;

    @QueryProperty(ensureString)
    contains!: (value?: string) => StringQueryField;

    @QueryProperty(ensureString)
    not_contains!: (value?: string) => StringQueryField;
}
