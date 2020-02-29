"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseLayout = {
    Store: () => Promise.resolve().then(() => require("./BaseLayout.store")).then((module) => module.BaseLayoutStore),
    View: () => Promise.resolve().then(() => require("./BaseLayout.view")).then((module) => module.BaseLayoutView),
    HeaderNavModule: () => Promise.resolve().then(() => require("../BaseLayout/containers/HeaderNav")).then((module) => module.HeaderNavModule),
    FrontendSidebarNavModule: () => Promise.resolve().then(() => require("../BaseLayout/containers/FrontendSidebarNav")).then((module) => module.FrontendSidebarNavModule),
    BackendSidebarNavModule: () => Promise.resolve().then(() => require("../BaseLayout/containers/BackendSidebarNav")).then((module) => module.BackendSidebarNavModule),
    ProjectsModule: () => Promise.resolve().then(() => require("../Projects")).then((module) => module.ProjectsModule),
};
//# sourceMappingURL=BaseLayout.imports.js.map