import { AsyncLazyConstructor, AsyncModuleItem } from "../module.extractor";
import { action, observable } from "mobx";
import { ModuleBase } from "../Module.base";
import { ModulesListBase } from "../ModulesList.base";

interface ChildrenInitializerProps {
    children: AsyncModuleItem[];
}

interface ChildrenModuleSeparator {
    moduleItems: AsyncLazyConstructor[];
    modulesLists: ModulesListBase[];
}

export class ChildrenInitializer {
    constructor(props: ChildrenInitializerProps) {
        this.moduleAsyncLazyConstructors = props.children;
    }
    moduleAsyncLazyConstructors: AsyncModuleItem[];
    moduleItemConstructors: Constructable<Record<string, any>>[] = [];
    modulesLists: ModulesListBase[] = [];

    @observable children = new Map();

    @action init = async (parentModule: ModuleBase) => {
        const { moduleItems, modulesLists }: ChildrenModuleSeparator = this.moduleAsyncLazyConstructors
            .reduce<ChildrenModuleSeparator>((acc, m) => {
                m instanceof ModulesListBase
                    ? acc.modulesLists.push(m)
                    : acc.moduleItems.push(m);
                return acc;
            }, { moduleItems: [], modulesLists: [] });
        const [moduleItemConstructors] = await Promise.all([
            Promise.all(moduleItems.map((m) => m())),
            Promise.all(modulesLists.map((m) => m.init(parentModule)))
        ]);
        this.moduleItemConstructors = moduleItemConstructors;
        this.modulesLists = modulesLists;
    }

    @action inject = (parentModule: ModuleBase) => {
        this.moduleItemConstructors.forEach((ModuleConstructor) => {
            this.children.set(ModuleConstructor, new ModuleConstructor(parentModule));
        });
        this.modulesLists.forEach((modulesList) => {
            this.children.set(modulesList, modulesList);
        });
    }

    @action clear = () => {
        this.children.clear()
        this.moduleItemConstructors = [];
        this.modulesLists = [];
    }
}