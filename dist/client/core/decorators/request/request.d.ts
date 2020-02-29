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
interface InitProps<D, V> {
    headers?: Request<D, V>["headers"];
    query: Request<D, V>["query"];
}
export default class Request<D, V> {
    static method: typeof RequestMethod;
    static state: typeof RequestState;
    constructor(props: InitProps<D, V>);
    private endpoint;
    private method;
    private cancelTokenSource;
    private state;
    private headers;
    private query;
    get isLoading(): boolean;
    send: (variables: V) => Promise<D>;
}
export {};
