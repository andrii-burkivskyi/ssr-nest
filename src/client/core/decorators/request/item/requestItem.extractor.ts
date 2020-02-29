import "reflect-metadata";
import { DEFAULT_ARRAY } from "../../../../utils/constants";
import { RequestItemBase } from "./RequestItem.base";
import { RIKeys, ConnectedQuery } from "./requestItem.decorator"

export const RequestItemExtractor = (target: RequestItemBase) => {
    return {
        keys: (Reflect.getMetadata(RIKeys.KEYS, target) ?? DEFAULT_ARRAY) as string[],
        query: Reflect.getMetadata(RIKeys.QUERY, target) as ConnectedQuery,
        name: Reflect.getMetadata(RIKeys.NAME, target) as string,
        isPrimary: (propertyKey: string) => Reflect.getMetadata(RIKeys.IS_PRIMARY, target, propertyKey) as boolean,
    }
}