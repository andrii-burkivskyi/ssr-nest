import isPlainObject from 'lodash.isplainobject';

export const isEmpty = (obj?: CommonMap) => {
    return obj ? Object.keys(obj).length === 0 : false;
};

export const isRequiredFieldsNotEmpty = <T extends Object>(obj: T, keys: Array<keyof T>) => {
    return keys.every((key) => obj[key] !== undefined);
};

export const clearUndefinedValues = <T extends Object>(obj: T): T  => {
    if (!isPlainObject(obj)) { return obj; }

    const arrayHandler = <A>(valueArr: A[]): A[] => {
        return valueArr.filter((value) => value !== undefined)
            .map(clearUndefinedValues);
    };

    return Object.entries(obj).reduce((acc, [key, value]) => {
        let newValue = value;

        if (!obj.hasOwnProperty(key) || value === undefined) { return acc; }

        if (isPlainObject(value)) { newValue = clearUndefinedValues(value); }
        if (Array.isArray(value)) { newValue = arrayHandler(value); }

        return { ...acc, [key]: newValue };
    }, {}) as T;
};
