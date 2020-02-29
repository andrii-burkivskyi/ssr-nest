import { RequestItemBase } from "../../core/decorators/request/item/RequestItem.base";
import { RequestListBase } from "../../core/decorators/request/list/RequestList.base";
import { EntityDTO } from "../../../models/entities/entities.dto";
import { EntityQuery } from "./Entity.query";
import { Project } from "../Projects/Project.service";
export declare class Entity extends RequestItemBase<EntityDTO, {
    id: number;
}> {
    id?: number;
    name?: string;
    project?: Project;
}
export declare class EntitiesList extends RequestListBase<Entity, EntityDTO, {
    id: number;
}, EntityQuery> {
}
