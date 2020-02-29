import { IdFilterInput } from "../../../../common/filter";
import { QueryFieldBase } from "./field/QueryField.base";
export declare const isIDQueryField: (constructor: any) => constructor is IDQueryField;
export declare class IDQueryField extends QueryFieldBase<IdFilterInput> {
    equal: (value?: number) => IDQueryField;
    not_equal: (value?: number) => IDQueryField;
    in: (value?: number[]) => IDQueryField;
    not_in: (value?: number[]) => IDQueryField;
}
