import { observable, action } from 'mobx';
import { createTransformer } from 'mobx-utils';
import { createBrowserHistory, createMemoryHistory } from 'history';
import { TokensToRegexpOptions } from 'path-to-regexp';

import { Service } from '../../core/decorators/service/service.decorator';
import { matchUrl, buildUrl } from '../../utils/url';
import { DEFAULT_OBJECT, IS_NODE } from '../../utils/constants';
import { AsyncTracker } from "../common/AsyncTracker.store";

interface DataItem {
  name?: string;
  data?: any;
}

@Service('SSRService', { isGlobal: true })
export class SSRService {
  isInitLoadEnd = false; 

  requests = new AsyncTracker({
    storage: '__mobx_ssr_data',
  });

  modules = new AsyncTracker()

  init = () => {
    this.isInitLoadEnd = false;
    this.requests.init();
    this.modules.init();
  }

  clear = () => {
    this.isInitLoadEnd = true;
    this.requests.clear();
    this.modules.clear();
  }
}
