"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const react_1 = require("react");
const mobx_react_1 = require("mobx-react");
const react_jss_1 = require("react-jss");
const Link_1 = require("../../../../components/Link/Link");
const styles = {
    link: {
        margin: "2px 0",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "64px",
        "&.active": {
            boxShadow: "inset 2px 0 0 0 #E3E4DB"
        },
        "&:hover": {
            boxShadow: "inset 2px 0 0 0 #E3E4DB"
        }
    },
    icon: {
        display: "inline-block",
        width: "24px",
        height: "24px",
        fill: "#E3E4DB"
    }
};
let SidebarNavItemBase = class SidebarNavItemBase extends react_1.Component {
    render() {
        const Icon = this.props.svg;
        return (react_1.default.createElement(Link_1.default, { className: this.props.classes.link, to: this.props.to, params: this.props.params, exact: this.props.exact },
            react_1.default.createElement(Icon, { className: this.props.classes.icon })));
    }
};
SidebarNavItemBase = tslib_1.__decorate([
    mobx_react_1.observer
], SidebarNavItemBase);
exports.SidebarNavItemBase = SidebarNavItemBase;
exports.SidebarNavItem = react_jss_1.default(styles)(SidebarNavItemBase);
//# sourceMappingURL=SidebarNavItem.view.js.map