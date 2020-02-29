"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_snakecase_1 = require("lodash.snakecase");
const addClass = (className) => className ? ` ${className}` : "";
const bem = (elementClassName, options, addedClassName = "") => Object.entries(options).reduce((acc, [key, value]) => {
    const modifier = typeof value !== 'boolean'
        ? `${lodash_snakecase_1.default(key)}-${value}`
        : lodash_snakecase_1.default(key);
    return value
        ? `${acc} ${elementClassName}--${modifier}`
        : acc;
}, elementClassName) + addClass(addedClassName);
exports.default = bem;
//# sourceMappingURL=bem.js.map