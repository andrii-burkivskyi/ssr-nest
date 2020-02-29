"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var Project_service_1 = require("../../data/Projects/Project.service");
var Project_query_1 = require("../../data/Projects/Project.query");
var service_decorator_1 = require("../../core/decorators/service/service.decorator");
var ProjectsRequests = /** @class */ (function () {
    function ProjectsRequests() {
        this.projects = new Project_service_1.ProjectsList({
            query: new Project_query_1.ProjectQuery()
        });
    }
    ProjectsRequests = tslib_1.__decorate([
        service_decorator_1.Service("ProjectsRequests")
    ], ProjectsRequests);
    return ProjectsRequests;
}());
exports.ProjectsRequests = ProjectsRequests;
//# sourceMappingURL=Projects.requests.js.map