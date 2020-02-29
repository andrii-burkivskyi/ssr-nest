
import "reflect-metadata";
import { QFDKeys } from "./query.decorator";
import { QueryBase } from "./Query.base";
import { QueryFieldBase } from "../field/QueryField.base";
import { DEFAULT_ARRAY } from "../../../../utils/constants";

export const QueryExtractor = (target: Object) => {
    return {
        keys: (Reflect.getMetadata(QFDKeys.QUERY_FIELD_KEYS, target) ?? DEFAULT_ARRAY) as string[],
        isNested: (propertyKey: string) =>
            Reflect.getMetadata(QFDKeys.QUERY_FIELD_IS_NESTED, target, propertyKey) as boolean,
        Constructor: (propertyKey: string) => Reflect.getMetadata(
            QFDKeys.QUERY_FIELD_CONSTRUCTOR,
            target,
            propertyKey
        ) as Constructable<QueryFieldBase<Object>> | Constructable<QueryBase<Object>>
    }
}
