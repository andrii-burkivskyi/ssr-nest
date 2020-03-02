import 'reflect-metadata';
import { DEFAULT_ARRAY } from '../../../utils/constants';
import { AsyncModuleItem, AsyncLazyConstructor } from './module.extractor';

interface IModuleDecoratorProps {
  name: string;
  view: () => Promise<any>;
  model: () => Promise<any>;
  guard?: Constructable<Record<string, any>>;
  imports?: AsyncModuleItem[];
  services?: AsyncLazyConstructor[];
  modules?: AsyncModuleItem[];
}

export enum MDKeys {
  NAME = 'module_decorator:name',
  VIEW = 'module_decorator:view',
  MODEL = 'module_decorator:model',
  GUARD = 'module_decorator:guard',
  IMPORTS = 'module_decorator:imports',
  SERVICES = 'module_decorator:services',
  MODULES = 'module_decorator:modules',
}

export const Module = (props: IModuleDecoratorProps): ClassDecorator => (target) => {
  Reflect.defineMetadata(MDKeys.NAME, props.name, target.prototype);
  Reflect.defineMetadata(MDKeys.VIEW, props.view, target.prototype);
  Reflect.defineMetadata(MDKeys.MODEL, props.model, target.prototype);
  Reflect.defineMetadata(MDKeys.GUARD, props.guard, target.prototype);
  Reflect.defineMetadata(MDKeys.IMPORTS, props.imports ?? DEFAULT_ARRAY, target.prototype);
  Reflect.defineMetadata(MDKeys.SERVICES, props.services ?? DEFAULT_ARRAY, target.prototype);
  Reflect.defineMetadata(MDKeys.MODULES, props.modules ?? DEFAULT_ARRAY, target.prototype);
};
