"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const type_graphql_1 = require("type-graphql");
exports.PaginationDTO = (DTO) => {
    let PaginationDTOClass = class PaginationDTOClass {
    };
    tslib_1.__decorate([
        type_graphql_1.Field(() => [DTO]),
        tslib_1.__metadata("design:type", Array)
    ], PaginationDTOClass.prototype, "items", void 0);
    tslib_1.__decorate([
        type_graphql_1.Field(() => type_graphql_1.Int),
        tslib_1.__metadata("design:type", Number)
    ], PaginationDTOClass.prototype, "totalItems", void 0);
    tslib_1.__decorate([
        type_graphql_1.Field(() => type_graphql_1.Int),
        tslib_1.__metadata("design:type", Number)
    ], PaginationDTOClass.prototype, "take", void 0);
    tslib_1.__decorate([
        type_graphql_1.Field(() => type_graphql_1.Int),
        tslib_1.__metadata("design:type", Number)
    ], PaginationDTOClass.prototype, "page", void 0);
    PaginationDTOClass = tslib_1.__decorate([
        type_graphql_1.ObjectType({ isAbstract: true })
    ], PaginationDTOClass);
    return PaginationDTOClass;
};
//# sourceMappingURL=pagination.dto.js.map