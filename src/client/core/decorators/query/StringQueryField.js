"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var converters_1 = require("../../../utils/converters");
var queryField_decorator_1 = require("./field/queryField.decorator");
var QueryField_base_1 = require("./field/QueryField.base");
exports.isStringQueryField = function (constructor) {
    return constructor === StringQueryField;
};
var StringQueryField = /** @class */ (function (_super) {
    tslib_1.__extends(StringQueryField, _super);
    function StringQueryField() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    tslib_1.__decorate([
        queryField_decorator_1.QueryProperty(converters_1.ensureString),
        tslib_1.__metadata("design:type", Function)
    ], StringQueryField.prototype, "equal", void 0);
    tslib_1.__decorate([
        queryField_decorator_1.QueryProperty(converters_1.ensureString),
        tslib_1.__metadata("design:type", Function)
    ], StringQueryField.prototype, "not_equal", void 0);
    tslib_1.__decorate([
        queryField_decorator_1.QueryProperty(converters_1.ensureArrayOfStrings),
        tslib_1.__metadata("design:type", Function)
    ], StringQueryField.prototype, "in", void 0);
    tslib_1.__decorate([
        queryField_decorator_1.QueryProperty(converters_1.ensureArrayOfStrings),
        tslib_1.__metadata("design:type", Function)
    ], StringQueryField.prototype, "not_in", void 0);
    tslib_1.__decorate([
        queryField_decorator_1.QueryProperty(converters_1.ensureString),
        tslib_1.__metadata("design:type", Function)
    ], StringQueryField.prototype, "contains", void 0);
    tslib_1.__decorate([
        queryField_decorator_1.QueryProperty(converters_1.ensureString),
        tslib_1.__metadata("design:type", Function)
    ], StringQueryField.prototype, "not_contains", void 0);
    return StringQueryField;
}(QueryField_base_1.QueryFieldBase));
exports.StringQueryField = StringQueryField;
//# sourceMappingURL=StringQueryField.js.map