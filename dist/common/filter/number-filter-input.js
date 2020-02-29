"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const type_graphql_1 = require("type-graphql");
const filter_types_1 = require("./filter.types");
let NumberFilterInput = class NumberFilterInput {
};
tslib_1.__decorate([
    type_graphql_1.Field(type => Number, { nullable: true }),
    tslib_1.__metadata("design:type", Number)
], NumberFilterInput.prototype, "equal", void 0);
tslib_1.__decorate([
    type_graphql_1.Field(type => Number, { nullable: true }),
    tslib_1.__metadata("design:type", Number)
], NumberFilterInput.prototype, "not_equal", void 0);
tslib_1.__decorate([
    type_graphql_1.Field(type => [Number], { nullable: true }),
    tslib_1.__metadata("design:type", Array)
], NumberFilterInput.prototype, "in", void 0);
tslib_1.__decorate([
    type_graphql_1.Field(type => [Number], { nullable: true }),
    tslib_1.__metadata("design:type", Array)
], NumberFilterInput.prototype, "not_in", void 0);
tslib_1.__decorate([
    type_graphql_1.Field(type => Number, { nullable: true }),
    tslib_1.__metadata("design:type", Number)
], NumberFilterInput.prototype, "lt", void 0);
tslib_1.__decorate([
    type_graphql_1.Field(type => Number, { nullable: true }),
    tslib_1.__metadata("design:type", Number)
], NumberFilterInput.prototype, "lte", void 0);
tslib_1.__decorate([
    type_graphql_1.Field(type => Number, { nullable: true }),
    tslib_1.__metadata("design:type", Number)
], NumberFilterInput.prototype, "gt", void 0);
tslib_1.__decorate([
    type_graphql_1.Field(type => Number, { nullable: true }),
    tslib_1.__metadata("design:type", Number)
], NumberFilterInput.prototype, "gte", void 0);
tslib_1.__decorate([
    type_graphql_1.Field(type => filter_types_1.Order, { nullable: true }),
    tslib_1.__metadata("design:type", String)
], NumberFilterInput.prototype, "order", void 0);
NumberFilterInput = tslib_1.__decorate([
    type_graphql_1.InputType()
], NumberFilterInput);
exports.NumberFilterInput = NumberFilterInput;
//# sourceMappingURL=number-filter-input.js.map