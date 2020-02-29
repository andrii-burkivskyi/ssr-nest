import { computed } from "mobx";

import { LocationService } from "../../../../core/services/Location.service";
import { Routes } from "../../../../core/routes";
import { Service } from "../../../../core/decorators/service/service.decorator";

import { HeaderNavI18n } from "./HeaderNav.i18n";

@Service("HeaderNavStore")
export class HeaderNavStore {
    constructor(
        public location: LocationService
    ) {}

    @computed get params(): CommonMap {
        return this.location.routePrams(Routes.PROJECT);
    }

    @computed get i18n() {
        return HeaderNavI18n.i18n;
    }
}