import { Module } from '../../core/decorators/module/module.decorator';
import { ModuleBase } from '../../core/decorators/module/Module.base';

import { Projects } from './Projects.imports';
import { ProjectsGuard } from './Projects.guard';

@Module({
  name: "ProjectsModule",
  view: Projects.View,
  model: Projects.Store,
  guard: ProjectsGuard,
  services: [
    Projects.RequestService,
    Projects.ListService,
    Projects.ModalsService,
    Projects.FormsService,
  ],
})
export class ProjectsModule extends ModuleBase {}
