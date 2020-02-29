
import "reflect-metadata";
import { RLIKeys, ConnectedQuery } from "./requestList.decorator"
import { RequestListBase } from "./RequestList.base";

export const RequestListExtractor = (target: RequestListBase) => {
    return {
        name: Reflect.getMetadata(RLIKeys.NAME, target) as string,
        query: Reflect.getMetadata(RLIKeys.QUERY, target) as ConnectedQuery,
        ItemConstructor: Reflect.getMetadata(RLIKeys.ITEM_CONSTRUCTOR, target) as any,
    }
}