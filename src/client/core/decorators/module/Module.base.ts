import 'reflect-metadata';
import * as React from 'react';
import {
  computed, observe, action, observable,
} from 'mobx';
import {
  AsyncModuleExtractor, ClassExtractor, AsyncLazyConstructor, AsyncModuleItem, SyncModuleExtractor, SyncLazyConstructor,
} from './module.extractor';
import { isConstructable, isNill } from '../../../utils/typeGuards';
import { LocationService } from '../../../core/services/Location.service';
import { GuardBase } from '../guard/Guard.base';
import { ModulesListBase } from './ModulesList.base';
import { SSRService } from '../../services/SSR.service';

class ModuleBase {
    static services = observable.map();

    static list = (...modules: Array<AsyncLazyConstructor<ModuleBase>>) => new ModulesListBase(modules);

    constructor(parent?: ModuleBase) {
      this.parent = parent;

      const GuardClass = AsyncModuleExtractor(this).Guard;
      if (GuardClass) {
        this.guard = this.injectGuardDependencies(GuardClass);
      }

      this.guard.isActive && this.init();
      observe(this, 'isActive', (change) => { change.newValue ? this.init() : this.clear(); });
    }

    parent?: ModuleBase;

    ssrService: SSRService = ModuleBase.services.get(SSRService);
    done = this.ssrService.startModule();

    @observable View: Nullable<Constructable<React.Component<any>>> = null;

    @observable model: Nullable<Record<string, any>> = null;

    @observable guard = new GuardBase();

    @observable children = new Map();

    @observable services = new Map();

    @computed get isActive(): boolean {
      return this.guard.isActive;
    }

    @computed get shouldDisplay(): boolean {
      return Boolean(this.View) && Boolean(this.model);
    }

    @action private asyncInitModules = async () => {
      const { modules, modulesLists }: {
            modules: AsyncLazyConstructor[];
            modulesLists: ModulesListBase[];
        } = AsyncModuleExtractor(this).modules
          .reduce((acc, m) => {
            m instanceof ModulesListBase
              ? acc.modulesLists.push(m)
              : acc.modules.push(m);
            return acc;
          },
          {
            modules: [] as AsyncLazyConstructor[],
            modulesLists: [] as ModulesListBase[],
          });

      const loadedModules = await Promise.all(modules.map((m) => m()));
      loadedModules.forEach((Module) => {
        this.children.set(Module, new Module(this));
      });

      await Promise.all(modulesLists.map(async (list) => {
        await list.init(this);
        this.children.set(list, list);
      }));
    }

    @action private asyncInitViewAndModel = async () => {
      const [View, Model] = await Promise.all([
        AsyncModuleExtractor(this).View(),
        AsyncModuleExtractor(this).Model(),
      ]);
      this.View = View as Constructable<React.Component>;
      this.injectModelDependencies(Model);
    }

    @action private asyncInitServices = async () => {
      const services = await Promise.all(AsyncModuleExtractor(this).services.map((lazyService) => lazyService()));
      services.forEach((Service) => { this.services.set(Service, null); });
      services.forEach((Service) => this.injectDependencies(Service));
    }

    @action private init = async () => {
      await this.asyncInitModules();
      await this.asyncInitServices();
      await this.asyncInitViewAndModel();
      await Promise.all(this.ssrService.requests)
      this.done();
    }

    @action private clear = () => {
      this.View = null;
      this.model = null;
      this.children.clear();
      this.services.clear();
    }

    private injectGuardDependencies = (ClassConstructor: Constructable<GuardBase>) => {
      const params = ClassExtractor(ClassConstructor).paramtypes;
      if (params.length === 0) { return new ClassConstructor(); }

      const injection = params.map((Param) => {
        if (isConstructable(Param) && this instanceof Param) {
          return this;
        }

        if (ModuleBase.services.get(Param)) {
          return ModuleBase.services.get(Param);
        }

        throw new Error(`Cannot init guard [${ClassConstructor}] because params for injection not in global services`);
      });

      return new ClassConstructor(...injection);
    }

    private injectModelDependencies = (ModelConstructor: Constructable<Record<string, any>>) => {
      const params = ClassExtractor(ModelConstructor).paramtypes;
      if (params.length === 0) {
        this.model = new ModelConstructor();
        return this.model;
      }

      const injections = params.map((ParamConstructor) => this.injectDependencies(ParamConstructor, [ModelConstructor]));

      this.model = new ModelConstructor(...injections);
      return this.model;
    }

    private injectDependencies = (ClassConstructor: Constructable<Record<string, any>>, constructors: Array<Constructable<Record<string, any>>> = []): Record<string, any> => {
      if (isConstructable(ClassConstructor)) {
        const params = ClassExtractor(ClassConstructor).paramtypes;
        const isCurrentModule = this instanceof ClassConstructor;
        const isInitInModel = Boolean(this.model) && this.model instanceof ClassConstructor;
        const isInitInGlobalService = !isNill(ModuleBase.services.get(ClassConstructor));
        const isInitInLocalService = !isNill(this.services.get(ClassConstructor));

        if (isCurrentModule) { return this; }
        if (isInitInModel) { this.model; }
        if (isInitInGlobalService) { return ModuleBase.services.get(ClassConstructor); }
        if (isInitInLocalService) { return this.services.get(ClassConstructor); }

        if (params.length === 0) {
          this.services.set(ClassConstructor, new ClassConstructor());
          return this.services.get(ClassConstructor);
        }

        const injection = params.map((ParamConstructor) => this.injectDependencies(ParamConstructor));

        this.services.set(ClassConstructor, new ClassConstructor(...injection));
        return this.services.get(ClassConstructor);
      }

      return {};
    }
}

ModuleBase.services.set(LocationService, new LocationService());
ModuleBase.services.set(SSRService, new SSRService());

export { ModuleBase };
