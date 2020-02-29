"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const path = require("path");
const common_1 = require("@nestjs/common");
const serve_static_1 = require("@nestjs/serve-static");
const graphql_1 = require("@nestjs/graphql");
const typeorm_1 = require("@nestjs/typeorm");
const projects_module_1 = require("./models/projects/projects.module");
const entities_module_1 = require("./models/entities/entities.module");
const entities_entity_1 = require("./models/entities/entities.entity");
const projects_entity_1 = require("./models/projects/projects.entity");
let AppModule = class AppModule {
};
AppModule = tslib_1.__decorate([
    common_1.Module({
        imports: [
            serve_static_1.ServeStaticModule.forRoot({
                rootPath: path.resolve(__dirname, '../..'),
            }),
            typeorm_1.TypeOrmModule.forRoot({
                type: 'sqlite',
                database: 'public/server/database.sqlite',
                synchronize: true,
                logging: false,
                entities: [entities_entity_1.EntityEntity, projects_entity_1.ProjectEntity],
            }),
            graphql_1.GraphQLModule.forRoot({
                autoSchemaFile: 'schema.gql',
            }),
            projects_module_1.ProjectsModule,
            entities_module_1.EntitiesModule,
        ],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map