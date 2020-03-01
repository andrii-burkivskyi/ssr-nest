import { Module } from '../../../../core/decorators/module/module.decorator';
import { ModuleBase } from '../../../../core/decorators/module/Module.base';

import { BackendSidebarNav } from './BackendSidebarNav.imports';
import { BackendSidebarNavGuard } from './BackendSidebarNav.guard';

@Module({
  guard: BackendSidebarNavGuard,
  view: BackendSidebarNav.View,
  model: BackendSidebarNav.Store,
})
export class BackendSidebarNavModule extends ModuleBase {}
