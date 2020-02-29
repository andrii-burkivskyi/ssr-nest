"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path_to_regexp_1 = require("path-to-regexp");
const constants_1 = require("./constants");
const getPatternInfo = (pattern, options) => {
    const keys = [];
    const regExp = path_to_regexp_1.pathToRegexp(pattern, keys, options);
    return { regExp, keys };
};
exports.matchUrl = (url, pattern, options) => {
    const { regExp, keys } = getPatternInfo(pattern, options);
    const match = regExp.exec(url);
    if (!match) {
        return undefined;
    }
    const [matchedUrl, ...values] = match;
    return keys.reduce((params, key, index) => {
        params[key.name] = values[index];
        return params;
    }, {});
};
exports.buildUrl = (pattern, params = constants_1.DEFAULT_OBJECT) => {
    return path_to_regexp_1.compile(pattern, { encode: encodeURIComponent })(params);
};
//# sourceMappingURL=url.js.map