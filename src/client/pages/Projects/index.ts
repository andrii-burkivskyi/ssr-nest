import { Module } from '../../core/decorators/module/module.decorator';
import { ModuleBase } from '../../core/decorators/module/Module.base';

import { Projects } from './Projects.imports';
import { ProjectsGuard } from './Projects.guard';

@Module({
  view: Projects.View,
  model: Projects.Store,
  guard: ProjectsGuard,
  services: [
    Projects.RequestService,
    Projects.ListService,
    Projects.ModalsService,
  ],
})
export class ProjectsModule extends ModuleBase {}
