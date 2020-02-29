"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var mobx_1 = require("mobx");
var mobx_utils_1 = require("mobx-utils");
var history_1 = require("history");
var service_decorator_1 = require("../../core/decorators/service/service.decorator");
var url_1 = require("../../utils/url");
var constants_1 = require("../../utils/constants");
var LocationService = /** @class */ (function () {
    function LocationService() {
        var _this = this;
        this.history = global
            ? history_1.createMemoryHistory()
            : history_1.createBrowserHistory();
        this.pathname = this.history.location.pathname;
        this.search = this.history.location.search;
        this.hash = this.history.location.hash;
        this.state = this.history.location.state;
        this.historyListener = function (location) {
            _this.pathname = location.pathname;
            _this.search = location.search;
            _this.hash = location.hash;
            _this.state = location.state;
        };
        this.isValidRoute = mobx_utils_1.createTransformer(function (props) {
            return Boolean(url_1.matchUrl(_this.pathname, props.route, props.options));
        });
        this.routePrams = mobx_utils_1.createTransformer(function (route) {
            var _a;
            return _a = url_1.matchUrl(_this.pathname, route, { end: false }), (_a !== null && _a !== void 0 ? _a : constants_1.DEFAULT_OBJECT);
        });
        this.push = function (to, state) {
            _this.history.push(to, state);
        };
        this.pushWithParams = function (to, params, state) {
            if (params === void 0) { params = constants_1.DEFAULT_OBJECT; }
            var path = url_1.buildUrl(to, params);
            _this.history.push(path, state);
        };
        this.pushQuery = function (query) {
            _this.history.push(_this.pathname + "?" + query);
        };
        this.history.listen(this.historyListener);
    }
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
    return LocationService;
}());
exports.LocationService = LocationService;
//# sourceMappingURL=Location.service.js.map