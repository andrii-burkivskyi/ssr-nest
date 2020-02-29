"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const type_graphql_1 = require("type-graphql");
const filter_1 = require("../../../common/filter");
const pagination_input_1 = require("../../../common//pagination/pagination.input");
let ProjectFilterInput = class ProjectFilterInput {
};
tslib_1.__decorate([
    type_graphql_1.Field(type => filter_1.IdFilterInput, { nullable: true }),
    tslib_1.__metadata("design:type", filter_1.IdFilterInput)
], ProjectFilterInput.prototype, "id", void 0);
tslib_1.__decorate([
    type_graphql_1.Field(type => filter_1.StringFilterInput, { nullable: true }),
    tslib_1.__metadata("design:type", filter_1.StringFilterInput)
], ProjectFilterInput.prototype, "name", void 0);
tslib_1.__decorate([
    type_graphql_1.Field(type => filter_1.StringFilterInput, { nullable: true }),
    tslib_1.__metadata("design:type", filter_1.StringFilterInput)
], ProjectFilterInput.prototype, "color", void 0);
tslib_1.__decorate([
    type_graphql_1.Field(type => filter_1.StringFilterInput, { nullable: true }),
    tslib_1.__metadata("design:type", filter_1.StringFilterInput)
], ProjectFilterInput.prototype, "url", void 0);
ProjectFilterInput = tslib_1.__decorate([
    type_graphql_1.InputType()
], ProjectFilterInput);
exports.ProjectFilterInput = ProjectFilterInput;
let ProjectPaginationInput = class ProjectPaginationInput extends pagination_input_1.PaginationInput(ProjectFilterInput) {
};
ProjectPaginationInput = tslib_1.__decorate([
    type_graphql_1.InputType()
], ProjectPaginationInput);
exports.ProjectPaginationInput = ProjectPaginationInput;
//# sourceMappingURL=project-filters-input.js.map