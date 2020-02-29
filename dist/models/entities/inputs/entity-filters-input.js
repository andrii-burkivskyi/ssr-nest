"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const type_graphql_1 = require("type-graphql");
const filter_1 = require("../../../common/filter");
const pagination_input_1 = require("../../../common/pagination/pagination.input");
const project_filters_input_1 = require("../../projects/inputs/project-filters-input");
let EntityFilterInput = class EntityFilterInput {
};
tslib_1.__decorate([
    type_graphql_1.Field(() => filter_1.IdFilterInput, { nullable: true }),
    tslib_1.__metadata("design:type", filter_1.IdFilterInput)
], EntityFilterInput.prototype, "id", void 0);
tslib_1.__decorate([
    type_graphql_1.Field(() => filter_1.StringFilterInput, { nullable: true }),
    tslib_1.__metadata("design:type", filter_1.StringFilterInput)
], EntityFilterInput.prototype, "name", void 0);
tslib_1.__decorate([
    type_graphql_1.Field(() => project_filters_input_1.ProjectFilterInput, { nullable: true }),
    tslib_1.__metadata("design:type", project_filters_input_1.ProjectFilterInput)
], EntityFilterInput.prototype, "project", void 0);
EntityFilterInput = tslib_1.__decorate([
    type_graphql_1.InputType()
], EntityFilterInput);
exports.EntityFilterInput = EntityFilterInput;
let EntityPaginationInput = class EntityPaginationInput extends pagination_input_1.PaginationInput(EntityFilterInput) {
};
EntityPaginationInput = tslib_1.__decorate([
    type_graphql_1.InputType()
], EntityPaginationInput);
exports.EntityPaginationInput = EntityPaginationInput;
//# sourceMappingURL=entity-filters-input.js.map