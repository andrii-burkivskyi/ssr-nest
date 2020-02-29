declare enum RequestMethod {
    GET = "get",
    POST = "post",
    UPDATE = "update"
}
declare enum RequestState {
    INIT = "init",
    LOADING = "loading",
    LOADED = "loaded",
    CANCELED = "canceled",
    ERROR = "error"
}
interface GetProps<D> {
    method: RequestMethod.GET;
    endpoint: RequestStore<D>["endpoint"];
    router: RequestStore<D>["router"];
    timeout?: RequestStore<D>["timeout"];
    headers?: any;
    shouldRefresh?: () => string;
    query?: RequestStore<D>["query"];
    params?: RequestStore<D>["params"];
}
interface OtherProps<D> {
    method: RequestMethod.POST | RequestMethod.UPDATE;
    endpoint: RequestStore<D>["endpoint"];
    router: RequestStore<D>["router"];
    timeout?: RequestStore<D>["timeout"];
    headers?: any;
    shouldRefresh?: () => string;
    query?: RequestStore<D>["query"];
    params?: RequestStore<D>["params"];
    body?: RequestStore<D>["body"];
}
export default class RequestStore<D> {
    static method: typeof RequestMethod;
    static state: typeof RequestState;
    constructor(props: GetProps<D> | OtherProps<D>);
    private shouldRefresh;
    private endpoint;
    private method;
    private router;
    private timeout;
    private cancelTokenSource;
    private state;
    private headers;
    private query;
    private params;
    private body;
    data?: D;
    private get url();
    get isLoading(): boolean;
    send: () => Promise<void>;
    watch: () => void;
    start: () => void;
}
export {};
