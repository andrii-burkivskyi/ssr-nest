import { observable, action } from 'mobx';
import { createTransformer } from 'mobx-utils';
import { createBrowserHistory, createMemoryHistory } from 'history';
import { TokensToRegexpOptions } from 'path-to-regexp';

import { Service } from '../../core/decorators/service/service.decorator';
import { matchUrl, buildUrl } from '../../utils/url';
import { DEFAULT_OBJECT } from '../../utils/constants';

interface DataItem {
  name?: string;
  data?: any;
}

interface Done {
  (props?: DataItem)
}

@Service('SSRService', { isGlobal: true })
export class SSRService {
  requests: Array<Promise<any>> = [];
  modules: Array<Promise<void>> = [];
  data: Array<DataItem> = [];

  startModule = () => {
    let done = () => {};
    const promise = new Promise<void>((resolve) => {
      done = () => { resolve(); };
    });
    this.modules.push(promise);
    return done;
  }

  startRequest = () => {
    let done: Done = () => {};
    const promise = new Promise<void>((resolve) => {
      done = (props) => {
        props && this.data.push(props);

        resolve();
      };
    });
    this.requests.push(promise);
    return done;
  }

  clear = () => {
    this.requests = [];
    this.modules = [];
    this.data = [];
  }
}
