"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const type_graphql_1 = require("type-graphql");
const filter_types_1 = require("./filter.types");
exports.EnumFilterInput = (TItemEnum, name) => {
    let EnumFilterInputClass = class EnumFilterInputClass {
    };
    tslib_1.__decorate([
        type_graphql_1.Field(type => TItemEnum, { nullable: true }),
        tslib_1.__metadata("design:type", Object)
    ], EnumFilterInputClass.prototype, "equal", void 0);
    tslib_1.__decorate([
        type_graphql_1.Field(type => TItemEnum, { nullable: true }),
        tslib_1.__metadata("design:type", Object)
    ], EnumFilterInputClass.prototype, "not_equal", void 0);
    tslib_1.__decorate([
        type_graphql_1.Field(type => [TItemEnum], { nullable: true }),
        tslib_1.__metadata("design:type", Array)
    ], EnumFilterInputClass.prototype, "in", void 0);
    tslib_1.__decorate([
        type_graphql_1.Field(type => [TItemEnum], { nullable: true }),
        tslib_1.__metadata("design:type", Array)
    ], EnumFilterInputClass.prototype, "not_in", void 0);
    tslib_1.__decorate([
        type_graphql_1.Field(type => filter_types_1.Order, { nullable: true }),
        tslib_1.__metadata("design:type", String)
    ], EnumFilterInputClass.prototype, "order", void 0);
    EnumFilterInputClass = tslib_1.__decorate([
        type_graphql_1.InputType(`${name}EnumFilterInput`)
    ], EnumFilterInputClass);
    return EnumFilterInputClass;
};
//# sourceMappingURL=enum-filter-input.js.map