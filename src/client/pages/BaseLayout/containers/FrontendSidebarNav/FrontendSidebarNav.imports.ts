export const FrontendSidebarNav = {
    Store: () => import(/* webpackChunkName: "sidebar_nav" */ './FrontendSidebarNav.store').then((module) => module.FrontendSidebarNavStore),
    View: () => import(/* webpackChunkName: "sidebar_nav" */ './FrontendSidebarNav.view').then((module) => module.FrontendSidebarNavView),
};
