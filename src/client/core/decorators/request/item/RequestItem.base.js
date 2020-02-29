"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
require("reflect-metadata");
var mobx_1 = require("mobx");
var request_1 = require("../request");
var requestItem_extractor_1 = require("./requestItem.extractor");
var RequestItemBase = /** @class */ (function () {
    function RequestItemBase(data) {
        var _this = this;
        this.set = function (data) {
            data && mobx_1.set(_this, tslib_1.__assign(tslib_1.__assign({}, _this.emptyProps), data));
            return _this;
        };
        this.clear = function () {
            mobx_1.set(_this, _this.emptyProps);
            return _this;
        };
        this.get = function (props) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
            var data, error_1;
            var _a, _b;
            return tslib_1.__generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _c.trys.push([0, 2, , 4]);
                        return [4 /*yield*/, this.getRequest.send(props)];
                    case 1:
                        data = _c.sent();
                        this.set(data);
                        return [3 /*break*/, 4];
                    case 2:
                        error_1 = _c.sent();
                        return [4 /*yield*/, ((_b = (_a = this).onDelete) === null || _b === void 0 ? void 0 : _b.call(_a, this))];
                    case 3:
                        _c.sent();
                        this.clear();
                        console.error(error_1);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        }); };
        this.create = function (props) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
            var data, error_2;
            var _a, _b;
            return tslib_1.__generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _c.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.createRequest.send({ input: props })];
                    case 1:
                        data = _c.sent();
                        this.set(data);
                        (_b = (_a = this).onUpdate) === null || _b === void 0 ? void 0 : _b.call(_a, this);
                        return [3 /*break*/, 3];
                    case 2:
                        error_2 = _c.sent();
                        this.clear();
                        console.error(error_2);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        this.update = function (props) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
            var mergedProps, data, error_3, errorWithStatus, errorStatus;
            var _a, _b, _c, _d, _e, _f, _g;
            return tslib_1.__generator(this, function (_h) {
                switch (_h.label) {
                    case 0:
                        _h.trys.push([0, 2, , 3]);
                        mergedProps = tslib_1.__assign(tslib_1.__assign({}, this.props), props);
                        return [4 /*yield*/, this.updateRequest.send({ input: mergedProps })];
                    case 1:
                        data = _h.sent();
                        this.set(data);
                        (_b = (_a = this).onUpdate) === null || _b === void 0 ? void 0 : _b.call(_a, this);
                        return [3 /*break*/, 3];
                    case 2:
                        error_3 = _h.sent();
                        if (Array.isArray(error_3)) {
                            errorWithStatus = error_3.find(function (e) { var _a, _b, _c; return (_c = (_b = (_a = e) === null || _a === void 0 ? void 0 : _a.extensions) === null || _b === void 0 ? void 0 : _b.exception) === null || _c === void 0 ? void 0 : _c.status; });
                            errorStatus = (_e = (_d = (_c = errorWithStatus) === null || _c === void 0 ? void 0 : _c.extensions) === null || _d === void 0 ? void 0 : _d.exception) === null || _e === void 0 ? void 0 : _e.status;
                            if (errorStatus === 404) {
                                (_g = (_f = this).onDelete) === null || _g === void 0 ? void 0 : _g.call(_f, this);
                                this.clear();
                            }
                        }
                        console.error(error_3);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        this.delete = function () { return tslib_1.__awaiter(_this, void 0, void 0, function () {
            var error_4;
            var _a, _b;
            return tslib_1.__generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _c.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, this.deleteRequest.send({ input: this.primaryProps })];
                    case 1:
                        _c.sent();
                        return [4 /*yield*/, ((_b = (_a = this).onDelete) === null || _b === void 0 ? void 0 : _b.call(_a, this))];
                    case 2:
                        _c.sent();
                        this.clear();
                        return [3 /*break*/, 4];
                    case 3:
                        error_4 = _c.sent();
                        console.error(error_4);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        }); };
        this.updateListRegistration = function (props) {
            _this.onDelete = props.onDelete;
            _this.onUpdate = props.onUpdate;
        };
        var gql = requestItem_extractor_1.RequestItemExtractor(this).query;
        this.keys = requestItem_extractor_1.RequestItemExtractor(this).keys;
        this._itemServiceName = requestItem_extractor_1.RequestItemExtractor(this).name;
        this.getRequest = new request_1.default({ query: gql.get });
        this.createRequest = new request_1.default({ query: gql.create });
        this.updateRequest = new request_1.default({ query: gql.update });
        this.deleteRequest = new request_1.default({ query: gql.delete });
        this.set((data !== null && data !== void 0 ? data : null));
    }
    Object.defineProperty(RequestItemBase.prototype, "emptyProps", {
        get: function () {
            return this.keys.reduce(function (acc, key) {
                var _a;
                return (tslib_1.__assign(tslib_1.__assign({}, acc), (_a = {}, _a[key] = undefined, _a)));
            }, {});
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RequestItemBase.prototype, "props", {
        get: function () {
            var _this = this;
            return this.keys.reduce(function (acc, key) {
                var _a;
                return (tslib_1.__assign(tslib_1.__assign({}, acc), (_a = {}, _a[key] = _this[key], _a)));
            }, {});
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RequestItemBase.prototype, "primaryProps", {
        get: function () {
            var _this = this;
            return this.keys.reduce(function (acc, key) {
                var _a;
                var isPrimary = requestItem_extractor_1.RequestItemExtractor(_this).isPrimary(key);
                if (isPrimary) {
                    return tslib_1.__assign(tslib_1.__assign({}, acc), (_a = {}, _a[key] = _this[key], _a));
                }
                return acc;
            }, {});
        },
        enumerable: true,
        configurable: true
    });
    tslib_1.__decorate([
        mobx_1.action,
        tslib_1.__metadata("design:type", Object)
    ], RequestItemBase.prototype, "set", void 0);
    tslib_1.__decorate([
        mobx_1.action,
        tslib_1.__metadata("design:type", Object)
    ], RequestItemBase.prototype, "clear", void 0);
    tslib_1.__decorate([
        mobx_1.action,
        tslib_1.__metadata("design:type", Object)
    ], RequestItemBase.prototype, "get", void 0);
    tslib_1.__decorate([
        mobx_1.action,
        tslib_1.__metadata("design:type", Object)
    ], RequestItemBase.prototype, "create", void 0);
    tslib_1.__decorate([
        mobx_1.action,
        tslib_1.__metadata("design:type", Object)
    ], RequestItemBase.prototype, "update", void 0);
    tslib_1.__decorate([
        mobx_1.action,
        tslib_1.__metadata("design:type", Object)
    ], RequestItemBase.prototype, "delete", void 0);
    tslib_1.__decorate([
        mobx_1.action,
        tslib_1.__metadata("design:type", Object)
    ], RequestItemBase.prototype, "updateListRegistration", void 0);
    tslib_1.__decorate([
        mobx_1.computed,
        tslib_1.__metadata("design:type", Object),
        tslib_1.__metadata("design:paramtypes", [])
    ], RequestItemBase.prototype, "emptyProps", null);
    tslib_1.__decorate([
        mobx_1.computed,
        tslib_1.__metadata("design:type", Object),
        tslib_1.__metadata("design:paramtypes", [])
    ], RequestItemBase.prototype, "props", null);
    tslib_1.__decorate([
        mobx_1.computed,
        tslib_1.__metadata("design:type", Object),
        tslib_1.__metadata("design:paramtypes", [])
    ], RequestItemBase.prototype, "primaryProps", null);
    return RequestItemBase;
}());
exports.RequestItemBase = RequestItemBase;
//# sourceMappingURL=RequestItem.base.js.map