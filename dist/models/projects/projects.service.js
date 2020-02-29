"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const mergeStrategy_1 = require("../../utils/mergeStrategy");
const buildFindOptions_1 = require("../../utils/buildFindOptions");
const projects_entity_1 = require("../projects/projects.entity");
let ProjectsService = class ProjectsService {
    constructor(projectsRepository) {
        this.projectsRepository = projectsRepository;
    }
    async findAll(input) {
        const joins = [{ type: buildFindOptions_1.JoinType.LEFT, alias: 'entities' }];
        return buildFindOptions_1.getPaginationResponse(this.projectsRepository, input, joins);
    }
    async findById(id) {
        return await this.projectsRepository.findOne({ id }, { relations: ['entities'] });
    }
    async create(input) {
        const project = this.projectsRepository.create(input);
        return await this.projectsRepository.save(project);
    }
    async update(input) {
        const currentProject = await this.projectsRepository.findOne({ id: input.id });
        if (currentProject) {
            const project = this.projectsRepository.create(mergeStrategy_1.merge(currentProject, input));
            await this.projectsRepository.save(project);
            return await this.findById(input.id);
        }
        throw new common_1.HttpException(`Can't find project with id [${input.id}]`, common_1.HttpStatus.NOT_FOUND);
    }
    async delete(input) {
        await this.projectsRepository.delete(input.id);
        return input.id;
    }
};
ProjectsService = tslib_1.__decorate([
    common_1.Injectable(),
    tslib_1.__param(0, typeorm_1.InjectRepository(projects_entity_1.ProjectEntity)),
    tslib_1.__metadata("design:paramtypes", [typeorm_2.Repository])
], ProjectsService);
exports.ProjectsService = ProjectsService;
//# sourceMappingURL=projects.service.js.map