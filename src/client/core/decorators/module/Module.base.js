"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
require("reflect-metadata");
var mobx_1 = require("mobx");
var module_extractor_1 = require("./module.extractor");
var typeGuards_1 = require("../../../utils/typeGuards");
var Location_service_1 = require("../../../core/services/Location.service");
var Guard_base_1 = require("../guard/Guard.base");
var ModulesList_base_1 = require("./ModulesList.base");
var Requests_service_1 = require("../../services/Requests.service");
var ModuleBase = /** @class */ (function () {
    function ModuleBase(parent) {
        var _this = this;
        this.initStateEnd = function () { };
        this.waitForStateInit = new Promise(function (resolve) {
            _this.initStateEnd = resolve;
        });
        this.requestService = ModuleBase.services.get(Requests_service_1.RequestsService);
        this.View = null;
        this.model = null;
        this.guard = new Guard_base_1.GuardBase();
        this.children = new Map();
        this.services = new Map();
        this.asyncInitModules = function () { return tslib_1.__awaiter(_this, void 0, void 0, function () {
            var _a, modules, modulesLists, loadedModules;
            var _this = this;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = module_extractor_1.AsyncModuleExtractor(this).modules
                            .reduce(function (acc, m) {
                            m instanceof ModulesList_base_1.ModulesListBase
                                ? acc.modulesLists.push(m)
                                : acc.modules.push(m);
                            return acc;
                        }, {
                            modules: [],
                            modulesLists: [],
                        }), modules = _a.modules, modulesLists = _a.modulesLists;
                        return [4 /*yield*/, Promise.all(modules.map(function (m) { return m(); }))];
                    case 1:
                        loadedModules = _b.sent();
                        loadedModules.forEach(function (Module) {
                            _this.children.set(Module, new Module(_this));
                            return;
                        });
                        return [4 /*yield*/, Promise.all(modulesLists.map(function (list) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
                                return tslib_1.__generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, list.init(this)];
                                        case 1:
                                            _a.sent();
                                            this.children.set(list, list);
                                            return [2 /*return*/];
                                    }
                                });
                            }); }))];
                    case 2:
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        }); };
        this.asyncInitViewAndModel = function () { return tslib_1.__awaiter(_this, void 0, void 0, function () {
            var _a, View, Model;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, Promise.all([
                            module_extractor_1.AsyncModuleExtractor(this).View(),
                            module_extractor_1.AsyncModuleExtractor(this).Model(),
                        ])];
                    case 1:
                        _a = _b.sent(), View = _a[0], Model = _a[1];
                        this.View = View;
                        this.injectModelDependencies(Model);
                        return [2 /*return*/];
                }
            });
        }); };
        this.asyncInitServices = function () { return tslib_1.__awaiter(_this, void 0, void 0, function () {
            var services;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Promise.all(module_extractor_1.AsyncModuleExtractor(this).services.map(function (lazyService) { return lazyService(); }))];
                    case 1:
                        services = _a.sent();
                        services.forEach(function (Service) { _this.services.set(Service, null); });
                        services.forEach(function (Service) { return _this.injectDependencies(Service); });
                        return [2 /*return*/];
                }
            });
        }); };
        this.init = function () { return tslib_1.__awaiter(_this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.asyncInitModules()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.asyncInitServices()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.asyncInitViewAndModel()];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, Promise.all(this.requestService.requests)];
                    case 4:
                        _a.sent();
                        this.initStateEnd();
                        return [2 /*return*/];
                }
            });
        }); };
        this.clear = function () {
            _this.View = null;
            _this.model = null;
            _this.children.clear();
            _this.services.clear();
        };
        this.injectGuardDependencies = function (ClassConstructor) {
            var params = module_extractor_1.ClassExtractor(ClassConstructor).paramtypes;
            if (params.length === 0) {
                return new ClassConstructor();
            }
            var injection = params.map(function (Param) {
                if (typeGuards_1.isConstructable(Param) && _this instanceof Param) {
                    return _this;
                }
                if (ModuleBase.services.get(Param)) {
                    return ModuleBase.services.get(Param);
                }
                throw new Error("Cannot init guard [" + ClassConstructor + "] because params for injection not in global services");
            });
            return new (ClassConstructor.bind.apply(ClassConstructor, tslib_1.__spreadArrays([void 0], injection)))();
        };
        this.injectModelDependencies = function (ModelConstructor) {
            var params = module_extractor_1.ClassExtractor(ModelConstructor).paramtypes;
            if (params.length === 0) {
                _this.model = new ModelConstructor();
                return _this.model;
            }
            var injections = params.map(function (ParamConstructor) { return _this.injectDependencies(ParamConstructor, [ModelConstructor]); });
            _this.model = new (ModelConstructor.bind.apply(ModelConstructor, tslib_1.__spreadArrays([void 0], injections)))();
            return _this.model;
        };
        this.injectDependencies = function (ClassConstructor, constructors) {
            if (constructors === void 0) { constructors = []; }
            if (typeGuards_1.isConstructable(ClassConstructor)) {
                var params = module_extractor_1.ClassExtractor(ClassConstructor).paramtypes;
                var isCurrentModule = _this instanceof ClassConstructor;
                var isInitInModel = Boolean(_this.model) && _this.model instanceof ClassConstructor;
                var isInitInGlobalService = !typeGuards_1.isNill(ModuleBase.services.get(ClassConstructor));
                var isInitInLocalService = !typeGuards_1.isNill(_this.services.get(ClassConstructor));
                if (isCurrentModule) {
                    return _this;
                }
                if (isInitInModel) {
                    _this.model;
                }
                if (isInitInGlobalService) {
                    return ModuleBase.services.get(ClassConstructor);
                }
                if (isInitInLocalService) {
                    return _this.services.get(ClassConstructor);
                }
                if (params.length === 0) {
                    _this.services.set(ClassConstructor, new ClassConstructor());
                    return _this.services.get(ClassConstructor);
                }
                var injection = params.map(function (ParamConstructor) { return _this.injectDependencies(ParamConstructor); });
                _this.services.set(ClassConstructor, new (ClassConstructor.bind.apply(ClassConstructor, tslib_1.__spreadArrays([void 0], injection)))());
                return _this.services.get(ClassConstructor);
            }
            return {};
        };
        this.parent = parent;
        var GuardClass = module_extractor_1.AsyncModuleExtractor(this).Guard;
        if (GuardClass) {
            this.guard = this.injectGuardDependencies(GuardClass);
        }
        this.guard.isActive && this.init();
        mobx_1.observe(this, 'isActive', function (change) { change.newValue ? _this.init() : _this.clear(); });
    }
    Object.defineProperty(ModuleBase.prototype, "isActive", {
        get: function () {
            return this.guard.isActive;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ModuleBase.prototype, "shouldDisplay", {
        get: function () {
            return Boolean(this.View) && Boolean(this.model);
        },
        enumerable: true,
        configurable: true
    });
    ModuleBase.services = mobx_1.observable.map();
    ModuleBase.list = function () {
        var modules = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            modules[_i] = arguments[_i];
        }
        return new ModulesList_base_1.ModulesListBase(modules);
    };
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
    return ModuleBase;
}());
exports.ModuleBase = ModuleBase;
ModuleBase.services.set(Location_service_1.LocationService, new Location_service_1.LocationService());
ModuleBase.services.set(Requests_service_1.RequestsService, new Requests_service_1.RequestsService());
//# sourceMappingURL=Module.base.js.map