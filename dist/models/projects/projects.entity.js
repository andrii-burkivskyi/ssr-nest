"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const typeorm_1 = require("typeorm");
const entities_entity_1 = require("../entities/entities.entity");
let ProjectEntity = class ProjectEntity {
};
tslib_1.__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    tslib_1.__metadata("design:type", Number)
], ProjectEntity.prototype, "id", void 0);
tslib_1.__decorate([
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", String)
], ProjectEntity.prototype, "name", void 0);
tslib_1.__decorate([
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", String)
], ProjectEntity.prototype, "color", void 0);
tslib_1.__decorate([
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", String)
], ProjectEntity.prototype, "url", void 0);
tslib_1.__decorate([
    typeorm_1.OneToMany(type => entities_entity_1.EntityEntity, entity => entity.project),
    tslib_1.__metadata("design:type", Array)
], ProjectEntity.prototype, "entities", void 0);
ProjectEntity = tslib_1.__decorate([
    typeorm_1.Entity()
], ProjectEntity);
exports.ProjectEntity = ProjectEntity;
//# sourceMappingURL=projects.entity.js.map