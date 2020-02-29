"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const type_graphql_1 = require("type-graphql");
const filter_types_1 = require("./filter.types");
let StringFilterInput = class StringFilterInput {
};
tslib_1.__decorate([
    type_graphql_1.Field(type => String, { nullable: true }),
    tslib_1.__metadata("design:type", String)
], StringFilterInput.prototype, "equal", void 0);
tslib_1.__decorate([
    type_graphql_1.Field(type => String, { nullable: true }),
    tslib_1.__metadata("design:type", String)
], StringFilterInput.prototype, "not_equal", void 0);
tslib_1.__decorate([
    type_graphql_1.Field(type => [String], { nullable: true }),
    tslib_1.__metadata("design:type", Array)
], StringFilterInput.prototype, "in", void 0);
tslib_1.__decorate([
    type_graphql_1.Field(type => [String], { nullable: true }),
    tslib_1.__metadata("design:type", Array)
], StringFilterInput.prototype, "not_in", void 0);
tslib_1.__decorate([
    type_graphql_1.Field(type => String, { nullable: true }),
    tslib_1.__metadata("design:type", String)
], StringFilterInput.prototype, "contains", void 0);
tslib_1.__decorate([
    type_graphql_1.Field(type => String, { nullable: true }),
    tslib_1.__metadata("design:type", String)
], StringFilterInput.prototype, "not_contains", void 0);
tslib_1.__decorate([
    type_graphql_1.Field(type => filter_types_1.Order, { nullable: true }),
    tslib_1.__metadata("design:type", String)
], StringFilterInput.prototype, "order", void 0);
StringFilterInput = tslib_1.__decorate([
    type_graphql_1.InputType()
], StringFilterInput);
exports.StringFilterInput = StringFilterInput;
//# sourceMappingURL=string-filter-input.js.map