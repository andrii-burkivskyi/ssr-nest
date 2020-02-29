"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
require("reflect-metadata");
const mobx_1 = require("mobx");
const module_extractor_1 = require("./module.extractor");
const typeGuards_1 = require("../../../utils/typeGuards");
const Location_service_1 = require("../../../core/services/Location.service");
const Guard_base_1 = require("../guard/Guard.base");
const ModulesList_base_1 = require("./ModulesList.base");
const Requests_service_1 = require("../../services/Requests.service");
class ModuleBase {
    constructor(parent) {
        this.initStateEnd = () => { };
        this.waitForStateInit = new Promise((resolve) => {
            this.initStateEnd = resolve;
        });
        this.requestService = ModuleBase.services.get(Requests_service_1.RequestsService);
        this.View = null;
        this.model = null;
        this.guard = new Guard_base_1.GuardBase();
        this.children = new Map();
        this.services = new Map();
        this.asyncInitModules = async () => {
            const { modules, modulesLists } = module_extractor_1.AsyncModuleExtractor(this).modules
                .reduce((acc, m) => {
                m instanceof ModulesList_base_1.ModulesListBase
                    ? acc.modulesLists.push(m)
                    : acc.modules.push(m);
                return acc;
            }, {
                modules: [],
                modulesLists: [],
            });
            const loadedModules = await Promise.all(modules.map((m) => m()));
            loadedModules.forEach((Module) => {
                this.children.set(Module, new Module(this));
                return;
            });
            await Promise.all(modulesLists.map(async (list) => {
                await list.init(this);
                this.children.set(list, list);
            }));
        };
        this.asyncInitViewAndModel = async () => {
            const [View, Model] = await Promise.all([
                module_extractor_1.AsyncModuleExtractor(this).View(),
                module_extractor_1.AsyncModuleExtractor(this).Model(),
            ]);
            this.View = View;
            this.injectModelDependencies(Model);
        };
        this.asyncInitServices = async () => {
            const services = await Promise.all(module_extractor_1.AsyncModuleExtractor(this).services.map((lazyService) => lazyService()));
            services.forEach((Service) => { this.services.set(Service, null); });
            services.forEach((Service) => this.injectDependencies(Service));
        };
        this.init = async () => {
            await this.asyncInitModules();
            await this.asyncInitServices();
            await this.asyncInitViewAndModel();
            await Promise.all(this.requestService.requests);
            this.initStateEnd();
        };
        this.clear = () => {
            this.View = null;
            this.model = null;
            this.children.clear();
            this.services.clear();
        };
        this.injectGuardDependencies = (ClassConstructor) => {
            const params = module_extractor_1.ClassExtractor(ClassConstructor).paramtypes;
            if (params.length === 0) {
                return new ClassConstructor();
            }
            const injection = params.map((Param) => {
                if (typeGuards_1.isConstructable(Param) && this instanceof Param) {
                    return this;
                }
                if (ModuleBase.services.get(Param)) {
                    return ModuleBase.services.get(Param);
                }
                throw new Error(`Cannot init guard [${ClassConstructor}] because params for injection not in global services`);
            });
            return new ClassConstructor(...injection);
        };
        this.injectModelDependencies = (ModelConstructor) => {
            const params = module_extractor_1.ClassExtractor(ModelConstructor).paramtypes;
            if (params.length === 0) {
                this.model = new ModelConstructor();
                return this.model;
            }
            const injections = params.map((ParamConstructor) => this.injectDependencies(ParamConstructor, [ModelConstructor]));
            this.model = new ModelConstructor(...injections);
            return this.model;
        };
        this.injectDependencies = (ClassConstructor, constructors = []) => {
            if (typeGuards_1.isConstructable(ClassConstructor)) {
                const params = module_extractor_1.ClassExtractor(ClassConstructor).paramtypes;
                const isCurrentModule = this instanceof ClassConstructor;
                const isInitInModel = Boolean(this.model) && this.model instanceof ClassConstructor;
                const isInitInGlobalService = !typeGuards_1.isNill(ModuleBase.services.get(ClassConstructor));
                const isInitInLocalService = !typeGuards_1.isNill(this.services.get(ClassConstructor));
                if (isCurrentModule) {
                    return this;
                }
                if (isInitInModel) {
                    this.model;
                }
                if (isInitInGlobalService) {
                    return ModuleBase.services.get(ClassConstructor);
                }
                if (isInitInLocalService) {
                    return this.services.get(ClassConstructor);
                }
                if (params.length === 0) {
                    this.services.set(ClassConstructor, new ClassConstructor());
                    return this.services.get(ClassConstructor);
                }
                const injection = params.map((ParamConstructor) => this.injectDependencies(ParamConstructor));
                this.services.set(ClassConstructor, new ClassConstructor(...injection));
                return this.services.get(ClassConstructor);
            }
            return {};
        };
        this.parent = parent;
        const GuardClass = module_extractor_1.AsyncModuleExtractor(this).Guard;
        if (GuardClass) {
            this.guard = this.injectGuardDependencies(GuardClass);
        }
        this.guard.isActive && this.init();
        mobx_1.observe(this, 'isActive', (change) => { change.newValue ? this.init() : this.clear(); });
    }
    get isActive() {
        return this.guard.isActive;
    }
    get shouldDisplay() {
        return Boolean(this.View) && Boolean(this.model);
    }
}
ModuleBase.services = mobx_1.observable.map();
ModuleBase.list = (...modules) => new ModulesList_base_1.ModulesListBase(modules);
tslib_1.__decorate([
    mobx_1.observable,
    tslib_1.__metadata("design:type", Object)
], ModuleBase.prototype, "View", void 0);
tslib_1.__decorate([
    mobx_1.observable,
    tslib_1.__metadata("design:type", Object)
], ModuleBase.prototype, "model", void 0);
tslib_1.__decorate([
    mobx_1.observable,
    tslib_1.__metadata("design:type", Object)
], ModuleBase.prototype, "guard", void 0);
tslib_1.__decorate([
    mobx_1.observable,
    tslib_1.__metadata("design:type", Object)
], ModuleBase.prototype, "children", void 0);
tslib_1.__decorate([
    mobx_1.observable,
    tslib_1.__metadata("design:type", Object)
], ModuleBase.prototype, "services", void 0);
tslib_1.__decorate([
    mobx_1.computed,
    tslib_1.__metadata("design:type", Boolean),
    tslib_1.__metadata("design:paramtypes", [])
], ModuleBase.prototype, "isActive", null);
tslib_1.__decorate([
    mobx_1.computed,
    tslib_1.__metadata("design:type", Boolean),
    tslib_1.__metadata("design:paramtypes", [])
], ModuleBase.prototype, "shouldDisplay", null);
tslib_1.__decorate([
    mobx_1.action,
    tslib_1.__metadata("design:type", Object)
], ModuleBase.prototype, "asyncInitModules", void 0);
tslib_1.__decorate([
    mobx_1.action,
    tslib_1.__metadata("design:type", Object)
], ModuleBase.prototype, "asyncInitViewAndModel", void 0);
tslib_1.__decorate([
    mobx_1.action,
    tslib_1.__metadata("design:type", Object)
], ModuleBase.prototype, "asyncInitServices", void 0);
tslib_1.__decorate([
    mobx_1.action,
    tslib_1.__metadata("design:type", Object)
], ModuleBase.prototype, "init", void 0);
tslib_1.__decorate([
    mobx_1.action,
    tslib_1.__metadata("design:type", Object)
], ModuleBase.prototype, "clear", void 0);
exports.ModuleBase = ModuleBase;
ModuleBase.services.set(Location_service_1.LocationService, new Location_service_1.LocationService());
ModuleBase.services.set(Requests_service_1.RequestsService, new Requests_service_1.RequestsService());
//# sourceMappingURL=Module.base.js.map