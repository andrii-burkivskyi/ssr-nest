"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var service_decorator_1 = require("../../core/decorators/service/service.decorator");
var RequestsService = /** @class */ (function () {
    function RequestsService() {
        var _this = this;
        this.requests = [];
        this.registerRequest = function (request) {
            _this.requests.push(request);
        };
        this.initRequestWait = Promise.all(this.requests);
    }
    RequestsService = tslib_1.__decorate([
        service_decorator_1.Service('RequestsService', { isGlobal: true })
    ], RequestsService);
    return RequestsService;
}());
exports.RequestsService = RequestsService;
//# sourceMappingURL=Requests.service.js.map