import { Order } from './filter.types';
import { ICommonFilterInput } from '.';
export declare class IdFilterInput implements ICommonFilterInput {
    equal?: number;
    not_equal?: number;
    in?: number[];
    not_in?: number[];
    order?: Order;
}
