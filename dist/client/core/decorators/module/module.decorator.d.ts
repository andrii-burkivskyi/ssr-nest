import 'reflect-metadata';
import { AsyncModuleItem, AsyncLazyConstructor } from './module.extractor';
interface IModuleDecoratorProps {
    view: () => Promise<any>;
    model: () => Promise<any>;
    guard?: Constructable<Object>;
    imports?: AsyncModuleItem[];
    services?: AsyncLazyConstructor[];
    modules?: AsyncModuleItem[];
}
export declare enum MDKeys {
    VIEW = "module_decorator:view",
    MODEL = "module_decorator:model",
    GUARD = "module_decorator:guard",
    IMPORTS = "module_decorator:imports",
    SERVICES = "module_decorator:services",
    MODULES = "module_decorator:modules"
}
export declare const Module: (props: IModuleDecoratorProps) => ClassDecorator;
export {};
