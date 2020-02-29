import "reflect-metadata";
import { ConnectedQuery } from "./requestList.decorator";
import { RequestListBase } from "./RequestList.base";
export declare const RequestListExtractor: (target: RequestListBase<any, any, any, any, any>) => {
    name: string;
    query: ConnectedQuery;
    ItemConstructor: any;
};
