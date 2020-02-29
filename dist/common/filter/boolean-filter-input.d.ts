import { Order } from './filter.types';
import { ICommonFilterInput } from '.';
export declare class BooleanFilterInput implements ICommonFilterInput {
    equal?: string;
    not_equal?: string;
    order?: Order;
}
