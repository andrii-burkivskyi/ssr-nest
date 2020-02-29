"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var converters_1 = require("../../../utils/converters");
var queryField_decorator_1 = require("./field/queryField.decorator");
var QueryField_base_1 = require("./field/QueryField.base");
exports.isIDQueryField = function (constructor) {
    return constructor === IDQueryField;
};
var IDQueryField = /** @class */ (function (_super) {
    tslib_1.__extends(IDQueryField, _super);
    function IDQueryField() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    tslib_1.__decorate([
        queryField_decorator_1.QueryProperty(converters_1.ensureNumber),
        tslib_1.__metadata("design:type", Function)
    ], IDQueryField.prototype, "equal", void 0);
    tslib_1.__decorate([
        queryField_decorator_1.QueryProperty(converters_1.ensureNumber),
        tslib_1.__metadata("design:type", Function)
    ], IDQueryField.prototype, "not_equal", void 0);
    tslib_1.__decorate([
        queryField_decorator_1.QueryProperty(converters_1.ensureArrayOfNumbers),
        tslib_1.__metadata("design:type", Function)
    ], IDQueryField.prototype, "in", void 0);
    tslib_1.__decorate([
        queryField_decorator_1.QueryProperty(converters_1.ensureArrayOfNumbers),
        tslib_1.__metadata("design:type", Function)
    ], IDQueryField.prototype, "not_in", void 0);
    return IDQueryField;
}(QueryField_base_1.QueryFieldBase));
exports.IDQueryField = IDQueryField;
//# sourceMappingURL=IDQueryField.js.map