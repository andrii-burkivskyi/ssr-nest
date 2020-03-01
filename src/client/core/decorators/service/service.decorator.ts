
import 'reflect-metadata';

interface IServiceOptions {
    isGlobal: boolean;
}

const defaultServiceOptions: IServiceOptions = {
  isGlobal: false,
};

export enum SKeys {
    NAME = 'service_decorator:name',
    IS_GLOBAL = 'service_decorator:is_global',
}

export const Service = (name: string, options: IServiceOptions = defaultServiceOptions): ClassDecorator => (target) => {
  Reflect.defineMetadata(SKeys.NAME, name, target.prototype);
  Reflect.defineMetadata(SKeys.IS_GLOBAL, options.isGlobal, target.prototype);
};
