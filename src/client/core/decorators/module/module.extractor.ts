import 'reflect-metadata';

import { MDKeys } from './module.decorator';
import { ModuleBase } from './Module.base';
import { ModulesListBase } from './ModulesList.base';

import { DEFAULT_ARRAY } from '../../../utils/constants';

export type AsyncModuleItem = ModulesListBase | AsyncLazyConstructor<ModuleBase>;
export type SyncModuleItem = ModulesListBase | SyncLazyConstructor<ModuleBase>;
export type AsyncLazyConstructor<T = Object> = () => Promise<Constructable<T>>;
export type SyncLazyConstructor<T = Object> = () => Constructable<T>;

export const AsyncModuleExtractor = (target: Object) => {
    return {
        View: Reflect.getMetadata(MDKeys.VIEW, target) as AsyncLazyConstructor,
        Model: Reflect.getMetadata(MDKeys.MODEL, target) as AsyncLazyConstructor,
        Guard: Reflect.getMetadata(MDKeys.GUARD, target) ?? null as Nullable<AsyncLazyConstructor>,
        modules: (Reflect.getMetadata(MDKeys.MODULES, target) ?? DEFAULT_ARRAY) as AsyncModuleItem[],
        services: (Reflect.getMetadata(MDKeys.SERVICES, target) ?? DEFAULT_ARRAY) as AsyncLazyConstructor[],
    };
};

export const SyncModuleExtractor = (target: Object) => {
    return {
        View: Reflect.getMetadata(MDKeys.VIEW, target) as SyncLazyConstructor,
        Model: Reflect.getMetadata(MDKeys.MODEL, target) as SyncLazyConstructor,
        Guard: Reflect.getMetadata(MDKeys.GUARD, target) ?? null as Nullable<SyncLazyConstructor>,
        modules: (Reflect.getMetadata(MDKeys.MODULES, target) ?? DEFAULT_ARRAY) as SyncModuleItem[],
        services: (Reflect.getMetadata(MDKeys.SERVICES, target) ?? DEFAULT_ARRAY) as SyncLazyConstructor[],
    };
};

export const ClassExtractor = (target: Constructable<Object>) => {
    return {
        paramtypes: Reflect.getMetadata('design:paramtypes', target) as Array<Constructable<Object>> ?? DEFAULT_ARRAY,
    };
};
