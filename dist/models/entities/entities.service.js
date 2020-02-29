"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const mergeStrategy_1 = require("../../utils/mergeStrategy");
const buildFindOptions_1 = require("../../utils/buildFindOptions");
const entities_entity_1 = require("./entities.entity");
let EntitiesService = class EntitiesService {
    constructor(entitiesRepository) {
        this.entitiesRepository = entitiesRepository;
    }
    async findAll(input) {
        const joins = [{ type: buildFindOptions_1.JoinType.LEFT, alias: 'project' }];
        return buildFindOptions_1.getPaginationResponse(this.entitiesRepository, input, joins);
    }
    async findById(id) {
        return await this.entitiesRepository.findOne({ id }, { relations: ['project'] });
    }
    async create(input) {
        const entity = this.entitiesRepository.create(input);
        const response = await this.entitiesRepository.save(entity);
        return await this.findById(response.id);
    }
    async update(input) {
        const currentEntity = await this.entitiesRepository.findOne({ id: input.id });
        if (currentEntity) {
            const { project } = input, entityProps = tslib_1.__rest(input, ["project"]);
            const entity = this.entitiesRepository.create(mergeStrategy_1.merge(currentEntity, entityProps));
            await this.entitiesRepository.save(entity, { reload: false });
            return await this.findById(input.id);
        }
        throw new common_1.HttpException(`Can't find entity with id [${input.id}]`, common_1.HttpStatus.NOT_FOUND);
    }
    async delete(input) {
        await this.entitiesRepository.delete(input.id);
        return input.id;
    }
    async deleteList(input) {
        const ids = input.map((entity) => entity.id);
        await this.entitiesRepository.delete(ids);
        return ids;
    }
};
EntitiesService = tslib_1.__decorate([
    common_1.Injectable(),
    tslib_1.__param(0, typeorm_1.InjectRepository(entities_entity_1.EntityEntity)),
    tslib_1.__metadata("design:paramtypes", [typeorm_2.Repository])
], EntitiesService);
exports.EntitiesService = EntitiesService;
//# sourceMappingURL=entities.service.js.map