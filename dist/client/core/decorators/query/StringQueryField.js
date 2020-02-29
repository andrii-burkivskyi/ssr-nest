"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const converters_1 = require("../../../utils/converters");
const queryField_decorator_1 = require("./field/queryField.decorator");
const QueryField_base_1 = require("./field/QueryField.base");
exports.isStringQueryField = (constructor) => constructor === StringQueryField;
class StringQueryField extends QueryField_base_1.QueryFieldBase {
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
exports.StringQueryField = StringQueryField;
//# sourceMappingURL=StringQueryField.js.map