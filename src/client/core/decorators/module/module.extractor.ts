import 'reflect-metadata';

import { MDKeys } from './module.decorator';
import { ModuleBase } from './Module.base';
import { ModulesListBase } from './ModulesList.base';

import { DEFAULT_ARRAY } from '../../../utils/constants';
import { GuardBase } from "../guard/Guard.base";

export type AsyncModuleItem = ModulesListBase | AsyncLazyConstructor<ModuleBase>;
export type AsyncLazyConstructor<T = Record<string, any>> = () => Promise<Constructable<T>>;
export type SyncLazyConstructor<T = Record<string, any>> = () => Constructable<T>;

export const ModuleExtractor = (target: Record<string, any>) => ({
  Name: Reflect.getMetadata(MDKeys.NAME, target) as string,
  View: Reflect.getMetadata(MDKeys.VIEW, target) as AsyncLazyConstructor<React.Component<ViewOf<Record<string, any>>>>,
  Model: Reflect.getMetadata(MDKeys.MODEL, target) as AsyncLazyConstructor,
  Guard: Reflect.getMetadata(MDKeys.GUARD, target) ?? GuardBase as Constructable<GuardBase>,
  modules: (Reflect.getMetadata(MDKeys.MODULES, target) ?? DEFAULT_ARRAY) as AsyncModuleItem[],
  services: (Reflect.getMetadata(MDKeys.SERVICES, target) ?? DEFAULT_ARRAY) as AsyncLazyConstructor[],
});

export const ClassExtractor = (target: Constructable<Record<string, any>>) => ({
  paramtypes: Reflect.getMetadata('design:paramtypes', target) as Array<Constructable<Record<string, any>>> ?? DEFAULT_ARRAY,
});
