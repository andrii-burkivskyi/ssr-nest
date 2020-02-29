"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var mobx_1 = require("mobx");
var axios_1 = require("axios");
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
var Request = /** @class */ (function () {
    function Request(props) {
        var _this = this;
        this.endpoint = "http://localhost:3000/graphql";
        this.method = Request.method.POST;
        this.cancelTokenSource = axios_1.default.CancelToken.source();
        this.state = Request.state.INIT;
        this.send = function (variables) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
            var response, error_1;
            var _a, _b, _c, _d, _e, _f, _g;
            return tslib_1.__generator(this, function (_h) {
                switch (_h.label) {
                    case 0:
                        this.state = Request.state.LOADING;
                        _h.label = 1;
                    case 1:
                        _h.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, axios_1.default({
                                method: this.method,
                                url: this.endpoint,
                                headers: this.headers,
                                data: {
                                    query: this.query,
                                    variables: variables
                                },
                                cancelToken: this.cancelTokenSource.token
                            })];
                    case 2:
                        response = _h.sent();
                        this.state = Request.state.LOADED;
                        if ((_b = (_a = response) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.errors) {
                            throw response.data.errors;
                        }
                        return [2 /*return*/, (((_e = (_d = (_c = response) === null || _c === void 0 ? void 0 : _c.data) === null || _d === void 0 ? void 0 : _d.data) === null || _e === void 0 ? void 0 : _e.data) ? response.data.data.data : (_g = (_f = response) === null || _f === void 0 ? void 0 : _f.data) === null || _g === void 0 ? void 0 : _g.data)];
                    case 3:
                        error_1 = _h.sent();
                        if (axios_1.default.isCancel(error_1)) {
                            this.state = Request.state.CANCELED;
                            throw new Error("Request is canceled");
                        }
                        else {
                            this.state = Request.state.ERROR;
                            throw error_1;
                        }
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        }); };
        mobx_1.set(this, props);
    }
    Object.defineProperty(Request.prototype, "isLoading", {
        get: function () { return this.state === Request.state.LOADING; },
        enumerable: true,
        configurable: true
    });
    Request.method = RequestMethod;
    Request.state = RequestState;
    tslib_1.__decorate([
        mobx_1.observable,
        tslib_1.__metadata("design:type", String)
    ], Request.prototype, "endpoint", void 0);
    tslib_1.__decorate([
        mobx_1.observable,
        tslib_1.__metadata("design:type", Object)
    ], Request.prototype, "method", void 0);
    tslib_1.__decorate([
        mobx_1.observable,
        tslib_1.__metadata("design:type", Object)
    ], Request.prototype, "cancelTokenSource", void 0);
    tslib_1.__decorate([
        mobx_1.observable,
        tslib_1.__metadata("design:type", String)
    ], Request.prototype, "state", void 0);
    tslib_1.__decorate([
        mobx_1.observable,
        tslib_1.__metadata("design:type", Object)
    ], Request.prototype, "headers", void 0);
    tslib_1.__decorate([
        mobx_1.observable,
        tslib_1.__metadata("design:type", String)
    ], Request.prototype, "query", void 0);
    tslib_1.__decorate([
        mobx_1.computed,
        tslib_1.__metadata("design:type", Boolean),
        tslib_1.__metadata("design:paramtypes", [])
    ], Request.prototype, "isLoading", null);
    tslib_1.__decorate([
        mobx_1.action,
        tslib_1.__metadata("design:type", Function)
    ], Request.prototype, "send", void 0);
    return Request;
}());
exports.default = Request;
//# sourceMappingURL=request.js.map