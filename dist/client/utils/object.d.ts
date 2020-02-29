export declare const isEmpty: (obj?: CommonMap | undefined) => boolean;
export declare const isRequiredFieldsNotEmpty: <T extends Object>(obj: T, keys: (keyof T)[]) => boolean;
export declare const clearUndefinedValues: <T extends Object>(obj: T) => T;
