import { observable, action } from 'mobx';
import { createTransformer } from 'mobx-utils';
import { createBrowserHistory, createMemoryHistory } from 'history';
import { TokensToRegexpOptions } from 'path-to-regexp';

import { Service } from '../../core/decorators/service/service.decorator';
import { matchUrl, buildUrl } from '../../utils/url';
import { DEFAULT_OBJECT } from '../../utils/constants';

@Service('RequestsService', { isGlobal: true })
export class RequestsService {
    requests: Array<Promise<any>> = [];

    registerRequest = (request: Promise<any>) => {
        this.requests.push(request);
    }

    initRequestWait = Promise.all(this.requests);
}
