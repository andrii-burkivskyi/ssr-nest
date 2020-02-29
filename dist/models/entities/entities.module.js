"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const entities_resolver_1 = require("./entities.resolver");
const entities_service_1 = require("./entities.service");
const entities_entity_1 = require("./entities.entity");
const projects_entity_1 = require("../projects/projects.entity");
const projects_service_1 = require("../projects/projects.service");
let EntitiesModule = class EntitiesModule {
};
EntitiesModule = tslib_1.__decorate([
    common_1.Module({
        imports: [typeorm_1.TypeOrmModule.forFeature([entities_entity_1.EntityEntity, projects_entity_1.ProjectEntity])],
        providers: [entities_resolver_1.EntitiesResolver, entities_service_1.EntitiesService, projects_service_1.ProjectsService],
    })
], EntitiesModule);
exports.EntitiesModule = EntitiesModule;
//# sourceMappingURL=entities.module.js.map