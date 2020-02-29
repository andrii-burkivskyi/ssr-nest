import { RequestItemBase } from "../../core/decorators/request/item/RequestItem.base";
import { RequestListBase } from "../../core/decorators/request/list/RequestList.base";
import { ProjectDTO } from "../../../models/projects/projects.dto";
import { ProjectQuery } from "./Project.query";
export declare class Project extends RequestItemBase<ProjectDTO, {
    id: number;
}> {
    id?: number;
    name?: string;
    color?: string;
    url?: string;
}
export declare class ProjectsList extends RequestListBase<Project, ProjectDTO, {
    id: number;
}, ProjectQuery> {
}
