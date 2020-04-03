import { GuardBase } from "../../guard/Guard.base";
import { ModuleBase } from "../Module.base";
import { ClassExtractor } from "../module.extractor";
import { GuardExtractor } from "../../guard/guard.extractor";
import { observable, action } from "mobx";

interface GuardInitializerProps {
    guard: Constructable<GuardBase>;
}

interface GuardInitializerInjectProps {
    module: ModuleBase;
}

export class GuardInitializer {
    constructor(props: GuardInitializerProps) {
        this.GuardBaseConstructor = props.guard;
    }
    GuardBaseConstructor!: Constructable<GuardBase>;

    @observable guard = new GuardBase();

    @action inject = (props: GuardInitializerInjectProps) => {
        const name = GuardExtractor(this.GuardBaseConstructor).name;
        const params = ClassExtractor(this.GuardBaseConstructor).paramtypes;
        if (params.length === 0) { this.guard = new this.GuardBaseConstructor(); }

        const injection = params.map((Param) => {
            if (props.module instanceof Param) {
                return this;
            }

            if (ModuleBase.services.get(Param)) {
                return ModuleBase.services.get(Param);
            }

            throw new Error(`Cannot init guard [${name}] because params for injection not in global services.`);
        });

        this.guard = new this.GuardBaseConstructor(...injection);
    }
}