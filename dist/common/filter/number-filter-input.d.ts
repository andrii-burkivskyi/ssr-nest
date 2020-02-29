import { Order } from './filter.types';
import { ICommonFilterInput } from '.';
export declare class NumberFilterInput implements ICommonFilterInput {
    equal?: number;
    not_equal?: number;
    in?: number[];
    not_in?: number[];
    lt?: number;
    lte?: number;
    gt?: number;
    gte?: number;
    order?: Order;
}
