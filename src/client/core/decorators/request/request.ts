import { observable, action, set, computed } from "mobx";
import axios, { CancelTokenSource, AxiosRequestConfig } from "axios";

enum RequestMethod {
    GET = "get",
    POST = "post",
    UPDATE = "update",
}

enum RequestState {
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
    static method = RequestMethod;
    static state = RequestState;

    constructor(props: InitProps<D, V>) {
        set(this, props);
    }

    @observable private endpoint: string = "http://localhost:3000/graphql";
    @observable private method: AxiosRequestConfig["method"] = Request.method.POST;
    @observable private cancelTokenSource: CancelTokenSource = axios.CancelToken.source();
    @observable private state: RequestState = Request.state.INIT;

    @observable private headers: AxiosRequestConfig["headers"];
    @observable private query!: string;

    @computed get isLoading(): boolean { return this.state === Request.state.LOADING; }

    @action send: (variables: V) => Promise<D> = async (variables) => {
        this.state = Request.state.LOADING;
        try {
            const response = await axios({
                method: this.method,
                url: this.endpoint,
                headers: this.headers,
                data: {
                    query: this.query,
                    variables: variables
                },
                cancelToken: this.cancelTokenSource.token
            });
            this.state = Request.state.LOADED;
            if (response?.data?.errors) {
                throw response.data.errors;
            }
            return (response?.data?.data?.data ? response.data.data.data : response?.data?.data) ;
        }
        catch(error) {
            if (axios.isCancel(error)) {
                this.state = Request.state.CANCELED;
                throw new Error("Request is canceled")
            }
            else {
                this.state = Request.state.ERROR;
                throw error;
            }
        }
    }
}
