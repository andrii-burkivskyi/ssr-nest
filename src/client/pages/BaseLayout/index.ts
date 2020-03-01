import { Module } from '../../core/decorators/module/module.decorator';
import { ModuleBase } from '../../core/decorators/module/Module.base';

import { BaseLayout } from './BaseLayout.imports';

export const SidebarNavModulesList = ModuleBase.list(
  BaseLayout.FrontendSidebarNavModule,
  BaseLayout.BackendSidebarNavModule,
);

export const PagesModulesList = ModuleBase.list(
  BaseLayout.ProjectsModule,
);

@Module({
  view: BaseLayout.View,
  model: BaseLayout.Store,
  modules: [
    BaseLayout.HeaderNavModule,
    SidebarNavModulesList,
    PagesModulesList,
  ],
})
export class BaseLayoutModule extends ModuleBase {}
