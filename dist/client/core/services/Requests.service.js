"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const service_decorator_1 = require("../../core/decorators/service/service.decorator");
let RequestsService = class RequestsService {
    constructor() {
        this.requests = [];
        this.registerRequest = (request) => {
            this.requests.push(request);
        };
        this.initRequestWait = Promise.all(this.requests);
    }
};
RequestsService = tslib_1.__decorate([
    service_decorator_1.Service('RequestsService', { isGlobal: true })
], RequestsService);
exports.RequestsService = RequestsService;
//# sourceMappingURL=Requests.service.js.map