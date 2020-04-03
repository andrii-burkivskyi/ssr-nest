declare type KeyWithValue<T, U> = {
    [P in keyof T]-?: U;
};

declare type Nullable<T> = T | null;

declare type Constructable<T = any> = { new(...args: any[]): T };

interface CommonMapWithId {
    id: string | number;
    [key: string]: any;
}

interface CommonMap {
    [key: string]: any;
}

interface ViewOf<T> {
    className?: string;
    classes?: any;
    style?: React.CSSProperties;
    model: T;
}
interface ModuleOf<T> {
    module: T;
}

interface InputOf<T> {
    input: T;
}

interface IModuleGuard {
    isActive: boolean;
}

type Subtraction<T, K> = Pick<T, Exclude<keyof T, keyof K>>;

type RequireOne<T, K extends keyof T> = {
    [X in Exclude<keyof T, K>]?: T[X]
} & {
    [P in K]-?: T[P]
}

type PartialExceptOne<T, K extends keyof T> = RequireOne<Partial<T>, K>;

type AtLeastOne<T, U = { [K in keyof T]: Pick<T, K> }> = Partial<T> & U[keyof U];

interface SVGProps {
    className: string;
}

declare module '*.scss' {
    const content: {[className: string]: string};
    export = content;
}

declare module '*.svg' {
    const content: string;
    export default content;
}

declare module '*.gql' {
    const content: string;
    export default content;
}

declare module '*.json' {
    const value: any;
    export default value;
}
