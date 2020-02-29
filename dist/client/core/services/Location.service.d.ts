import { TokensToRegexpOptions } from 'path-to-regexp';
export declare class LocationService {
    constructor();
    private history;
    pathname: string;
    search: string;
    hash: string;
    state: any;
    private historyListener;
    isValidRoute: import("mobx-utils").ITransformer<{
        route: string;
        options?: TokensToRegexpOptions | undefined;
    }, boolean>;
    routePrams: import("mobx-utils").ITransformer<string, CommonMap>;
    push: (to: string, state?: any) => void;
    pushWithParams: (to: string, params?: CommonMap, state?: any) => void;
    pushQuery: (query: string) => void;
}
