import { ensureNumber, ensureArrayOfNumbers } from '../../../utils/converters';
import { IdFilterInput } from '../../../../common/filter';

import { QueryProperty } from './field/queryField.decorator';
import { QueryFieldBase } from './field/QueryField.base';

export const isIDQueryField = (constructor: IDQueryField | any): constructor is IDQueryField =>
    constructor === IDQueryField;

export class IDQueryField extends QueryFieldBase<IdFilterInput> {
    @QueryProperty(ensureNumber)
    equal!: (value?: number) => IDQueryField;

    @QueryProperty(ensureNumber)
    not_equal!: (value?: number) => IDQueryField;

    @QueryProperty(ensureArrayOfNumbers)
    in!: (value?: number[]) => IDQueryField;

    @QueryProperty(ensureArrayOfNumbers)
    not_in!: (value?: number[]) => IDQueryField;
}
