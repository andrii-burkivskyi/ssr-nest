import { Order } from './filter.types';
export { IdFilterInput } from './id-filter-input';
export { StringFilterInput } from './string-filter-input';
export { NumberFilterInput } from './number-filter-input';
export { EnumFilterInput } from './enum-filter-input';
export { BooleanFilterInput } from './boolean-filter-input';
export interface ICommonFilterInput {
    equal?: any;
    not_equal?: any;
    in?: any[];
    not_in?: any[];
    lt?: any;
    lte?: any;
    gt?: any;
    gte?: any;
    contains?: any;
    not_contains?: any;
    order?: Order;
}
export interface ICommonFiltersMapInput {
    [key: string]: ICommonFilterInput;
}
