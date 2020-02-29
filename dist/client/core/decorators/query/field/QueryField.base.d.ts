export declare class QueryFieldBase<F> {
    constructor();
    keys: string[];
    private shouldUpdate;
    private filter;
    private newFilter;
    setFilter: (filter: F) => void;
    clear: () => void;
    update: () => boolean;
    get: () => F;
}
