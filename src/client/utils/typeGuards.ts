
export const isSyntheticEvent = <T extends CommonMap, H = HTMLElement>(event: React.MouseEvent<H> | T): event is React.MouseEvent<H> =>
    typeof event !== 'string' &&
    Boolean(event) &&
    Boolean(event.nativeEvent) &&
    event.nativeEvent instanceof Event;

export const isCallable = (value: any): value is Function => {
    return value instanceof Function;
};

export const isConstructable = (value: any): value is Constructable<Object> => {
    return value instanceof Function &&
        value?.prototype?.constructor === value;
};

export const isString = (translation?: string | any): translation is string => typeof translation === 'string';
export const isNill = <T>(value?: Nullable<T>): value is undefined | null => value === undefined || value === null;
