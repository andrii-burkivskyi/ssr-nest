"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Projects = {
    Store: function () { return Promise.resolve().then(function () { return require(/* webpackChunkName: "projects_page" */ "./Projects.store"); }).then(function (module) { return module.ProjectsStore; }); },
    View: function () { return Promise.resolve().then(function () { return require(/* webpackChunkName: "projects_page" */ "./Projects.view"); }).then(function (module) { return module.ProjectsView; }); },
    RequestService: function () { return Promise.resolve().then(function () { return require(/* webpackChunkName: "projects_page" */ "./Projects.requests"); }).then(function (module) { return module.ProjectsRequests; }); },
    ListService: function () { return Promise.resolve().then(function () { return require(/* webpackChunkName: "projects_page" */ "./containers//ProjectsList/ProjectsList.store"); }).then(function (module) { return module.ProjectsListStore; }); },
    ModalsService: function () { return Promise.resolve().then(function () { return require(/* webpackChunkName: "projects_page" */ "./Projects.modals"); }).then(function (module) { return module.ProjectsModals; }); },
};
//# sourceMappingURL=Projects.imports.js.map