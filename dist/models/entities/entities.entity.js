"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const typeorm_1 = require("typeorm");
const projects_entity_1 = require("../projects/projects.entity");
let EntityEntity = class EntityEntity {
};
tslib_1.__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    tslib_1.__metadata("design:type", Number)
], EntityEntity.prototype, "id", void 0);
tslib_1.__decorate([
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", String)
], EntityEntity.prototype, "name", void 0);
tslib_1.__decorate([
    typeorm_1.ManyToOne(type => projects_entity_1.ProjectEntity, project => project.entities),
    tslib_1.__metadata("design:type", projects_entity_1.ProjectEntity)
], EntityEntity.prototype, "project", void 0);
EntityEntity = tslib_1.__decorate([
    typeorm_1.Entity()
], EntityEntity);
exports.EntityEntity = EntityEntity;
//# sourceMappingURL=entities.entity.js.map