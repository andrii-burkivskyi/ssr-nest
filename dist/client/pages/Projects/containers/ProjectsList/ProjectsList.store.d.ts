import { ProjectsRequests } from "../../Projects.requests";
import { ProjectsModals } from "../../Projects.modals";
export declare class ProjectsListStore {
    requests: ProjectsRequests;
    modals: ProjectsModals;
    constructor(requests: ProjectsRequests, modals: ProjectsModals);
    get i18n(): KeyWithValue<{
        createProject: unknown;
        updateProject: unknown;
        name: unknown;
        color: unknown;
        url: unknown;
        submit: unknown;
    }, import("mobx").IObservableValue<string>>;
}
