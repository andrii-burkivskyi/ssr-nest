"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseLayout = {
    Store: function () { return Promise.resolve().then(function () { return require(/* webpackChunkName: "base_layout" */ "./BaseLayout.store"); }).then(function (module) { return module.BaseLayoutStore; }); },
    View: function () { return Promise.resolve().then(function () { return require(/* webpackChunkName: "base_layout" */ "./BaseLayout.view"); }).then(function (module) { return module.BaseLayoutView; }); },
    HeaderNavModule: function () { return Promise.resolve().then(function () { return require(/* webpackChunkName: "header_nav_module" */ "../BaseLayout/containers/HeaderNav"); }).then(function (module) { return module.HeaderNavModule; }); },
    FrontendSidebarNavModule: function () { return Promise.resolve().then(function () { return require(/* webpackChunkName: "sidebar_nav_module" */ "../BaseLayout/containers/FrontendSidebarNav"); }).then(function (module) { return module.FrontendSidebarNavModule; }); },
    BackendSidebarNavModule: function () { return Promise.resolve().then(function () { return require(/* webpackChunkName: "sidebar_nav_module" */ "../BaseLayout/containers/BackendSidebarNav"); }).then(function (module) { return module.BackendSidebarNavModule; }); },
    ProjectsModule: function () { return Promise.resolve().then(function () { return require(/* webpackChunkName: "projects_module" */ "../Projects"); }).then(function (module) { return module.ProjectsModule; }); },
};
//# sourceMappingURL=BaseLayout.imports.js.map