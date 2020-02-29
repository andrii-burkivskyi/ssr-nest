"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const React = require("react");
const mobx_react_1 = require("mobx-react");
const routes_1 = require("../../../../core/routes");
const Link_1 = require("../../../../components/Link/Link");
const Jss_1 = require("../../../../components/Jss/Jss");
const ProjectsList_jss_1 = require("./ProjectsList.jss");
let ProjectsListView = class ProjectsListView extends React.Component {
    render() {
        const { model } = this.props;
        return (React.createElement(Jss_1.Jss, { styles: ProjectsList_jss_1.styles }, (classes) => (React.createElement(React.Fragment, null, model.requests.projects.data.map((project) => (React.createElement("div", { key: project.id, className: classes.container, style: { boxShadow: `0 -4px 0 0 ${project.color}` } },
            React.createElement("div", { className: classes.header },
                React.createElement("button", { "data-modal-id": model.modals.project.id, className: classes.control_button, onClick: () => model.modals.project.toggle(project) }),
                React.createElement("button", { className: classes.control_button, onClick: project.delete })),
            React.createElement(Link_1.default, { className: classes.content, to: routes_1.Routes.PROJECT, params: { projectId: project.id } },
                React.createElement("h3", { className: classes.name }, project.name),
                React.createElement("span", { className: classes.url }, project.url)))))))));
    }
};
ProjectsListView = tslib_1.__decorate([
    mobx_react_1.observer
], ProjectsListView);
exports.ProjectsListView = ProjectsListView;
//# sourceMappingURL=ProjectsList.view.js.map