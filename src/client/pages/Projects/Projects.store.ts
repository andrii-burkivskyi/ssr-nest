import { computed, action } from "mobx";
import { Service } from "../../core/decorators/service/service.decorator";

import { ProjectsI18n } from "./Projects.i18n";
import { ProjectsListStore } from "./containers/ProjectsList/ProjectsList.store";
import { ProjectsModals } from "./Projects.modals";

@Service("ProjectsStore")
export class ProjectsStore {
    constructor(
        public list: ProjectsListStore,
        public modals: ProjectsModals
    ){};

    @computed get i18n() {
        return ProjectsI18n.i18n;
    }

    @action addNewProject = () => {
        this.modals.project.toggle(
            this.list.requests.projects.addEmpty()
        )
    }
}