"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const Project_service_1 = require("../../data/Projects/Project.service");
const Project_query_1 = require("../../data/Projects/Project.query");
const service_decorator_1 = require("../../core/decorators/service/service.decorator");
let ProjectsRequests = class ProjectsRequests {
    constructor() {
        this.projects = new Project_service_1.ProjectsList({
            query: new Project_query_1.ProjectQuery()
        });
    }
};
ProjectsRequests = tslib_1.__decorate([
    service_decorator_1.Service("ProjectsRequests")
], ProjectsRequests);
exports.ProjectsRequests = ProjectsRequests;
//# sourceMappingURL=Projects.requests.js.map