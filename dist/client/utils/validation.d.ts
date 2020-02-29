import { ObservableString } from "./types";
export declare const isRequired: (value: string) => boolean;
export declare const isEmail: (value: string) => boolean;
export declare const isPhone: (value: string) => boolean;
export declare type ValidationType = [(value: any) => boolean, ObservableString, () => CommonMap] | [(value: any) => boolean, ObservableString];
interface Validate {
    (value: any, arr: Array<ValidationType>): [ObservableString, CommonMap];
}
export declare const validate: Validate;
export {};
