import { IDQueryField } from "../../core/decorators/query/IDQueryField";
import { StringQueryField } from "../../core/decorators/query/StringQueryField";

import { QueryBase } from "../../core/decorators/query/query/Query.base";
import { QueryField, QueryNestedField } from "../../core/decorators/query/query/query.decorator";
import { ProjectQuery } from "../Projects/Project.query";

export class EntityQuery extends QueryBase<EntityQuery> {
    @QueryField(IDQueryField)
    id!: IDQueryField;

    @QueryField(StringQueryField)
    name!: StringQueryField;

    @QueryNestedField(ProjectQuery)
    project!: ProjectQuery;
}


