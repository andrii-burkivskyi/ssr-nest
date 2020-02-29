import { ModuleBase } from './Module.base';
import { AsyncLazyConstructor } from './module.extractor';
export declare class ModulesListBase {
    constructor(modules: Array<() => Promise<Constructable<ModuleBase>>>);
    modules: Array<AsyncLazyConstructor<ModuleBase>>;
    initModules: ModuleBase[];
    get item(): Nullable<ModuleBase>;
    init: (parent: ModuleBase) => Promise<void>;
    onMount: () => void;
    onUnmount: () => void;
}
