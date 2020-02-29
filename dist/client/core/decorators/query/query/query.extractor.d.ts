import "reflect-metadata";
import { QueryBase } from "./Query.base";
import { QueryFieldBase } from "../field/QueryField.base";
export declare const QueryExtractor: (target: Object) => {
    keys: string[];
    isNested: (propertyKey: string) => boolean;
    Constructor: (propertyKey: string) => Constructable<QueryFieldBase<Object>> | Constructable<QueryBase<Object>>;
};
