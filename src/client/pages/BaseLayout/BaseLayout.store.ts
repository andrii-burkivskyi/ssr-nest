import { Service } from '../../core/decorators/service/service.decorator';
import { LocationService } from '../../core/services/Location.service';
import { BaseLayoutModule } from '.';

@Service('BaseLayoutStore')
export class BaseLayoutStore {
    constructor(
        public module: BaseLayoutModule,
        public location: LocationService,
    ) {}
}
