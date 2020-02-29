
import "reflect-metadata";
import { pushPropertyKey } from "../../../../utils/metadata";

export enum QPDKeys {
    QUERY_PROPERTY_KEYS = "front_query:query_property_keys",
    QUERY_PROPERTY_CONFORMER = "front_query:query_property_conformer",
}

export const QueryProperty = <F>(conformer: F ): PropertyDecorator => (target, propertyKey)=> {
    if (conformer) { pushPropertyKey(QPDKeys.QUERY_PROPERTY_KEYS, target, propertyKey); }
    Reflect.defineMetadata(QPDKeys.QUERY_PROPERTY_CONFORMER, conformer, target, propertyKey);
}
