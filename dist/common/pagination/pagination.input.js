"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const type_graphql_1 = require("type-graphql");
exports.PaginationInput = (TItemFilter) => {
    let PaginationInputClass = class PaginationInputClass {
    };
    tslib_1.__decorate([
        type_graphql_1.Field(type => TItemFilter, { nullable: true, defaultValue: {} }),
        tslib_1.__metadata("design:type", Object)
    ], PaginationInputClass.prototype, "filter", void 0);
    tslib_1.__decorate([
        type_graphql_1.Field(type => type_graphql_1.Int, { nullable: true, defaultValue: 0 }),
        tslib_1.__metadata("design:type", Number)
    ], PaginationInputClass.prototype, "page", void 0);
    tslib_1.__decorate([
        type_graphql_1.Field(type => type_graphql_1.Int, { nullable: true, defaultValue: 20 }),
        tslib_1.__metadata("design:type", Number)
    ], PaginationInputClass.prototype, "take", void 0);
    PaginationInputClass = tslib_1.__decorate([
        type_graphql_1.InputType({ isAbstract: true })
    ], PaginationInputClass);
    return PaginationInputClass;
};
//# sourceMappingURL=pagination.input.js.map