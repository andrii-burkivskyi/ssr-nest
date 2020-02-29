import { pathToRegexp, TokensToRegexpOptions, Key, compile } from 'path-to-regexp';
import { DEFAULT_OBJECT } from './constants';

const getPatternInfo = (pattern: string, options?: TokensToRegexpOptions) => {
    const keys: Key[] = [];
    const regExp = pathToRegexp(pattern, keys, options);
    return { regExp, keys };
};

/**
 * Matches a URL to a pattern.
 * For example,
 * matchUrl('/departments/electronics', '/departments/:id') => { id: 'electronics' }
 */
export const matchUrl = (url: string, pattern: string, options?: TokensToRegexpOptions) => {
    const { regExp, keys } = getPatternInfo(pattern, options);
    const match = regExp.exec(url);
    if (!match) {
        return undefined;
    }

    const [matchedUrl, ...values] = match;

    return keys.reduce((params: CommonMap, key, index) => {
        params[key.name] = values[index];
        return params;
    }, {});
};

export const buildUrl = (pattern: string, params: CommonMap = DEFAULT_OBJECT) => {
    return compile(pattern, { encode: encodeURIComponent })(params);
};
