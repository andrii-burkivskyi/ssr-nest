"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DEFAULT_OBJECT = {};
exports.DEFAULT_ARRAY = [];
exports.DEFAULT_STRING = '';
exports.NULL_CHAR = '\0';
exports.SORT_CHANGE_VALUES = 1;
exports.SORT_DO_NOT_CHANGE_VALUES = -1;
exports.DEFAULT_FUNCTION = () => { };
exports.DEFAULT_ASYNC_FUNCTION = () => new Promise((resolve) => resolve(null));
exports.IS_NODE = () => new Function('try {return this===global;}catch(e){ return false;}')();
//# sourceMappingURL=constants.js.map