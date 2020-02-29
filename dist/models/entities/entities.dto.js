"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const type_graphql_1 = require("type-graphql");
const pagination_dto_1 = require("../../common/pagination/pagination.dto");
const projects_dto_1 = require("../projects/projects.dto");
let EntityDTO = class EntityDTO {
};
tslib_1.__decorate([
    type_graphql_1.Field(() => type_graphql_1.Int),
    tslib_1.__metadata("design:type", Number)
], EntityDTO.prototype, "id", void 0);
tslib_1.__decorate([
    type_graphql_1.Field(),
    tslib_1.__metadata("design:type", String)
], EntityDTO.prototype, "name", void 0);
tslib_1.__decorate([
    type_graphql_1.Field(type => projects_dto_1.ProjectDTO, { defaultValue: {} }),
    tslib_1.__metadata("design:type", projects_dto_1.ProjectDTO)
], EntityDTO.prototype, "project", void 0);
EntityDTO = tslib_1.__decorate([
    type_graphql_1.ObjectType()
], EntityDTO);
exports.EntityDTO = EntityDTO;
let EntityPaginationDTO = class EntityPaginationDTO extends pagination_dto_1.PaginationDTO(EntityDTO) {
};
EntityPaginationDTO = tslib_1.__decorate([
    type_graphql_1.ObjectType()
], EntityPaginationDTO);
exports.EntityPaginationDTO = EntityPaginationDTO;
//# sourceMappingURL=entities.dto.js.map