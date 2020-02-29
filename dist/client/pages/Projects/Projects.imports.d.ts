export declare const Projects: {
    Store: () => Promise<typeof import("./Projects.store").ProjectsStore>;
    View: () => Promise<typeof import("./Projects.view").ProjectsView>;
    RequestService: () => Promise<typeof import("./Projects.requests").ProjectsRequests>;
    ListService: () => Promise<typeof import("./containers/ProjectsList/ProjectsList.store").ProjectsListStore>;
    ModalsService: () => Promise<typeof import("./Projects.modals").ProjectsModals>;
};
