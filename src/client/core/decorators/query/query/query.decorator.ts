
import "reflect-metadata";
import { pushPropertyKey } from "../../../../utils/metadata";

export enum QFDKeys {
    QUERY_FIELD_KEYS = "front_query:query_field_keys",
    QUERY_FIELD_IS_NESTED = "front_query:query_field_is_nested",
    QUERY_FIELD_CONSTRUCTOR = "front_query:query_field_constructor",
}

export const QueryField = <T>(FieldConstructor: Constructable<T>): PropertyDecorator => (target, propertyKey) => {
    pushPropertyKey(QFDKeys.QUERY_FIELD_KEYS, target, propertyKey);
    Reflect.defineMetadata(QFDKeys.QUERY_FIELD_IS_NESTED, false, target, propertyKey);
    Reflect.defineMetadata(QFDKeys.QUERY_FIELD_CONSTRUCTOR, FieldConstructor, target, propertyKey);
}

export const QueryNestedField = <T>(NestedFieldConstructor: Constructable<T>): PropertyDecorator => (target, propertyKey) => {
    pushPropertyKey(QFDKeys.QUERY_FIELD_KEYS, target, propertyKey);
    Reflect.defineMetadata(QFDKeys.QUERY_FIELD_IS_NESTED, true, target, propertyKey);
    Reflect.defineMetadata(QFDKeys.QUERY_FIELD_CONSTRUCTOR, NestedFieldConstructor, target, propertyKey);
}
