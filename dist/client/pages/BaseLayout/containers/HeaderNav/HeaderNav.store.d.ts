import { LocationService } from "../../../../core/services/Location.service";
export declare class HeaderNavStore {
    location: LocationService;
    constructor(location: LocationService);
    get params(): CommonMap;
    get i18n(): KeyWithValue<{
        frontend: unknown;
        backend: unknown;
    }, import("mobx").IObservableValue<string>>;
}
