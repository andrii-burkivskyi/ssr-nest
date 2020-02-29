import { LocationService } from "../../../../core/services/Location.service";
export declare class BackendSidebarNavStore {
    location: LocationService;
    constructor(location: LocationService);
    get params(): CommonMap;
}
