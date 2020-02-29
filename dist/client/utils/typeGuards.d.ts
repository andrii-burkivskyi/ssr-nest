/// <reference types="react" />
/// <reference types="@emotion/core" />
export declare const isSyntheticEvent: <T extends CommonMap, H = HTMLElement>(event: T | import("react").MouseEvent<H, MouseEvent>) => event is import("react").MouseEvent<H, MouseEvent>;
export declare const isCallable: (value: any) => value is Function;
export declare const isConstructable: (value: any) => value is Constructable<Object>;
export declare const isString: (translation?: any) => translation is string;
export declare const isNill: <T>(value?: T | null | undefined) => value is null | undefined;
