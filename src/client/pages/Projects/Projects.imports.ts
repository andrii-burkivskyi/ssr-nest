export const Projects = {
    Store: () => import(/* webpackChunkName: "projects_page" */ "./Projects.store").then((module) => module.ProjectsStore),
    View: () => import(/* webpackChunkName: "projects_page" */ "./Projects.view").then((module) => module.ProjectsView),
    RequestService: () => import(/* webpackChunkName: "projects_page" */ "./Projects.requests").then((module) => module.ProjectsRequests),
    ListService: () => import(/* webpackChunkName: "projects_page" */ "./containers//ProjectsList/ProjectsList.store").then((module) => module.ProjectsListStore),
    ModalsService: () => import(/* webpackChunkName: "projects_page" */ "./Projects.modals").then((module) => module.ProjectsModals),
}