import "reflect-metadata";
import { RequestItemBase } from "./RequestItem.base";
import { ConnectedQuery } from "./requestItem.decorator";
export declare const RequestItemExtractor: (target: RequestItemBase<any, any>) => {
    keys: string[];
    query: ConnectedQuery;
    name: string;
    isPrimary: (propertyKey: string) => boolean;
};
