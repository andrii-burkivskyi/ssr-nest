import { IDQueryField } from "../../core/decorators/query/IDQueryField";
import { StringQueryField } from "../../core/decorators/query/StringQueryField";
import { QueryBase } from "../../core/decorators/query/query/Query.base";
export declare class ProjectQuery extends QueryBase<ProjectQuery> {
    id: IDQueryField;
    name: StringQueryField;
    color: StringQueryField;
    url: StringQueryField;
}
