"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Projects = {
    Store: () => Promise.resolve().then(() => require("./Projects.store")).then((module) => module.ProjectsStore),
    View: () => Promise.resolve().then(() => require("./Projects.view")).then((module) => module.ProjectsView),
    RequestService: () => Promise.resolve().then(() => require("./Projects.requests")).then((module) => module.ProjectsRequests),
    ListService: () => Promise.resolve().then(() => require("./containers//ProjectsList/ProjectsList.store")).then((module) => module.ProjectsListStore),
    ModalsService: () => Promise.resolve().then(() => require("./Projects.modals")).then((module) => module.ProjectsModals),
};
//# sourceMappingURL=Projects.imports.js.map