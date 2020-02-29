"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CreateEntity_gql_1 = require("./CreateEntity.gql");
const UpdateEntity_gql_1 = require("./UpdateEntity.gql");
const DeleteEntity_gql_1 = require("./DeleteEntity.gql");
const GetEntity_gql_1 = require("./GetEntity.gql");
const GetEntityList_gql_1 = require("./GetEntityList.gql");
exports.default = {
    create: CreateEntity_gql_1.default,
    update: UpdateEntity_gql_1.default,
    delete: DeleteEntity_gql_1.default,
    get: GetEntity_gql_1.default,
    getList: GetEntityList_gql_1.default
};
//# sourceMappingURL=index.js.map