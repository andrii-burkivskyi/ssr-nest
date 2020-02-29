"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const react_1 = require("react");
const mobx_react_1 = require("mobx-react");
const Scrollbar_1 = require("../../components/Scrollbar/Scrollbar");
const Jss_1 = require("../../components/Jss/Jss");
const ProjectsList_view_1 = require("./containers/ProjectsList/ProjectsList.view");
const styles = {
    container: {
        display: "flex",
        flex: "1 1 0",
        alignItems: "flex-start",
        flexWrap: "wrap",
        padding: "10px",
    },
};
let ProjectsView = class ProjectsView extends react_1.Component {
    render() {
        const { model } = this.props;
        return (react_1.default.createElement(Jss_1.Jss, { styles: styles }, (classes) => (react_1.default.createElement(Scrollbar_1.default, null,
            react_1.default.createElement("div", { className: classes.container },
                react_1.default.createElement(ProjectsList_view_1.ProjectsListView, { model: model.list }))))));
    }
};
ProjectsView = tslib_1.__decorate([
    mobx_react_1.observer
], ProjectsView);
exports.ProjectsView = ProjectsView;
//# sourceMappingURL=Projects.view.js.map