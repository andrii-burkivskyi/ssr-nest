"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const type_graphql_1 = require("type-graphql");
const projects_service_1 = require("./projects.service");
const projects_dto_1 = require("./projects.dto");
const create_project_input_1 = require("./inputs/create-project-input");
const update_project_input_1 = require("./inputs/update-project-input");
const delete_project_input_1 = require("./inputs/delete-project-input");
const project_filters_input_1 = require("./inputs/project-filters-input");
const entities_service_1 = require("../entities/entities.service");
let ProjectsResolver = class ProjectsResolver {
    constructor(projectsService, entitiesService) {
        this.projectsService = projectsService;
        this.entitiesService = entitiesService;
    }
    async project(id) {
        return await this.projectsService.findById(id);
    }
    async projects(input) {
        return await this.projectsService.findAll(input);
    }
    async createProject(input) {
        return await this.projectsService.create(input);
    }
    async updateProject(input) {
        return await this.projectsService.update(input);
    }
    async deleteProject(input) {
        const project = await this.projectsService.findById(input.id);
        if (project && project.entities.length > 0) {
            await this.entitiesService.deleteList(project.entities);
        }
        return await this.projectsService.delete(input);
    }
};
tslib_1.__decorate([
    graphql_1.Query(() => projects_dto_1.ProjectDTO, { nullable: true }),
    tslib_1.__param(0, graphql_1.Args({ name: 'id', type: () => type_graphql_1.Int })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number]),
    tslib_1.__metadata("design:returntype", Promise)
], ProjectsResolver.prototype, "project", null);
tslib_1.__decorate([
    graphql_1.Query(() => projects_dto_1.ProjectPaginationDTO),
    tslib_1.__param(0, graphql_1.Args({ name: 'input', type: () => project_filters_input_1.ProjectPaginationInput, defaultValue: {} })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ProjectsResolver.prototype, "projects", null);
tslib_1.__decorate([
    graphql_1.Mutation(() => projects_dto_1.ProjectDTO),
    tslib_1.__param(0, graphql_1.Args({ name: 'input', type: () => create_project_input_1.CreateProjectInput })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [create_project_input_1.CreateProjectInput]),
    tslib_1.__metadata("design:returntype", Promise)
], ProjectsResolver.prototype, "createProject", null);
tslib_1.__decorate([
    graphql_1.Mutation(() => projects_dto_1.ProjectDTO),
    tslib_1.__param(0, graphql_1.Args({ name: 'input', type: () => update_project_input_1.UpdateProjectInput })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [update_project_input_1.UpdateProjectInput]),
    tslib_1.__metadata("design:returntype", Promise)
], ProjectsResolver.prototype, "updateProject", null);
tslib_1.__decorate([
    graphql_1.Mutation(() => type_graphql_1.Int),
    tslib_1.__param(0, graphql_1.Args({ name: 'input', type: () => delete_project_input_1.DeleteProjectInput })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [delete_project_input_1.DeleteProjectInput]),
    tslib_1.__metadata("design:returntype", Promise)
], ProjectsResolver.prototype, "deleteProject", null);
ProjectsResolver = tslib_1.__decorate([
    graphql_1.Resolver(() => projects_dto_1.ProjectDTO),
    tslib_1.__metadata("design:paramtypes", [projects_service_1.ProjectsService,
        entities_service_1.EntitiesService])
], ProjectsResolver);
exports.ProjectsResolver = ProjectsResolver;
//# sourceMappingURL=projects.resolver.js.map