import { observable, action } from "mobx";
import { GuardBase } from "../../guard/Guard.base";
import { ModuleBase } from "../Module.base";
import { ClassExtractor, AsyncLazyConstructor } from "../module.extractor";
import { GuardExtractor } from "../../guard/guard.extractor";
import { ServiceExtractor } from "../../service/service.extractor";

interface ServicesInitializerProps {
    services: AsyncLazyConstructor[];
}

interface ServicesInitializerInjectProps {
    module: ModuleBase;
}
interface InjectServiceItem {
    (
        ServiceConstructor: Constructable<Record<string, any>>,
        moduleItem: ModuleBase
    ): void
}

export class ServicesInitializer {
    constructor(props: ServicesInitializerProps) {
        this.serviceAsyncLazyConstructors = props.services;
    }

    serviceAsyncLazyConstructors: AsyncLazyConstructor[];

    @observable services = new Map();
    @observable servicesList: Constructable<Record<string, any>>[] = [];

    @action init = async () => {
        this.servicesList = await Promise.all(
            this.serviceAsyncLazyConstructors
                .map((lazyService) => lazyService())
        );

        this.servicesList.forEach((ServiceConstructor) => {
            this.services.set(ServiceConstructor, null);
        });
    }

    @action inject = (props: ServicesInitializerInjectProps) => {
        this.servicesList.forEach((ServiceConstructor) => {
            this.injectServiceItem(ServiceConstructor, props.module)
        });
    }

    @action private injectServiceItem: InjectServiceItem = (ServiceConstructor, moduleItem) => {
        const serviceName = ServiceExtractor(ServiceConstructor).name;
        const params = ClassExtractor(ServiceConstructor).paramtypes;
        const injection = params.map((ParamConstructor) => {
            if (moduleItem instanceof ParamConstructor) {
                return this;
            }

            if (ModuleBase.services.get(ParamConstructor)) {
                return ModuleBase.services.get(ParamConstructor);
            }

            if (this.services.get(ParamConstructor)) {
                return this.services.get(ParamConstructor);
            }

            if (this.services.get(ParamConstructor) === null) {
                return this.injectServiceItem(ParamConstructor, moduleItem)
            }

            throw new Error(`Cannot init model. Because service [${serviceName}] not init.`);
        });

        this.services.set(ServiceConstructor, new ServiceConstructor(...injection));
    }

    @action clear = () => {
        this.services.clear();
        this.servicesList = [];
    }
}