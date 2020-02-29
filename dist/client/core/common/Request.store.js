"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const mobx_1 = require("mobx");
const axios_1 = require("axios");
const pathToRegexp = require("path-to-regexp");
const qs = require("query-string");
const constants_1 = require("../../utils/constants");
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
class RequestStore {
    constructor(props) {
        this.method = RequestStore.method.GET;
        this.timeout = 60000;
        this.cancelTokenSource = axios_1.default.CancelToken.source();
        this.state = RequestStore.state.INIT;
        this.query = () => { return constants_1.DEFAULT_OBJECT; };
        this.params = () => { return constants_1.DEFAULT_OBJECT; };
        this.body = constants_1.DEFAULT_FUNCTION;
        this.send = async () => {
            this.state = RequestStore.state.LOADING;
            try {
                const response = await axios_1.default({
                    method: this.method,
                    url: this.url,
                    headers: this.headers,
                    data: this.body(),
                    cancelToken: this.cancelTokenSource.token
                });
                this.data = "data" in response.data ? response.data.data : response.data;
                this.state = RequestStore.state.LOADED;
            }
            catch (error) {
                if (axios_1.default.isCancel(error)) {
                    this.state = RequestStore.state.CANCELED;
                }
                else {
                    this.state = RequestStore.state.ERROR;
                }
            }
        };
        this.watch = () => {
            this.send();
            this.shouldRefresh.observe(() => this.send());
        };
        this.start = () => {
            const recursion = async () => {
                await this.send();
                setTimeout(recursion, this.timeout);
            };
            recursion();
        };
        const { shouldRefresh = () => constants_1.DEFAULT_STRING, router, endpoint } = props;
        mobx_1.set(this, props);
        this.endpoint = endpoint;
        this.router = router;
        this.shouldRefresh = mobx_1.computed(shouldRefresh);
    }
    get url() {
        const [baseUrl = ""] = this.endpoint.match(/^.+?[^\/:](?=[?\/]|$)/) || [];
        const location = this.endpoint.replace(baseUrl, "");
        const locationWithParams = pathToRegexp.compile(location)(this.params());
        const queryString = qs.stringify(this.query());
        return `${baseUrl}${locationWithParams}${queryString ? "?" : ""}${queryString}`;
    }
    get isLoading() { return this.state === RequestStore.state.LOADING; }
}
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
exports.default = RequestStore;
//# sourceMappingURL=Request.store.js.map