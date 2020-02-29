import { StringFilterInput } from "../../../../common/filter";
import { QueryFieldBase } from "./field/QueryField.base";
export declare const isStringQueryField: (constructor: any) => constructor is StringQueryField;
export declare class StringQueryField extends QueryFieldBase<StringFilterInput> {
    equal: (value?: string) => StringQueryField;
    not_equal: (value?: string) => StringQueryField;
    in: (value?: string[]) => StringQueryField;
    not_in: (value?: string[]) => StringQueryField;
    contains: (value?: string) => StringQueryField;
    not_contains: (value?: string) => StringQueryField;
}
