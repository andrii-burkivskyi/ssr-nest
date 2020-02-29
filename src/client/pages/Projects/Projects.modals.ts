import { Service } from "../../core/decorators/service/service.decorator";
import ModalStore from "../../components/Modal/Modal.store";
import { Project } from "../../data/Projects/Project.service";

import { ProjectModal } from "./containers//ProjectModal/ProjectModal.import"

@Service("ProjectsModals")
export class ProjectsModals {
    project = new ModalStore<Project>({
        component: ProjectModal.View,
        model: ProjectModal.Store
    });
}