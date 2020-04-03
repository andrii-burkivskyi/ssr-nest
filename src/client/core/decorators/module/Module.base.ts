import 'reflect-metadata';
import * as React from 'react';
import {
  computed, observe, action, observable,
} from 'mobx';
import { ModuleExtractor, ClassExtractor, AsyncLazyConstructor } from './module.extractor';
import { isConstructable, isNill } from '../../../utils/typeGuards';
import { LocationService } from '../../../core/services/Location.service';
import { GuardBase } from '../guard/Guard.base';
import { ModulesListBase } from './ModulesList.base';
import { SSRService } from '../../services/SSR.service';
import { GuardInitializer } from "./initializers/Guard.initializer";
import { ModelAndViewInitializer } from "./initializers/ModelAndView.initializer";
import { ServicesInitializer } from "./initializers/Services.initializer";
import { ChildrenInitializer } from "./initializers/Children.initializer";

class ModuleBase {
    static services = observable.map();

    static list = (...modules: Array<AsyncLazyConstructor<ModuleBase>>) => new ModulesListBase(modules);

    constructor(parent?: ModuleBase) {
      this.parent = parent;
      this.name = ModuleExtractor(this).Name;

      this.guardInit.inject({ module: this });
      this.ssrService.modules.start();

      this.guardInit.guard.isActive ? this.init() : this.ssrService.modules.done();
      observe(this, 'isActive', (change) => { change.newValue ? this.init() : this.clear(); });
    }
    name!: string;

    parent?: ModuleBase;

    ssrService: SSRService = ModuleBase.services.get(SSRService);

    @observable private guardInit = new GuardInitializer({
      guard: ModuleExtractor(this).Guard,
    });

    @observable private modelAndViewInit = new ModelAndViewInitializer({
      model: ModuleExtractor(this).Model,
      view: ModuleExtractor(this).View,
    });

    @observable private servicesInit = new ServicesInitializer({
      services: ModuleExtractor(this).services,
    });

    @observable private childrenInit = new ChildrenInitializer({
      children: ModuleExtractor(this).modules,
    });

    @computed get isActive(): boolean { return this.guardInit.guard.isActive; }

    @computed get View() { return this.modelAndViewInit.View; }

    @computed get model() { return this.modelAndViewInit.model; }

    @computed get guard() { return this.guardInit.guard; }
    
    @computed get services() { return this.servicesInit.services; }
    
    @computed get children() { return this.childrenInit.children; }

    @action private init = async () => {
      await Promise.all([
        this.servicesInit.init(),
        this.modelAndViewInit.init(),
        this.childrenInit.init(this),
        this.ssrService.requests.isComplete,
      ]);

      this.servicesInit.inject({ module: this });
      this.modelAndViewInit.inject({ module: this, services: this.servicesInit.services });
      this.childrenInit.inject(this);

      this.ssrService.modules.done();
    }

    @action private clear = () => {
      this.modelAndViewInit.clear()
      this.servicesInit.clear()
      this.childrenInit.clear();
    }

}

ModuleBase.services.set(LocationService, new LocationService());
ModuleBase.services.set(SSRService, new SSRService());

export { ModuleBase };
