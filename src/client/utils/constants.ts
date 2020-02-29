export const DEFAULT_OBJECT = {};
export const DEFAULT_ARRAY = [];
export const DEFAULT_STRING = '';
export const NULL_CHAR = '\0';
export const SORT_CHANGE_VALUES = 1;
export const SORT_DO_NOT_CHANGE_VALUES = -1;
export const DEFAULT_FUNCTION = () => {};
export const DEFAULT_ASYNC_FUNCTION: <T= null>() => Promise<Nullable<T>> = () => new Promise((resolve) => resolve(null));

export const IS_NODE: () => boolean = () => new Function('try {return this===global;}catch(e){ return false;}')();
