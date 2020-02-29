"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const converters_1 = require("../../../utils/converters");
const queryField_decorator_1 = require("./field/queryField.decorator");
const QueryField_base_1 = require("./field/QueryField.base");
exports.isIDQueryField = (constructor) => constructor === IDQueryField;
class IDQueryField extends QueryField_base_1.QueryFieldBase {
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
exports.IDQueryField = IDQueryField;
//# sourceMappingURL=IDQueryField.js.map