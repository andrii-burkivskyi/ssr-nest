import { LocationService } from "../../../../core/services/Location.service";
export declare class FrontendSidebarNavStore {
    location: LocationService;
    constructor(location: LocationService);
    get params(): CommonMap;
}
