"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var mobx_1 = require("mobx");
var constants_1 = require("../../../../utils/constants");
var requestList_extractor_1 = require("./requestList.extractor");
var request_1 = require("../request");
var Module_base_1 = require("../../module/Module.base");
var Requests_service_1 = require("../../../services/Requests.service");
var RequestListBase = /** @class */ (function () {
    function RequestListBase(props) {
        var _this = this;
        var _a, _b;
        this.data = mobx_1.observable.array(constants_1.DEFAULT_ARRAY);
        this.isLocalUpdated = false;
        this.page = 0;
        this.take = 1000;
        this.totalItems = 0;
        this.requestService = Module_base_1.ModuleBase.services.get(Requests_service_1.RequestsService);
        this.finishRequestLoading = function () { };
        this.isLoading = new Promise(function (resolve) {
            _this.finishRequestLoading = resolve;
        });
        this.onDelete = function (deletedItem) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
            var filter;
            var _a, _b;
            return tslib_1.__generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        if (!this.isLocalUpdated) return [3 /*break*/, 1];
                        this.data.replace(this.data.filter(function (item) { return item !== deletedItem; }));
                        this.totalItems = this.totalItems - 1;
                        return [3 /*break*/, 3];
                    case 1:
                        filter = (_b = (_a = this.query) === null || _a === void 0 ? void 0 : _a.getPagination(), (_b !== null && _b !== void 0 ? _b : constants_1.DEFAULT_OBJECT));
                        return [4 /*yield*/, this.get(filter)];
                    case 2:
                        _c.sent();
                        _c.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        this.onUpdate = function (updatedItem) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
            var filter;
            var _a, _b;
            return tslib_1.__generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        if (!this.isLocalUpdated) return [3 /*break*/, 1];
                        if (!this.data.includes(updatedItem)) {
                            this.data.unshift(updatedItem);
                            this.totalItems = this.totalItems + 1;
                        }
                        return [3 /*break*/, 3];
                    case 1:
                        filter = (_b = (_a = this.query) === null || _a === void 0 ? void 0 : _a.getPagination(), (_b !== null && _b !== void 0 ? _b : constants_1.DEFAULT_OBJECT));
                        return [4 /*yield*/, this.get(filter)];
                    case 2:
                        _c.sent();
                        _c.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        this.get = function (filter) {
            if (filter === void 0) { filter = constants_1.DEFAULT_OBJECT; }
            return tslib_1.__awaiter(_this, void 0, void 0, function () {
                var data, newItems, error_1;
                var _this = this;
                var _a, _b;
                return tslib_1.__generator(this, function (_c) {
                    switch (_c.label) {
                        case 0:
                            _c.trys.push([0, 2, , 3]);
                            return [4 /*yield*/, this.getRequest.send({ input: filter })];
                        case 1:
                            data = _c.sent();
                            newItems = data.items.map(function (item) { return new _this.ItemConstructor(tslib_1.__assign(tslib_1.__assign({}, item), { onDelete: _this.onUpdate, onUpdate: _this.onUpdate })); });
                            this.data.replace(newItems);
                            this.page = data.page;
                            this.take = data.take;
                            this.totalItems = data.totalItems;
                            this.finishRequestLoading();
                            return [3 /*break*/, 3];
                        case 2:
                            error_1 = _c.sent();
                            console.error((_b = (_a = error_1).toJSON) === null || _b === void 0 ? void 0 : _b.call(_a));
                            this.finishRequestLoading();
                            return [3 /*break*/, 3];
                        case 3: return [2 /*return*/];
                    }
                });
            });
        };
        this.add = function (data) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
            var item, error_2;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        item = new this.ItemConstructor();
                        item.updateListRegistration({
                            onDelete: this.onDelete,
                            onUpdate: this.onUpdate
                        });
                        return [4 /*yield*/, item.create(data)];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        error_2 = _a.sent();
                        console.error(error_2);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        this.addEmpty = function () {
            try {
                var item = new _this.ItemConstructor();
                item.updateListRegistration({
                    onDelete: _this.onDelete,
                    onUpdate: _this.onUpdate
                });
                return item;
            }
            catch (error) {
                console.error(error);
            }
            return constants_1.DEFAULT_OBJECT;
        };
        var gql = requestList_extractor_1.RequestListExtractor(this).query;
        this.ItemConstructor = requestList_extractor_1.RequestListExtractor(this).ItemConstructor;
        this.getRequest = new request_1.default({
            query: gql.getList
        });
        if (props) {
            this.isLocalUpdated = (_a = props.isLocalUpdated, (_a !== null && _a !== void 0 ? _a : this.isLocalUpdated));
            this.query = props.query;
            (_b = this.query) === null || _b === void 0 ? void 0 : _b.subscribe(function (input) {
                var _a, _b;
                return _this.get(tslib_1.__assign(tslib_1.__assign({}, input), { page: (_a = input.page, (_a !== null && _a !== void 0 ? _a : _this.page)), take: (_b = input.take, (_b !== null && _b !== void 0 ? _b : _this.take)) }));
            });
        }
        this.requestService.registerRequest(this.isLoading);
    }
    tslib_1.__decorate([
        mobx_1.observable,
        tslib_1.__metadata("design:type", Object)
    ], RequestListBase.prototype, "isLocalUpdated", void 0);
    tslib_1.__decorate([
        mobx_1.observable,
        tslib_1.__metadata("design:type", Number)
    ], RequestListBase.prototype, "page", void 0);
    tslib_1.__decorate([
        mobx_1.observable,
        tslib_1.__metadata("design:type", Number)
    ], RequestListBase.prototype, "take", void 0);
    tslib_1.__decorate([
        mobx_1.observable,
        tslib_1.__metadata("design:type", Number)
    ], RequestListBase.prototype, "totalItems", void 0);
    tslib_1.__decorate([
        mobx_1.action,
        tslib_1.__metadata("design:type", Object)
    ], RequestListBase.prototype, "onDelete", void 0);
    tslib_1.__decorate([
        mobx_1.action,
        tslib_1.__metadata("design:type", Object)
    ], RequestListBase.prototype, "onUpdate", void 0);
    tslib_1.__decorate([
        mobx_1.action,
        tslib_1.__metadata("design:type", Object)
    ], RequestListBase.prototype, "get", void 0);
    tslib_1.__decorate([
        mobx_1.action,
        tslib_1.__metadata("design:type", Object)
    ], RequestListBase.prototype, "add", void 0);
    tslib_1.__decorate([
        mobx_1.action,
        tslib_1.__metadata("design:type", Object)
    ], RequestListBase.prototype, "addEmpty", void 0);
    return RequestListBase;
}());
exports.RequestListBase = RequestListBase;
//# sourceMappingURL=RequestList.base.js.map