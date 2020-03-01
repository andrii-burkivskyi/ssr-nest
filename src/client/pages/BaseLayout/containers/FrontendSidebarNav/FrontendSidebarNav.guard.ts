import { computed } from 'mobx';
import { LocationService } from '../../../../core/services/Location.service';
import { Guard } from '../../../../core/decorators/guard/guard.decorator';
import { GuardBase } from '../../../../core/decorators/guard/Guard.base';
import { Routes } from '../../../../core/routes';

@Guard('FrontendSidebarNavGuard')
export class FrontendSidebarNavGuard extends GuardBase {
  constructor(
        private location: LocationService,
  ) { super(); }

    route = {
      route: Routes.FRONTEND,
      options: { end: false },
    };

    @computed get isActive(): boolean {
      return this.isModuleViewRendered &&
            this.location.isValidRoute(this.route);
    }
}
