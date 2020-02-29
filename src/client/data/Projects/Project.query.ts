import { IDQueryField } from "../../core/decorators/query/IDQueryField";
import { StringQueryField } from "../../core/decorators/query/StringQueryField";

import { QueryBase } from "../../core/decorators/query/query/Query.base";
import { QueryField } from "../../core/decorators/query/query/query.decorator";

export class ProjectQuery extends QueryBase<ProjectQuery> {
    @QueryField(IDQueryField)
    id!: IDQueryField;

    @QueryField(StringQueryField)
    name!: StringQueryField;

    @QueryField(StringQueryField)
    color!: StringQueryField;

    @QueryField(StringQueryField)
    url!: StringQueryField;
}

