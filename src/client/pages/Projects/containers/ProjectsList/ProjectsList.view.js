"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var mobx_react_1 = require("mobx-react");
// import editIcon from "../../../../../../icons/edit.svg";
// import deleteIcon from "../../../../../../icons/delete.svg";
var routes_1 = require("../../../../core/routes");
var Link_1 = require("../../../../components/Link/Link");
var Jss_1 = require("../../../../components/Jss/Jss");
var ProjectsList_jss_1 = require("./ProjectsList.jss");
var ProjectsListView = /** @class */ (function (_super) {
    tslib_1.__extends(ProjectsListView, _super);
    function ProjectsListView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ProjectsListView.prototype.render = function () {
        var model = this.props.model;
        return (React.createElement(Jss_1.Jss, { styles: ProjectsList_jss_1.styles }, function (classes) { return (React.createElement(React.Fragment, null, model.requests.projects.data.map(function (project) { return (React.createElement("div", { key: project.id, className: classes.container, style: { boxShadow: "0 -4px 0 0 " + project.color } },
            React.createElement("div", { className: classes.header },
                React.createElement("button", { "data-modal-id": model.modals.project.id, className: classes.control_button, onClick: function () { return model.modals.project.toggle(project); } }),
                React.createElement("button", { className: classes.control_button, onClick: project.delete })),
            React.createElement(Link_1.default, { className: classes.content, to: routes_1.Routes.PROJECT, params: { projectId: project.id } },
                React.createElement("h3", { className: classes.name }, project.name),
                React.createElement("span", { className: classes.url }, project.url)))); }))); }));
    };
    ProjectsListView = tslib_1.__decorate([
        mobx_react_1.observer
    ], ProjectsListView);
    return ProjectsListView;
}(React.Component));
exports.ProjectsListView = ProjectsListView;
//# sourceMappingURL=ProjectsList.view.js.map