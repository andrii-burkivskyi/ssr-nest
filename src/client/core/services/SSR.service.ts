import { observable, action } from 'mobx';
import { createTransformer } from 'mobx-utils';
import { createBrowserHistory, createMemoryHistory } from 'history';
import { TokensToRegexpOptions } from 'path-to-regexp';

import { Service } from '../../core/decorators/service/service.decorator';
import { matchUrl, buildUrl } from '../../utils/url';
import { DEFAULT_OBJECT, IS_NODE } from '../../utils/constants';

interface DataItem {
  name?: string;
  data?: any;
}

interface Done {
  (props?: DataItem)
}

@Service('SSRService', { isGlobal: true })
export class SSRService {
  constructor() {
    if (!IS_NODE()) {
      this.data = window['__mobx_ssr_data'];
    }
  }
  isInitLoadEnd = false; 
  requests: Array<Promise<any>> = [];
  modules: Array<Promise<void>> = [];
  data: CommonMap = {};

  startModule = () => {
    let done = () => {};
    if (!this.isInitLoadEnd) {
      const promise = new Promise<void>((resolve) => {
        done = () => { resolve(); };
      });
      this.modules.push(promise);
    }
    return done;
  }

  startRequest = () => {
    let done: Done = () => {};
    if (!this.isInitLoadEnd) {
      const promise = new Promise<void>((resolve) => {
        done = (props) => {
          if (props?.name && props?.data) {
            this.data = {
              ...this.data,
              [props.name]: props.data
            }

          }
          resolve();
        };
      });
      this.requests.push(promise);
    }
    return done;
  }

  clear = () => {
    this.requests = [];
    this.modules = [];
    this.data = new Map();
    this.isInitLoadEnd;
  }
}
