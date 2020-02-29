export const ProjectModal = {
    View: () => import(/* webpackChunkName: "project_modal" */ "./ProjectModal.view").then((module) => module.ProjectModalView),
    Store: () => import( /* webpackChunkName: "project_modal" */ "./ProjectModal.store").then((module) => module.ProjectModalStore)
}