import "reflect-metadata";
export declare enum QFDKeys {
    QUERY_FIELD_KEYS = "front_query:query_field_keys",
    QUERY_FIELD_IS_NESTED = "front_query:query_field_is_nested",
    QUERY_FIELD_CONSTRUCTOR = "front_query:query_field_constructor"
}
export declare const QueryField: <T>(FieldConstructor: Constructable<T>) => PropertyDecorator;
export declare const QueryNestedField: <T>(NestedFieldConstructor: Constructable<T>) => PropertyDecorator;
