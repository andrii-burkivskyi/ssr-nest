import "reflect-metadata";
import { QPDKeys } from "./queryField.decorator";

import { DEFAULT_ARRAY } from "../../../../utils/constants";

export const QueryFieldExtractor = (target: Object) => {
    return {
        keys: (Reflect.getMetadata(QPDKeys.QUERY_PROPERTY_KEYS, target) ?? DEFAULT_ARRAY) as string[],
        conformer: (propertyKey: string) =>  Reflect.getMetadata(QPDKeys.QUERY_PROPERTY_CONFORMER, target, propertyKey) as (value: any) => any,
    }
}
