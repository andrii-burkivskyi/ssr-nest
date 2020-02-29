import createEntity from "./CreateEntity.gql";
import updateEntity from "./UpdateEntity.gql";
import deleteEntity from "./DeleteEntity.gql";
import getEntity from "./GetEntity.gql";
import getEntityList from "./GetEntityList.gql";

export default {
    create: createEntity,
    update: updateEntity,
    delete: deleteEntity,
    get: getEntity,
    getList: getEntityList
};