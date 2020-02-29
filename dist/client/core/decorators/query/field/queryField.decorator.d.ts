import "reflect-metadata";
export declare enum QPDKeys {
    QUERY_PROPERTY_KEYS = "front_query:query_property_keys",
    QUERY_PROPERTY_CONFORMER = "front_query:query_property_conformer"
}
export declare const QueryProperty: <F>(conformer: F) => PropertyDecorator;
