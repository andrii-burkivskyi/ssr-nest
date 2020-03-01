export interface ConnectedQuery {
    getList: string;
}

export enum RLIKeys {
    NAME = 'front_rli_keys:name',
    QUERY = 'front_rli_keys:query',
    ITEM_CONSTRUCTOR = 'front_rli_keys:item_constructor',
}

export const GqlListConnect = (
  name: string,
  gql: { getList: string },
  ItemConstructor: Constructable<Record<string, any>>,
): ClassDecorator => (target) => {
  Reflect.defineMetadata(RLIKeys.NAME, name, target.prototype);
  Reflect.defineMetadata(RLIKeys.QUERY, gql, target.prototype);
  Reflect.defineMetadata(RLIKeys.ITEM_CONSTRUCTOR, ItemConstructor, target.prototype);
};
