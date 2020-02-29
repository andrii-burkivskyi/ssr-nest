import { IDQueryField } from "../../core/decorators/query/IDQueryField";
import { StringQueryField } from "../../core/decorators/query/StringQueryField";
import { QueryBase } from "../../core/decorators/query/query/Query.base";
import { ProjectQuery } from "../Projects/Project.query";
export declare class EntityQuery extends QueryBase<EntityQuery> {
    id: IDQueryField;
    name: StringQueryField;
    project: ProjectQuery;
}
