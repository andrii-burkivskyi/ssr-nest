"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const type_graphql_1 = require("type-graphql");
const filter_types_1 = require("./filter.types");
let IdFilterInput = class IdFilterInput {
};
tslib_1.__decorate([
    type_graphql_1.Field(type => type_graphql_1.Int, { nullable: true }),
    tslib_1.__metadata("design:type", Number)
], IdFilterInput.prototype, "equal", void 0);
tslib_1.__decorate([
    type_graphql_1.Field(type => type_graphql_1.Int, { nullable: true }),
    tslib_1.__metadata("design:type", Number)
], IdFilterInput.prototype, "not_equal", void 0);
tslib_1.__decorate([
    type_graphql_1.Field(type => [type_graphql_1.Int], { nullable: true }),
    tslib_1.__metadata("design:type", Array)
], IdFilterInput.prototype, "in", void 0);
tslib_1.__decorate([
    type_graphql_1.Field(type => [type_graphql_1.Int], { nullable: true }),
    tslib_1.__metadata("design:type", Array)
], IdFilterInput.prototype, "not_in", void 0);
tslib_1.__decorate([
    type_graphql_1.Field(type => filter_types_1.Order, { nullable: true }),
    tslib_1.__metadata("design:type", String)
], IdFilterInput.prototype, "order", void 0);
IdFilterInput = tslib_1.__decorate([
    type_graphql_1.InputType()
], IdFilterInput);
exports.IdFilterInput = IdFilterInput;
//# sourceMappingURL=id-filter-input.js.map