export const HeaderNav = {
    Store: () => import(/* webpackChunkName: "header_nav" */ "./HeaderNav.store").then((module) => module.HeaderNavStore),
    View: () => import(/* webpackChunkName: "header_nav" */ "./HeaderNav.view").then((module) => module.HeaderNavView),
}
