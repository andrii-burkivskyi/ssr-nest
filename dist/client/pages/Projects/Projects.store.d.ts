import { ProjectsListStore } from "./containers/ProjectsList/ProjectsList.store";
import { ProjectsModals } from "./Projects.modals";
export declare class ProjectsStore {
    list: ProjectsListStore;
    modals: ProjectsModals;
    constructor(list: ProjectsListStore, modals: ProjectsModals);
    get i18n(): KeyWithValue<{
        createProject: unknown;
        updateProject: unknown;
        name: unknown;
        color: unknown;
        url: unknown;
        submit: unknown;
    }, import("mobx").IObservableValue<string>>;
    addNewProject: () => void;
}
