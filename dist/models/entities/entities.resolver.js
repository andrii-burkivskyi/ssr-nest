"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const type_graphql_1 = require("type-graphql");
const entities_service_1 = require("./entities.service");
const entities_dto_1 = require("./entities.dto");
const create_entity_input_1 = require("./inputs/create-entity-input");
const update_entity_input_1 = require("./inputs/update-entity-input");
const delete_entity_input_1 = require("./inputs/delete-entity-input");
const entity_filters_input_1 = require("./inputs/entity-filters-input");
const projects_service_1 = require("../projects/projects.service");
let EntitiesResolver = class EntitiesResolver {
    constructor(entitiesService, projectsService) {
        this.entitiesService = entitiesService;
        this.projectsService = projectsService;
    }
    async entity(id) {
        return await this.entitiesService.findById(id);
    }
    async entities(input) {
        return await this.entitiesService.findAll(input);
    }
    async createEntity(input) {
        if (Object.keys(input.project).length > 1) {
            await this.projectsService.update(input.project);
        }
        return await this.entitiesService.create(input);
    }
    async updateEntity(input) {
        if (input.project && Object.keys(input.project).length > 1) {
            await this.projectsService.update(input.project);
        }
        return await this.entitiesService.update(input);
    }
    async deleteEntity(input) {
        return await this.entitiesService.delete(input);
    }
    async deleteEntities(input) {
        return await this.entitiesService.deleteList(input);
    }
};
tslib_1.__decorate([
    graphql_1.Query(() => entities_dto_1.EntityDTO, { nullable: true }),
    tslib_1.__param(0, graphql_1.Args({ name: 'id', type: () => type_graphql_1.Int })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number]),
    tslib_1.__metadata("design:returntype", Promise)
], EntitiesResolver.prototype, "entity", null);
tslib_1.__decorate([
    graphql_1.Query(() => entities_dto_1.EntityPaginationDTO),
    tslib_1.__param(0, graphql_1.Args({ name: 'input', type: () => entity_filters_input_1.EntityPaginationInput, defaultValue: {} })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], EntitiesResolver.prototype, "entities", null);
tslib_1.__decorate([
    graphql_1.Mutation(() => entities_dto_1.EntityDTO),
    tslib_1.__param(0, graphql_1.Args({ name: 'input', type: () => create_entity_input_1.CreateEntityInput })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [create_entity_input_1.CreateEntityInput]),
    tslib_1.__metadata("design:returntype", Promise)
], EntitiesResolver.prototype, "createEntity", null);
tslib_1.__decorate([
    graphql_1.Mutation(() => entities_dto_1.EntityDTO),
    tslib_1.__param(0, graphql_1.Args({ name: 'input', type: () => update_entity_input_1.UpdateEntityInput })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [update_entity_input_1.UpdateEntityInput]),
    tslib_1.__metadata("design:returntype", Promise)
], EntitiesResolver.prototype, "updateEntity", null);
tslib_1.__decorate([
    graphql_1.Mutation(() => type_graphql_1.Int),
    tslib_1.__param(0, graphql_1.Args({ name: 'input', type: () => delete_entity_input_1.DeleteEntityInput })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [delete_entity_input_1.DeleteEntityInput]),
    tslib_1.__metadata("design:returntype", Promise)
], EntitiesResolver.prototype, "deleteEntity", null);
tslib_1.__decorate([
    graphql_1.Mutation(() => [type_graphql_1.Int]),
    tslib_1.__param(0, graphql_1.Args({ name: 'input', type: () => [delete_entity_input_1.DeleteEntityInput], defaultValue: [] })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Array]),
    tslib_1.__metadata("design:returntype", Promise)
], EntitiesResolver.prototype, "deleteEntities", null);
EntitiesResolver = tslib_1.__decorate([
    graphql_1.Resolver(() => entities_dto_1.EntityDTO),
    tslib_1.__metadata("design:paramtypes", [entities_service_1.EntitiesService,
        projects_service_1.ProjectsService])
], EntitiesResolver);
exports.EntitiesResolver = EntitiesResolver;
//# sourceMappingURL=entities.resolver.js.map