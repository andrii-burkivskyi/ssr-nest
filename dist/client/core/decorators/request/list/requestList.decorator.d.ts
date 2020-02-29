export interface ConnectedQuery {
    getList: string;
}
export declare enum RLIKeys {
    NAME = "front_rli_keys:name",
    QUERY = "front_rli_keys:query",
    ITEM_CONSTRUCTOR = "front_rli_keys:item_constructor"
}
export declare const GqlListConnect: (name: string, gql: {
    getList: string;
}, ItemConstructor: Constructable<Object>) => ClassDecorator;
