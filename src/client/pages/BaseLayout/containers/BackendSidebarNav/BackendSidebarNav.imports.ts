export const BackendSidebarNav = {
    Store: () => import(/* webpackChunkName: "sidebar_nav" */ "./BackendSidebarNav.store").then((module) => module.BackendSidebarNavStore),
    View: () => import(/* webpackChunkName: "sidebar_nav" */ "./BackendSidebarNav.view").then((module) => module.BackendSidebarNavView),
}
