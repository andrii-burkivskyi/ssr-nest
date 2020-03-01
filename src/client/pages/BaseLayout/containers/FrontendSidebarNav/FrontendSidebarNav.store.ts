
import { computed } from 'mobx';

import { LocationService } from '../../../../core/services/Location.service';
import { Routes } from '../../../../core/routes';
import { Service } from '../../../../core/decorators/service/service.decorator';

@Service('FrontendSidebarNavStore')
export class FrontendSidebarNavStore {
    constructor(
        public location: LocationService,
    ) {}

    @computed get params(): CommonMap {
        return this.location.routePrams(Routes.PROJECT);
    }

}
