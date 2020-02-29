import { Order } from './filter.types';
import { ICommonFilterInput } from '.';
export declare class StringFilterInput implements ICommonFilterInput {
    equal?: string;
    not_equal?: string;
    in?: string[];
    not_in?: string[];
    contains?: string;
    not_contains?: string;
    order?: Order;
}
