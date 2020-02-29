"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var constants_1 = require("../../../../utils/constants");
var object_1 = require("../../../../utils/object");
var queryField_extractor_1 = require("./queryField.extractor");
var QueryFieldBase = /** @class */ (function () {
    function QueryFieldBase() {
        var _this = this;
        this.keys = [];
        this.shouldUpdate = false;
        this.filter = constants_1.DEFAULT_OBJECT;
        this.newFilter = constants_1.DEFAULT_OBJECT;
        this.setFilter = function (filter) {
            _this.filter = _this.keys.reduce(function (acc, key) {
                var _a;
                return (tslib_1.__assign(tslib_1.__assign({}, acc), (_a = {}, _a[key] = queryField_extractor_1.QueryFieldExtractor(_this).conformer(key)(filter[key]), _a)));
            }, {});
            _this.newFilter = constants_1.DEFAULT_OBJECT;
        };
        this.clear = function () {
            _this.newFilter = {};
        };
        this.update = function () { return _this.shouldUpdate = true; };
        this.get = function () {
            var filter;
            if (_this.shouldUpdate || _this.newFilter === constants_1.DEFAULT_OBJECT) {
                filter = object_1.clearUndefinedValues(tslib_1.__assign(tslib_1.__assign({}, _this.filter), _this.newFilter));
            }
            else {
                filter = object_1.clearUndefinedValues(_this.newFilter);
            }
            _this.shouldUpdate = false;
            return filter;
        };
        this.keys = queryField_extractor_1.QueryFieldExtractor(this).keys;
        this.keys.forEach(function (key) {
            _this[key] = function (value) {
                var _a;
                _this.newFilter = tslib_1.__assign(tslib_1.__assign({}, _this.newFilter), (_a = {}, _a[key] = queryField_extractor_1.QueryFieldExtractor(_this).conformer(key)(value), _a));
            };
        });
    }
    return QueryFieldBase;
}());
exports.QueryFieldBase = QueryFieldBase;
//# sourceMappingURL=QueryField.base.js.map