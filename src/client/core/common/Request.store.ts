import {
  observable, action, set, computed, IComputedValue,
} from 'mobx';
import axios, { CancelTokenSource, AxiosRequestConfig } from 'axios';
import * as pathToRegexp from 'path-to-regexp';
import * as qs from 'query-string';
import { DEFAULT_STRING, DEFAULT_OBJECT, DEFAULT_FUNCTION } from '../../utils/constants';

enum RequestMethod {
    GET = 'get',
    POST = 'post',
    UPDATE = 'update',
}

enum RequestState {
    INIT = 'init',
    LOADING = 'loading',
    LOADED = 'loaded',
    CANCELED = 'canceled',
    ERROR = 'error'
}

interface GetProps<D> {
    method: RequestMethod.GET;
    endpoint: RequestStore<D>['endpoint'];
    router: RequestStore<D>['router'];
    timeout?: RequestStore<D>['timeout'];
    headers?: any;
    shouldRefresh?: () => string;
    query?: RequestStore<D>['query'];
    params?: RequestStore<D>['params'];
}

interface OtherProps<D> {
    method: RequestMethod.POST | RequestMethod.UPDATE;
    endpoint: RequestStore<D>['endpoint'];
    router: RequestStore<D>['router'];
    timeout?: RequestStore<D>['timeout'];
    headers?: any;
    shouldRefresh?: () => string;
    query?: RequestStore<D>['query'];
    params?: RequestStore<D>['params'];
    body?: RequestStore<D>['body'];
}


export default class RequestStore<D> {
    static method = RequestMethod;

    static state = RequestState;

    constructor(props: GetProps<D> | OtherProps<D>) {
      const { shouldRefresh = () => DEFAULT_STRING, router, endpoint } = props;
      set(this, props);
      this.endpoint = endpoint;
      this.router = router;
      this.shouldRefresh = computed(shouldRefresh);
    }

    private shouldRefresh: IComputedValue<string>;

    @observable private endpoint: string;

    @observable private method: AxiosRequestConfig['method'] = RequestStore.method.GET;

    @observable private router: string;

    @observable private timeout = 60000;

    @observable private cancelTokenSource: CancelTokenSource = axios.CancelToken.source();

    @observable private state: RequestState = RequestStore.state.INIT;

    @observable private headers: AxiosRequestConfig['headers'];

    @observable private query: () => CommonMap = () => DEFAULT_OBJECT;

    @observable private params: () => CommonMap = () => DEFAULT_OBJECT;

    @observable private body: () => AxiosRequestConfig['data'] = DEFAULT_FUNCTION;

    @observable.shallow data?: D;

    @computed private get url(): string {
      const [baseUrl = ''] = this.endpoint.match(/^.+?[^\/:](?=[?\/]|$)/) || [];
      const location = this.endpoint.replace(baseUrl, '');
      const locationWithParams = pathToRegexp.compile(location)(this.params());
      const queryString = qs.stringify(this.query());

      return `${baseUrl}${locationWithParams}${queryString ? '?' : ''}${queryString}`;
    }

    @computed get isLoading(): boolean { return this.state === RequestStore.state.LOADING; }

    @action send = async () => {
      this.state = RequestStore.state.LOADING;
      try {
        const response = await axios({
          method: this.method,
          url: this.url,
          headers: this.headers,
          data: this.body(),
          cancelToken: this.cancelTokenSource.token,
        });
        this.data = 'data' in response.data ? response.data.data : response.data;
        this.state = RequestStore.state.LOADED;
      } catch (error) {
        if (axios.isCancel(error)) {
          this.state = RequestStore.state.CANCELED;
        } else {
          this.state = RequestStore.state.ERROR;
        }
      }
    }

    @action watch = () => {
      this.send();
      this.shouldRefresh.observe(() => this.send());
    }

    @action start = () => {
      const recursion = async () => {
        await this.send();
        setTimeout(recursion, this.timeout);
      };

      recursion();
    }
}
