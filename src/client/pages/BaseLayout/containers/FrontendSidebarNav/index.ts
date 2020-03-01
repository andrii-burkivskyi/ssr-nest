import { Module } from '../../../../core/decorators/module/module.decorator';
import { ModuleBase } from '../../../../core/decorators/module/Module.base';

import { FrontendSidebarNav } from './FrontendSidebarNav.imports';
import { FrontendSidebarNavGuard } from './FrontendSidebarNav.guard';

@Module({
    guard: FrontendSidebarNavGuard,
    view: FrontendSidebarNav.View,
    model: FrontendSidebarNav.Store,
})
export class FrontendSidebarNavModule extends ModuleBase {}
