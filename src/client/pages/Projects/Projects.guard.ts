import { computed } from 'mobx';
import { LocationService } from '../../core/services/Location.service';
import { Guard } from '../../core/decorators/guard/guard.decorator';
import { GuardBase } from '../../core/decorators/guard/Guard.base';
import { Routes } from '../../core/routes';

@Guard('ProjectsGuard')
export class ProjectsGuard extends GuardBase {
  constructor(
        private location: LocationService,
  ) { super(); }

    route = {
      route: Routes.HOME,
      options: { end: true },
    }

    @computed get isActive(): boolean {
      return this.isModuleViewRendered &&
            this.location.isValidRoute(this.route);
    }
}
