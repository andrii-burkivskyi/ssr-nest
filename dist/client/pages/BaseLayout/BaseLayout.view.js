"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const React = require("react");
const mobx_react_1 = require("mobx-react");
const routes_1 = require("../../core/routes");
const Module_view_1 = require("../../core/decorators/module/Module.view");
const Link_1 = require("../../components/Link/Link");
const Logo_1 = require("../../components/icons/Logo");
const Jss_1 = require("../../components/Jss/Jss");
const reset_1 = require("./styles/reset");
const HeaderNav_1 = require("./containers/HeaderNav");
const _1 = require(".");
const styles = Object.assign(Object.assign({}, reset_1.reset), { container: {
        width: "100%",
        height: "100vh",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#283845",
    }, header: {
        display: "flex",
        height: "64px",
        backgroundColor: "#202c39",
    }, logo_container: {
        display: "block",
        height: "64px",
        width: "64px",
        backgroundColor: "#E3E4DB"
    }, logo_icon: {
        margin: "5px",
        "& .background": {
            fill: "#202c39",
        },
        "& .icon": {
            fill: "#E3E4DB",
        }
    }, body: {
        display: "flex",
        flex: "1 1 0",
    }, sidebar: {
        display: "flex",
        flexDirection: "column",
        flex: "1 1 0",
        maxWidth: "64px",
        minWidth: "64px",
        backgroundColor: "#202c39",
    }, content: {
        display: "flex",
        flex: "1 1 0",
    } });
let BaseLayoutView = class BaseLayoutView extends React.Component {
    render() {
        const { model } = this.props;
        return (React.createElement(Jss_1.Jss, { styles: styles }, (classes) => (React.createElement("div", { className: classes.container },
            React.createElement("header", { className: classes.header },
                React.createElement(Link_1.default, { className: classes.logo_container, to: routes_1.Routes.HOME },
                    React.createElement(Logo_1.default, { className: classes.logo_icon })),
                React.createElement(Module_view_1.ModuleView, { module: model.module.children.get(HeaderNav_1.HeaderNavModule) })),
            React.createElement("div", { className: classes.body },
                React.createElement("aside", { className: classes.sidebar },
                    React.createElement(Module_view_1.ModuleView, { module: model.module.children.get(_1.SidebarNavModulesList) })),
                React.createElement("div", { className: classes.content },
                    React.createElement(Module_view_1.ModuleView, { module: model.module.children.get(_1.PagesModulesList) })))))));
    }
};
BaseLayoutView = tslib_1.__decorate([
    mobx_react_1.observer
], BaseLayoutView);
exports.BaseLayoutView = BaseLayoutView;
//# sourceMappingURL=BaseLayout.view.js.map