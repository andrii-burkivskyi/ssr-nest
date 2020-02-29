import { TokensToRegexpOptions } from 'path-to-regexp';
export declare const matchUrl: (url: string, pattern: string, options?: TokensToRegexpOptions | undefined) => CommonMap | undefined;
export declare const buildUrl: (pattern: string, params?: CommonMap) => string;
