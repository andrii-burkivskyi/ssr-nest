"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = require("react");
var mobx_react_1 = require("mobx-react");
var Scrollbar_1 = require("../../components/Scrollbar/Scrollbar");
var Jss_1 = require("../../components/Jss/Jss");
// import Icon from "../../../../components/Icon/Icon";
// import addIcon from "../../../../icons/add.svg";
var ProjectsList_view_1 = require("./containers/ProjectsList/ProjectsList.view");
var styles = {
    container: {
        display: "flex",
        flex: "1 1 0",
        alignItems: "flex-start",
        flexWrap: "wrap",
        padding: "10px",
    },
};
var ProjectsView = /** @class */ (function (_super) {
    tslib_1.__extends(ProjectsView, _super);
    function ProjectsView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ProjectsView.prototype.render = function () {
        var model = this.props.model;
        return (react_1.default.createElement(Jss_1.Jss, { styles: styles }, function (classes) { return (react_1.default.createElement(Scrollbar_1.default, null,
            react_1.default.createElement("div", { className: classes.container },
                react_1.default.createElement(ProjectsList_view_1.ProjectsListView, { model: model.list })))); }));
    };
    ProjectsView = tslib_1.__decorate([
        mobx_react_1.observer
    ], ProjectsView);
    return ProjectsView;
}(react_1.Component));
exports.ProjectsView = ProjectsView;
//# sourceMappingURL=Projects.view.js.map