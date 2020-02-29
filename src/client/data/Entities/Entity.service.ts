import {observable} from "mobx";

import { RequestItemBase } from "../../core/decorators/request/item/RequestItem.base";
import { RequestListBase } from "../../core/decorators/request/list/RequestList.base";
import { GqlConnect, GqlPrimaryField, GqlField } from "../../core/decorators/request/item/requestItem.decorator";
import { GqlListConnect } from "../../core/decorators/request/list/requestList.decorator";

import { EntityDTO } from "../../../models/entities/entities.dto";

import gql from "./gql";
import { EntityQuery } from "./Entity.query";
import { Project } from "../Projects/Project.service";

@GqlConnect("Entity", gql)
export class Entity extends RequestItemBase<EntityDTO, { id: number }> {
    @GqlPrimaryField()
    @observable id?: number;

    @GqlField()
    @observable name?: string;

    @GqlField()
    @observable project?: Project;
}

@GqlListConnect("EntitiesList", gql, Entity)
export class EntitiesList extends RequestListBase<Entity, EntityDTO, {id: number }, EntityQuery> { }
