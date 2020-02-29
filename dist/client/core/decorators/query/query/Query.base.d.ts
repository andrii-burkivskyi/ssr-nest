interface InitProps<T> {
    alias?: QueryBase<T>["alias"];
    prefix?: QueryBase<T>["prefix"];
    parent?: QueryBase<T>["parent"];
    beforeGetPagination?: QueryBase<T>["beforeGetPagination"];
}
export declare class QueryBase<T> {
    constructor(props?: InitProps<T>);
    private keys;
    private prefix;
    private parent;
    private privatePage?;
    private privateTake?;
    private alias;
    private subscribers;
    private location;
    private otherQuery;
    private beforeGetPagination;
    private prevPagination;
    page: (page: any) => void;
    take: (take: any) => void;
    subscribe: (action: (filter: CommonMap) => void) => void;
    push: () => void;
    clear: () => void;
    private onInitOrUpdate;
    private updateFilterFromLocation;
    private getPaginationFilter;
    getPagination: () => {
        filter: any;
        page: number | undefined;
        take: number | undefined;
    };
    private get pageKey();
    private get takeKey();
}
export {};
