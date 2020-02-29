import { LocationService } from '../../core/services/Location.service';
import { BaseLayoutModule } from '.';
export declare class BaseLayoutStore {
    module: BaseLayoutModule;
    location: LocationService;
    constructor(module: BaseLayoutModule, location: LocationService);
}
