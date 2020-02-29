"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const projects_resolver_1 = require("./projects.resolver");
const projects_service_1 = require("./projects.service");
const projects_entity_1 = require("./projects.entity");
const entities_entity_1 = require("../entities/entities.entity");
const entities_service_1 = require("../entities/entities.service");
let ProjectsModule = class ProjectsModule {
};
ProjectsModule = tslib_1.__decorate([
    common_1.Module({
        imports: [typeorm_1.TypeOrmModule.forFeature([projects_entity_1.ProjectEntity, entities_entity_1.EntityEntity])],
        providers: [projects_resolver_1.ProjectsResolver, projects_service_1.ProjectsService, entities_service_1.EntitiesService],
    })
], ProjectsModule);
exports.ProjectsModule = ProjectsModule;
//# sourceMappingURL=projects.module.js.map