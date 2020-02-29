"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mobx_1 = require("mobx");
const qs = require("query-string");
const flat_1 = require("flat");
const lodash_isequal_1 = require("lodash.isequal");
const constants_1 = require("../../../../utils/constants");
const converters_1 = require("../../../../utils/converters");
const object_1 = require("../../../../utils/object");
const Module_base_1 = require("../../../../core/decorators/module/Module.base");
const Location_service_1 = require("../../../../core/services/Location.service");
const query_extractor_1 = require("./query.extractor");
class QueryBase {
    constructor(props) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        this.parent = constants_1.DEFAULT_STRING;
        this.subscribers = [];
        this.location = Module_base_1.ModuleBase.services.get(Location_service_1.LocationService);
        this.otherQuery = constants_1.DEFAULT_OBJECT;
        this.beforeGetPagination = (filter) => filter;
        this.prevPagination = constants_1.DEFAULT_OBJECT;
        this.page = (page) => { this.privatePage = converters_1.ensureNumber(page); };
        this.take = (take) => { this.privateTake = converters_1.ensureNumber(take); };
        this.subscribe = (action) => {
            this.prevPagination = this.getPagination();
            action(this.getPagination());
            this.subscribers.push(action);
        };
        this.push = () => {
            const pagination = { [this.pageKey]: this.privatePage, [this.takeKey]: this.privateTake };
            let filter = Object.entries(this.getPaginationFilter()).reduce((acc, [filterKey, filterValue]) => {
                var _a;
                const queryKey = (_a = this.alias[filterKey], (_a !== null && _a !== void 0 ? _a : `${this.prefix}${this.prefix && "_"}${filterKey}`));
                const isNested = query_extractor_1.QueryExtractor(this).isNested(filterKey);
                if (isNested) {
                    let nestedFilterValue = flat_1.flatten({ [queryKey]: filterValue }, { delimiter: ".", maxDepth: 2, safe: true });
                    nestedFilterValue = Object.entries(nestedFilterValue).reduce((nestedAcc, [key, value]) => {
                        if (object_1.isEmpty(value)) {
                            return nestedAcc;
                        }
                        return Object.assign(Object.assign({}, nestedAcc), { [key]: value });
                    }, {});
                    return Object.assign(Object.assign({}, acc), nestedFilterValue);
                }
                if (object_1.isEmpty(filterValue)) {
                    return acc;
                }
                return Object.assign(Object.assign({}, acc), { [queryKey]: filterValue });
            }, {});
            filter = flat_1.flatten(filter, { delimiter: "__", safe: true });
            const search = qs.stringify(Object.assign(Object.assign(Object.assign({}, this.otherQuery), filter), pagination), { arrayFormat: "comma" });
            this.location.pushQuery(search);
        };
        this.clear = () => {
            const search = qs.stringify(Object.assign({}, this.otherQuery), { arrayFormat: "comma" });
            this.location.pushQuery(search);
        };
        this.onInitOrUpdate = () => {
            this.updateFilterFromLocation();
            if (lodash_isequal_1.default(this.prevPagination, this.getPagination())) {
                return;
            }
            this.subscribers.forEach((action) => {
                action(this.getPagination());
            });
            this.prevPagination = this.getPagination();
        };
        this.updateFilterFromLocation = (browserQueryProps) => {
            const browserQuery = (browserQueryProps !== null && browserQueryProps !== void 0 ? browserQueryProps : qs.parse(this.location.search, { arrayFormat: "comma" }));
            this.keys.forEach((key) => {
                const isNested = query_extractor_1.QueryExtractor(this).isNested(key);
                if (isNested) {
                    const queryField = this[key];
                    queryField.updateFilterFromLocation(browserQuery);
                }
                else {
                    const queryProperty = this[key];
                    const propertyFilter = queryProperty.keys.reduce((acc, propertyKey) => {
                        const browserQueryKey = `${this.prefix}${this.prefix && "_"}${this.parent}${this.parent && "."}${key}__${propertyKey}`;
                        const aliasQueryKey = `${this.alias[key]}__${propertyKey}`;
                        const browserQueryValue = browserQuery[browserQueryKey];
                        const aliasQueryValue = browserQuery[aliasQueryKey];
                        if (Object.prototype.hasOwnProperty.call(browserQuery, browserQueryKey)) {
                            delete browserQuery[browserQueryKey];
                        }
                        if (Object.prototype.hasOwnProperty.call(browserQuery, aliasQueryKey)) {
                            delete browserQuery[aliasQueryKey];
                        }
                        return Object.assign(Object.assign({}, acc), { [propertyKey]: (aliasQueryValue !== null && aliasQueryValue !== void 0 ? aliasQueryValue : browserQueryValue) });
                    }, {});
                    queryProperty.setFilter(propertyFilter);
                }
            }, {});
            this.page(browserQuery[this.pageKey]);
            this.take(browserQuery[this.takeKey]);
            this.otherQuery = browserQuery;
        };
        this.getPaginationFilter = () => {
            return this.keys.reduce((acc, key) => {
                const isNested = query_extractor_1.QueryExtractor(this).isNested(key);
                if (isNested) {
                    const queryField = this[key];
                    return Object.assign(Object.assign({}, acc), { [key]: queryField.getPaginationFilter() });
                }
                else {
                    const queryProperty = this[key];
                    return !object_1.isEmpty(queryProperty.get())
                        ? Object.assign(Object.assign({}, acc), { [key]: queryProperty.get() }) : acc;
                }
            }, {});
        };
        this.getPagination = () => {
            return this.beforeGetPagination(object_1.clearUndefinedValues({
                filter: this.getPaginationFilter(),
                page: this.privatePage,
                take: this.privateTake
            }));
        };
        this.keys = query_extractor_1.QueryExtractor(this).keys;
        this.prefix = (_b = (_a = props) === null || _a === void 0 ? void 0 : _a.prefix, (_b !== null && _b !== void 0 ? _b : constants_1.DEFAULT_STRING));
        this.parent = (_d = (_c = props) === null || _c === void 0 ? void 0 : _c.parent, (_d !== null && _d !== void 0 ? _d : constants_1.DEFAULT_STRING));
        this.alias = (_f = (_e = props) === null || _e === void 0 ? void 0 : _e.alias, (_f !== null && _f !== void 0 ? _f : constants_1.DEFAULT_OBJECT));
        this.beforeGetPagination = (_h = (_g = props) === null || _g === void 0 ? void 0 : _g.beforeGetPagination, (_h !== null && _h !== void 0 ? _h : this.beforeGetPagination));
        this.keys.forEach((key) => {
            const isNested = query_extractor_1.QueryExtractor(this).isNested(key);
            if (isNested) {
                this[key] = new (query_extractor_1.QueryExtractor(this).Constructor(key))(Object.assign(Object.assign({}, props), { parent: key }));
            }
            else {
                this[key] = new (query_extractor_1.QueryExtractor(this).Constructor(key))();
            }
        });
        if (!this.parent) {
            this.onInitOrUpdate();
            mobx_1.observe(this.location, "search", this.onInitOrUpdate);
        }
    }
    get pageKey() {
        return `${this.prefix}${this.prefix && "_"}_page`;
    }
    get takeKey() {
        return `${this.prefix}${this.prefix && "_"}_take`;
    }
}
exports.QueryBase = QueryBase;
//# sourceMappingURL=Query.base.js.map