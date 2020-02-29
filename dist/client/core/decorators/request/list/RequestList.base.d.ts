import { IObservableArray } from "mobx";
import { QueryBase } from "../../../../core/decorators/query/query/Query.base";
import { IPaginationInput } from "../../../../../common/pagination/pagination.input";
import { RequestItemBase } from "../item/RequestItem.base";
import { RequestsService } from "../../../services/Requests.service";
interface InitProps<ItemClass extends RequestItemBase<DTO, ID> = any, DTO = any, ID = any, Query extends QueryBase<any> = any, FilterInput = any> {
    query?: RequestListBase<ItemClass, DTO, ID, Query, FilterInput>["query"];
    isLocalUpdated?: RequestListBase<ItemClass, DTO, ID, Query, FilterInput>["isLocalUpdated"];
}
export declare class RequestListBase<ItemClass extends RequestItemBase<DTO, ID> = any, DTO = any, ID = any, Query extends QueryBase<any> = any, FilterInput = any> {
    constructor(props?: InitProps<ItemClass, DTO, ID, Query, FilterInput>);
    private getRequest;
    private ItemConstructor;
    data: IObservableArray<ItemClass>;
    isLocalUpdated: boolean;
    page: number;
    take: number;
    totalItems: number;
    query?: Query;
    requestService: RequestsService;
    finishRequestLoading: () => void;
    isLoading: Promise<unknown>;
    private onDelete;
    private onUpdate;
    get: (filter?: IPaginationInput<FilterInput>) => Promise<void>;
    add: (data: Pick<DTO, Exclude<keyof DTO, keyof ID>>) => Promise<void>;
    addEmpty: () => ItemClass;
}
export {};
