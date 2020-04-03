import { ClassExtractor, AsyncLazyConstructor } from "../module.extractor";
import { action, observable } from "mobx";
import { ModuleBase } from "../Module.base";
import { isNill } from "../../../../utils/typeGuards";
import { ServiceExtractor } from "../../service/service.extractor";

interface ModelAndViewInitializerProps {
    model: AsyncLazyConstructor;
    view: AsyncLazyConstructor<React.Component<ViewOf<Record<string, any>>>>;
}

interface ModelAndViewInitializerInjectProps {
    module: ModuleBase;
    services: Map<Constructable, any>;
}

export class ModelAndViewInitializer {
    constructor(props: ModelAndViewInitializerProps) {
        this.modelAsyncLazyConstructor = props.model;
        this.viewAsyncLazyConstructor = props.view;
    }

    modelAsyncLazyConstructor: AsyncLazyConstructor;
    viewAsyncLazyConstructor: AsyncLazyConstructor<React.Component>;

    ModelConstructor: Nullable<Constructable<Record<string, any>>> = null;

    @observable model: Nullable<Record<string, any>> = null;
    @observable View: Nullable<Constructable<React.Component<ViewOf<Record<string, any>>>>> = null;

    @action init = async () => {
        const [ModelConstructor, ViewConstructor] = await Promise.all([
            this.modelAsyncLazyConstructor(),
            this.viewAsyncLazyConstructor(),
        ])
        this.ModelConstructor = ModelConstructor;
        this.View = ViewConstructor as Constructable<React.Component<ViewOf<Record<string, any>>>>;
    }

    @action inject = (props: ModelAndViewInitializerInjectProps) => {
        if (!this.ModelConstructor) { return; }

        const params = ClassExtractor(this.ModelConstructor).paramtypes;
        if (params.length === 0) {
            this.model = new this.ModelConstructor();
            return this.model;
        }

        const injections = params.map((ParamConstructor) => {
            const serviceName = ServiceExtractor(ParamConstructor).name;
            const isCurrentModule = props.module instanceof ParamConstructor;
            const isInitInGlobalService = !isNill(ModuleBase.services.get(ParamConstructor));
            const isInitInLocalService = !isNill(props.services.get(ParamConstructor));
            if (isCurrentModule) {
                return props.module;
            }

            if (isInitInGlobalService) {
                return ModuleBase.services.get(ParamConstructor);
            }
            
            if (isInitInLocalService) {
                return props.services.get(ParamConstructor);
            }

            throw new Error(`Cannot init model. Because service [${serviceName}] not init.`);
        })

        this.model = new this.ModelConstructor(...injections);
    }

    @action clear = () => {
        this.ModelConstructor = null;
        this.model = null;
        this.View = null;
    }
}