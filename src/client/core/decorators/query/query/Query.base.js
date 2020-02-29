"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var mobx_1 = require("mobx");
var qs = require("query-string");
var flat_1 = require("flat");
var lodash_isequal_1 = require("lodash.isequal");
var constants_1 = require("../../../../utils/constants");
var converters_1 = require("../../../../utils/converters");
var object_1 = require("../../../../utils/object");
var Module_base_1 = require("../../../../core/decorators/module/Module.base");
var Location_service_1 = require("../../../../core/services/Location.service");
var query_extractor_1 = require("./query.extractor");
var QueryBase = /** @class */ (function () {
    function QueryBase(props) {
        var _this = this;
        var _a, _b, _c, _d, _e, _f, _g, _h;
        this.parent = constants_1.DEFAULT_STRING;
        this.subscribers = [];
        this.location = Module_base_1.ModuleBase.services.get(Location_service_1.LocationService);
        this.otherQuery = constants_1.DEFAULT_OBJECT;
        this.beforeGetPagination = function (filter) { return filter; };
        this.prevPagination = constants_1.DEFAULT_OBJECT;
        this.page = function (page) { _this.privatePage = converters_1.ensureNumber(page); };
        this.take = function (take) { _this.privateTake = converters_1.ensureNumber(take); };
        this.subscribe = function (action) {
            _this.prevPagination = _this.getPagination();
            action(_this.getPagination());
            _this.subscribers.push(action);
        };
        this.push = function () {
            var _a;
            var pagination = (_a = {}, _a[_this.pageKey] = _this.privatePage, _a[_this.takeKey] = _this.privateTake, _a);
            var filter = Object.entries(_this.getPaginationFilter()).reduce(function (acc, _a) {
                var _b, _c;
                var filterKey = _a[0], filterValue = _a[1];
                var _d;
                var queryKey = (_d = _this.alias[filterKey], (_d !== null && _d !== void 0 ? _d : "" + _this.prefix + (_this.prefix && "_") + filterKey));
                var isNested = query_extractor_1.QueryExtractor(_this).isNested(filterKey);
                if (isNested) {
                    var nestedFilterValue = flat_1.flatten((_b = {}, _b[queryKey] = filterValue, _b), { delimiter: ".", maxDepth: 2, safe: true });
                    nestedFilterValue = Object.entries(nestedFilterValue).reduce(function (nestedAcc, _a) {
                        var _b;
                        var key = _a[0], value = _a[1];
                        if (object_1.isEmpty(value)) {
                            return nestedAcc;
                        }
                        return tslib_1.__assign(tslib_1.__assign({}, nestedAcc), (_b = {}, _b[key] = value, _b));
                    }, {});
                    return tslib_1.__assign(tslib_1.__assign({}, acc), nestedFilterValue);
                }
                if (object_1.isEmpty(filterValue)) {
                    return acc;
                }
                return tslib_1.__assign(tslib_1.__assign({}, acc), (_c = {}, _c[queryKey] = filterValue, _c));
            }, {});
            filter = flat_1.flatten(filter, { delimiter: "__", safe: true });
            var search = qs.stringify(tslib_1.__assign(tslib_1.__assign(tslib_1.__assign({}, _this.otherQuery), filter), pagination), { arrayFormat: "comma" });
            _this.location.pushQuery(search);
        };
        this.clear = function () {
            var search = qs.stringify(tslib_1.__assign({}, _this.otherQuery), { arrayFormat: "comma" });
            _this.location.pushQuery(search);
        };
        this.onInitOrUpdate = function () {
            _this.updateFilterFromLocation();
            if (lodash_isequal_1.default(_this.prevPagination, _this.getPagination())) {
                return;
            }
            _this.subscribers.forEach(function (action) {
                action(_this.getPagination());
            });
            _this.prevPagination = _this.getPagination();
        };
        this.updateFilterFromLocation = function (browserQueryProps) {
            var browserQuery = (browserQueryProps !== null && browserQueryProps !== void 0 ? browserQueryProps : qs.parse(_this.location.search, { arrayFormat: "comma" }));
            _this.keys.forEach(function (key) {
                var isNested = query_extractor_1.QueryExtractor(_this).isNested(key);
                if (isNested) {
                    var queryField = _this[key];
                    queryField.updateFilterFromLocation(browserQuery);
                }
                else {
                    var queryProperty = _this[key];
                    var propertyFilter = queryProperty.keys.reduce(function (acc, propertyKey) {
                        var _a;
                        var browserQueryKey = "" + _this.prefix + (_this.prefix && "_") + _this.parent + (_this.parent && ".") + key + "__" + propertyKey;
                        var aliasQueryKey = _this.alias[key] + "__" + propertyKey;
                        var browserQueryValue = browserQuery[browserQueryKey];
                        var aliasQueryValue = browserQuery[aliasQueryKey];
                        if (Object.prototype.hasOwnProperty.call(browserQuery, browserQueryKey)) {
                            delete browserQuery[browserQueryKey];
                        }
                        if (Object.prototype.hasOwnProperty.call(browserQuery, aliasQueryKey)) {
                            delete browserQuery[aliasQueryKey];
                        }
                        return tslib_1.__assign(tslib_1.__assign({}, acc), (_a = {}, _a[propertyKey] = (aliasQueryValue !== null && aliasQueryValue !== void 0 ? aliasQueryValue : browserQueryValue), _a));
                    }, {});
                    queryProperty.setFilter(propertyFilter);
                }
            }, {});
            _this.page(browserQuery[_this.pageKey]);
            _this.take(browserQuery[_this.takeKey]);
            _this.otherQuery = browserQuery;
        };
        this.getPaginationFilter = function () {
            return _this.keys.reduce(function (acc, key) {
                var _a, _b;
                var isNested = query_extractor_1.QueryExtractor(_this).isNested(key);
                if (isNested) {
                    var queryField = _this[key];
                    return tslib_1.__assign(tslib_1.__assign({}, acc), (_a = {}, _a[key] = queryField.getPaginationFilter(), _a));
                }
                else {
                    var queryProperty = _this[key];
                    return !object_1.isEmpty(queryProperty.get())
                        ? tslib_1.__assign(tslib_1.__assign({}, acc), (_b = {}, _b[key] = queryProperty.get(), _b)) : acc;
                }
            }, {});
        };
        this.getPagination = function () {
            return _this.beforeGetPagination(object_1.clearUndefinedValues({
                filter: _this.getPaginationFilter(),
                page: _this.privatePage,
                take: _this.privateTake
            }));
        };
        this.keys = query_extractor_1.QueryExtractor(this).keys;
        this.prefix = (_b = (_a = props) === null || _a === void 0 ? void 0 : _a.prefix, (_b !== null && _b !== void 0 ? _b : constants_1.DEFAULT_STRING));
        this.parent = (_d = (_c = props) === null || _c === void 0 ? void 0 : _c.parent, (_d !== null && _d !== void 0 ? _d : constants_1.DEFAULT_STRING));
        this.alias = (_f = (_e = props) === null || _e === void 0 ? void 0 : _e.alias, (_f !== null && _f !== void 0 ? _f : constants_1.DEFAULT_OBJECT));
        this.beforeGetPagination = (_h = (_g = props) === null || _g === void 0 ? void 0 : _g.beforeGetPagination, (_h !== null && _h !== void 0 ? _h : this.beforeGetPagination));
        this.keys.forEach(function (key) {
            var isNested = query_extractor_1.QueryExtractor(_this).isNested(key);
            if (isNested) {
                _this[key] = new (query_extractor_1.QueryExtractor(_this).Constructor(key))(tslib_1.__assign(tslib_1.__assign({}, props), { parent: key }));
            }
            else {
                _this[key] = new (query_extractor_1.QueryExtractor(_this).Constructor(key))();
            }
        });
        if (!this.parent) {
            this.onInitOrUpdate();
            mobx_1.observe(this.location, "search", this.onInitOrUpdate);
        }
    }
    Object.defineProperty(QueryBase.prototype, "pageKey", {
        get: function () {
            return "" + this.prefix + (this.prefix && "_") + "_page";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QueryBase.prototype, "takeKey", {
        get: function () {
            return "" + this.prefix + (this.prefix && "_") + "_take";
        },
        enumerable: true,
        configurable: true
    });
    return QueryBase;
}());
exports.QueryBase = QueryBase;
//# sourceMappingURL=Query.base.js.map