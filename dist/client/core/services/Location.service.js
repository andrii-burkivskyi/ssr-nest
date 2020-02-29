"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const mobx_1 = require("mobx");
const mobx_utils_1 = require("mobx-utils");
const history_1 = require("history");
const service_decorator_1 = require("../../core/decorators/service/service.decorator");
const url_1 = require("../../utils/url");
const constants_1 = require("../../utils/constants");
let LocationService = class LocationService {
    constructor() {
        this.history = global
            ? history_1.createMemoryHistory()
            : history_1.createBrowserHistory();
        this.pathname = this.history.location.pathname;
        this.search = this.history.location.search;
        this.hash = this.history.location.hash;
        this.state = this.history.location.state;
        this.historyListener = (location) => {
            this.pathname = location.pathname;
            this.search = location.search;
            this.hash = location.hash;
            this.state = location.state;
        };
        this.isValidRoute = mobx_utils_1.createTransformer((props) => {
            return Boolean(url_1.matchUrl(this.pathname, props.route, props.options));
        });
        this.routePrams = mobx_utils_1.createTransformer((route) => {
            var _a;
            return _a = url_1.matchUrl(this.pathname, route, { end: false }), (_a !== null && _a !== void 0 ? _a : constants_1.DEFAULT_OBJECT);
        });
        this.push = (to, state) => {
            this.history.push(to, state);
        };
        this.pushWithParams = (to, params = constants_1.DEFAULT_OBJECT, state) => {
            const path = url_1.buildUrl(to, params);
            this.history.push(path, state);
        };
        this.pushQuery = (query) => {
            this.history.push(`${this.pathname}?${query}`);
        };
        this.history.listen(this.historyListener);
    }
};
tslib_1.__decorate([
    mobx_1.observable,
    tslib_1.__metadata("design:type", String)
], LocationService.prototype, "pathname", void 0);
tslib_1.__decorate([
    mobx_1.observable,
    tslib_1.__metadata("design:type", String)
], LocationService.prototype, "search", void 0);
tslib_1.__decorate([
    mobx_1.observable,
    tslib_1.__metadata("design:type", String)
], LocationService.prototype, "hash", void 0);
tslib_1.__decorate([
    mobx_1.observable,
    tslib_1.__metadata("design:type", Object)
], LocationService.prototype, "state", void 0);
tslib_1.__decorate([
    mobx_1.action,
    tslib_1.__metadata("design:type", Object)
], LocationService.prototype, "historyListener", void 0);
tslib_1.__decorate([
    mobx_1.action,
    tslib_1.__metadata("design:type", Object)
], LocationService.prototype, "push", void 0);
tslib_1.__decorate([
    mobx_1.action,
    tslib_1.__metadata("design:type", Object)
], LocationService.prototype, "pushWithParams", void 0);
tslib_1.__decorate([
    mobx_1.action,
    tslib_1.__metadata("design:type", Object)
], LocationService.prototype, "pushQuery", void 0);
LocationService = tslib_1.__decorate([
    service_decorator_1.Service('LocationService', { isGlobal: true }),
    tslib_1.__metadata("design:paramtypes", [])
], LocationService);
exports.LocationService = LocationService;
//# sourceMappingURL=Location.service.js.map