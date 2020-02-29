import 'reflect-metadata';
import { ModuleBase } from './Module.base';
import { ModulesListBase } from './ModulesList.base';
export declare type AsyncModuleItem = ModulesListBase | AsyncLazyConstructor<ModuleBase>;
export declare type SyncModuleItem = ModulesListBase | SyncLazyConstructor<ModuleBase>;
export declare type AsyncLazyConstructor<T = Object> = () => Promise<Constructable<T>>;
export declare type SyncLazyConstructor<T = Object> = () => Constructable<T>;
export declare const AsyncModuleExtractor: (target: Object) => {
    View: AsyncLazyConstructor<Object>;
    Model: AsyncLazyConstructor<Object>;
    Guard: any;
    modules: AsyncModuleItem[];
    services: AsyncLazyConstructor<Object>[];
};
export declare const SyncModuleExtractor: (target: Object) => {
    View: SyncLazyConstructor<Object>;
    Model: SyncLazyConstructor<Object>;
    Guard: any;
    modules: SyncModuleItem[];
    services: SyncLazyConstructor<Object>[];
};
export declare const ClassExtractor: (target: Constructable<Object>) => {
    paramtypes: Constructable<Object>[];
};
