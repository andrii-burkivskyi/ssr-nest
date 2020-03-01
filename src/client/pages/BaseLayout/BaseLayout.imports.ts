export const BaseLayout = {
  Store: () => import(/* webpackChunkName: "base_layout" */ './BaseLayout.store').then((module) => module.BaseLayoutStore),
  View: () => import(/* webpackChunkName: "base_layout" */ './BaseLayout.view').then((module) => module.BaseLayoutView),
  HeaderNavModule: () => import(/* webpackChunkName: "header_nav_module" */ '../BaseLayout/containers/HeaderNav').then((module) => module.HeaderNavModule),
  FrontendSidebarNavModule: () => import(/* webpackChunkName: "sidebar_nav_module" */ '../BaseLayout/containers/FrontendSidebarNav').then((module) => module.FrontendSidebarNavModule),
  BackendSidebarNavModule: () => import(/* webpackChunkName: "sidebar_nav_module" */ '../BaseLayout/containers/BackendSidebarNav').then((module) => module.BackendSidebarNavModule),
  ProjectsModule: () => import(/* webpackChunkName: "projects_module" */ '../Projects').then((module) => module.ProjectsModule),
};
