import { LocationService } from "../../core/services/Location.service";
import { GuardBase } from "../../core/decorators/guard/Guard.base";
import { Routes } from "../../core/routes";
export declare class ProjectsGuard extends GuardBase {
    private location;
    constructor(location: LocationService);
    route: {
        route: Routes;
        options: {
            end: boolean;
        };
    };
    get isActive(): boolean;
}
