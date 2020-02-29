"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const type_graphql_1 = require("type-graphql");
const filter_types_1 = require("./filter.types");
let BooleanFilterInput = class BooleanFilterInput {
};
tslib_1.__decorate([
    type_graphql_1.Field(type => String, { nullable: true }),
    tslib_1.__metadata("design:type", String)
], BooleanFilterInput.prototype, "equal", void 0);
tslib_1.__decorate([
    type_graphql_1.Field(type => String, { nullable: true }),
    tslib_1.__metadata("design:type", String)
], BooleanFilterInput.prototype, "not_equal", void 0);
tslib_1.__decorate([
    type_graphql_1.Field(type => filter_types_1.Order, { nullable: true }),
    tslib_1.__metadata("design:type", String)
], BooleanFilterInput.prototype, "order", void 0);
BooleanFilterInput = tslib_1.__decorate([
    type_graphql_1.InputType()
], BooleanFilterInput);
exports.BooleanFilterInput = BooleanFilterInput;
//# sourceMappingURL=boolean-filter-input.js.map