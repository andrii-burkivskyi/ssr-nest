
import { observable, action } from 'mobx';
import { createTransformer } from 'mobx-utils';
import { createBrowserHistory, createMemoryHistory } from 'history';
import { TokensToRegexpOptions } from 'path-to-regexp';

import { Service } from '../../core/decorators/service/service.decorator';
import { matchUrl, buildUrl } from '../../utils/url';
import { DEFAULT_OBJECT } from '../../utils/constants';

@Service('LocationService', { isGlobal: true })
export class LocationService {
  constructor() {
    this.history.listen(this.historyListener);
  }

    private history = global
      ? createMemoryHistory()
      : createBrowserHistory();

    @observable pathname: string = this.history.location.pathname;

    @observable search: string = this.history.location.search;

    @observable hash: string = this.history.location.hash;

    @observable state: any = this.history.location.state;

    @action private historyListener = (location) => {
      this.pathname = location.pathname;
      this.search = location.search;
      this.hash = location.hash;
      this.state = location.state;
    }

    isValidRoute = createTransformer((props: { route: string; options?: TokensToRegexpOptions}) => Boolean(matchUrl(this.pathname, props.route, props.options)));

    routePrams = createTransformer<string, CommonMap>((route: string) => matchUrl(this.pathname, route, { end: false }) ?? DEFAULT_OBJECT);

    @action push = (to: string, state?: any) => {
      this.history.push(to, state);
    }

    @action pushWithParams = (to: string, params: CommonMap = DEFAULT_OBJECT, state?: any) => {
      const path = buildUrl(to, params);
      this.history.push(path, state);
    }

    @action pushQuery = (query: string) => {
      this.history.push(`${this.pathname}?${query}`);
    }
}
