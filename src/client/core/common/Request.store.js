"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var mobx_1 = require("mobx");
var axios_1 = require("axios");
var pathToRegexp = require("path-to-regexp");
var qs = require("query-string");
var constants_1 = require("../../utils/constants");
var RequestMethod;
(function (RequestMethod) {
    RequestMethod["GET"] = "get";
    RequestMethod["POST"] = "post";
    RequestMethod["UPDATE"] = "update";
})(RequestMethod || (RequestMethod = {}));
var RequestState;
(function (RequestState) {
    RequestState["INIT"] = "init";
    RequestState["LOADING"] = "loading";
    RequestState["LOADED"] = "loaded";
    RequestState["CANCELED"] = "canceled";
    RequestState["ERROR"] = "error";
})(RequestState || (RequestState = {}));
var RequestStore = /** @class */ (function () {
    function RequestStore(props) {
        var _this = this;
        this.method = RequestStore.method.GET;
        this.timeout = 60000;
        this.cancelTokenSource = axios_1.default.CancelToken.source();
        this.state = RequestStore.state.INIT;
        this.query = function () { return constants_1.DEFAULT_OBJECT; };
        this.params = function () { return constants_1.DEFAULT_OBJECT; };
        this.body = constants_1.DEFAULT_FUNCTION;
        this.send = function () { return tslib_1.__awaiter(_this, void 0, void 0, function () {
            var response, error_1;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.state = RequestStore.state.LOADING;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, axios_1.default({
                                method: this.method,
                                url: this.url,
                                headers: this.headers,
                                data: this.body(),
                                cancelToken: this.cancelTokenSource.token
                            })];
                    case 2:
                        response = _a.sent();
                        this.data = "data" in response.data ? response.data.data : response.data;
                        this.state = RequestStore.state.LOADED;
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _a.sent();
                        if (axios_1.default.isCancel(error_1)) {
                            this.state = RequestStore.state.CANCELED;
                        }
                        else {
                            this.state = RequestStore.state.ERROR;
                        }
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        }); };
        this.watch = function () {
            _this.send();
            _this.shouldRefresh.observe(function () { return _this.send(); });
        };
        this.start = function () {
            var recursion = function () { return tslib_1.__awaiter(_this, void 0, void 0, function () {
                return tslib_1.__generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.send()];
                        case 1:
                            _a.sent();
                            setTimeout(recursion, this.timeout);
                            return [2 /*return*/];
                    }
                });
            }); };
            recursion();
        };
        var _a = props.shouldRefresh, shouldRefresh = _a === void 0 ? function () { return constants_1.DEFAULT_STRING; } : _a, router = props.router, endpoint = props.endpoint;
        mobx_1.set(this, props);
        this.endpoint = endpoint;
        this.router = router;
        this.shouldRefresh = mobx_1.computed(shouldRefresh);
    }
    Object.defineProperty(RequestStore.prototype, "url", {
        get: function () {
            var _a = (this.endpoint.match(/^.+?[^\/:](?=[?\/]|$)/) || [])[0], baseUrl = _a === void 0 ? "" : _a;
            var location = this.endpoint.replace(baseUrl, "");
            var locationWithParams = pathToRegexp.compile(location)(this.params());
            var queryString = qs.stringify(this.query());
            return "" + baseUrl + locationWithParams + (queryString ? "?" : "") + queryString;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RequestStore.prototype, "isLoading", {
        get: function () { return this.state === RequestStore.state.LOADING; },
        enumerable: true,
        configurable: true
    });
    RequestStore.method = RequestMethod;
    RequestStore.state = RequestState;
    tslib_1.__decorate([
        mobx_1.observable,
        tslib_1.__metadata("design:type", String)
    ], RequestStore.prototype, "endpoint", void 0);
    tslib_1.__decorate([
        mobx_1.observable,
        tslib_1.__metadata("design:type", Object)
    ], RequestStore.prototype, "method", void 0);
    tslib_1.__decorate([
        mobx_1.observable,
        tslib_1.__metadata("design:type", String)
    ], RequestStore.prototype, "router", void 0);
    tslib_1.__decorate([
        mobx_1.observable,
        tslib_1.__metadata("design:type", Number)
    ], RequestStore.prototype, "timeout", void 0);
    tslib_1.__decorate([
        mobx_1.observable,
        tslib_1.__metadata("design:type", Object)
    ], RequestStore.prototype, "cancelTokenSource", void 0);
    tslib_1.__decorate([
        mobx_1.observable,
        tslib_1.__metadata("design:type", String)
    ], RequestStore.prototype, "state", void 0);
    tslib_1.__decorate([
        mobx_1.observable,
        tslib_1.__metadata("design:type", Object)
    ], RequestStore.prototype, "headers", void 0);
    tslib_1.__decorate([
        mobx_1.observable,
        tslib_1.__metadata("design:type", Function)
    ], RequestStore.prototype, "query", void 0);
    tslib_1.__decorate([
        mobx_1.observable,
        tslib_1.__metadata("design:type", Function)
    ], RequestStore.prototype, "params", void 0);
    tslib_1.__decorate([
        mobx_1.observable,
        tslib_1.__metadata("design:type", Function)
    ], RequestStore.prototype, "body", void 0);
    tslib_1.__decorate([
        mobx_1.observable.shallow,
        tslib_1.__metadata("design:type", Object)
    ], RequestStore.prototype, "data", void 0);
    tslib_1.__decorate([
        mobx_1.computed,
        tslib_1.__metadata("design:type", String),
        tslib_1.__metadata("design:paramtypes", [])
    ], RequestStore.prototype, "url", null);
    tslib_1.__decorate([
        mobx_1.computed,
        tslib_1.__metadata("design:type", Boolean),
        tslib_1.__metadata("design:paramtypes", [])
    ], RequestStore.prototype, "isLoading", null);
    tslib_1.__decorate([
        mobx_1.action,
        tslib_1.__metadata("design:type", Object)
    ], RequestStore.prototype, "send", void 0);
    tslib_1.__decorate([
        mobx_1.action,
        tslib_1.__metadata("design:type", Object)
    ], RequestStore.prototype, "watch", void 0);
    tslib_1.__decorate([
        mobx_1.action,
        tslib_1.__metadata("design:type", Object)
    ], RequestStore.prototype, "start", void 0);
    return RequestStore;
}());
exports.default = RequestStore;
//# sourceMappingURL=Request.store.js.map