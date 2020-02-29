"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const type_graphql_1 = require("type-graphql");
const pagination_dto_1 = require("../../common/pagination/pagination.dto");
const entities_dto_1 = require("../entities/entities.dto");
let ProjectDTO = class ProjectDTO {
};
tslib_1.__decorate([
    type_graphql_1.Field(() => type_graphql_1.Int),
    tslib_1.__metadata("design:type", Number)
], ProjectDTO.prototype, "id", void 0);
tslib_1.__decorate([
    type_graphql_1.Field(),
    tslib_1.__metadata("design:type", String)
], ProjectDTO.prototype, "name", void 0);
tslib_1.__decorate([
    type_graphql_1.Field(),
    tslib_1.__metadata("design:type", String)
], ProjectDTO.prototype, "color", void 0);
tslib_1.__decorate([
    type_graphql_1.Field(),
    tslib_1.__metadata("design:type", String)
], ProjectDTO.prototype, "url", void 0);
tslib_1.__decorate([
    type_graphql_1.Field(type => [entities_dto_1.EntityDTO], { defaultValue: [] }),
    tslib_1.__metadata("design:type", Array)
], ProjectDTO.prototype, "entities", void 0);
ProjectDTO = tslib_1.__decorate([
    type_graphql_1.ObjectType()
], ProjectDTO);
exports.ProjectDTO = ProjectDTO;
let ProjectPaginationDTO = class ProjectPaginationDTO extends pagination_dto_1.PaginationDTO(ProjectDTO) {
};
ProjectPaginationDTO = tslib_1.__decorate([
    type_graphql_1.ObjectType()
], ProjectPaginationDTO);
exports.ProjectPaginationDTO = ProjectPaginationDTO;
//# sourceMappingURL=projects.dto.js.map