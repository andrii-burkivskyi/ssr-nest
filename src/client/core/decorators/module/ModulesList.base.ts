
import { observable, action, computed } from 'mobx';
import { ModuleBase } from './Module.base';
import { AsyncLazyConstructor } from './module.extractor';
import { SSRService } from "../../services/SSR.service";

export class ModulesListBase {
  constructor(modules: Array<() => Promise<Constructable<ModuleBase>>>) {
    this.modules = modules;
  }

  ssrService: SSRService = ModuleBase.services.get(SSRService);

  @observable modules: Array<AsyncLazyConstructor<ModuleBase>>;

  @observable initModules = [] as ModuleBase[];

  @computed get item(): Nullable<ModuleBase> {
    return this.initModules.find((m) => m.guard.isActive) ?? null;
  }

  @action init = async (parent: ModuleBase) => {
    this.ssrService.modules.start();
    const modules = await Promise.all(this.modules.map((lazyModule) => lazyModule()));
    modules.forEach((Module) => {
      this.initModules.push(new Module(parent));
    });
    this.ssrService.modules.done();
  }

  @action onMount = () => {
    this.initModules.forEach((m) => m.guard.onMount());
  }

  @action onUnmount = () => {
    this.initModules.forEach((m) => m.guard.onUnmount());
  }
}
