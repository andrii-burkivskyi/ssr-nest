import 'reflect-metadata';
interface IServiceOptions {
    isGlobal: boolean;
}
export declare enum SKeys {
    NAME = "service_decorator:name",
    IS_GLOBAL = "service_decorator:is_global"
}
export declare const Service: (name: string, options?: IServiceOptions) => ClassDecorator;
export {};
