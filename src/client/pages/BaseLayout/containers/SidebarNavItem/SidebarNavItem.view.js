"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = require("react");
var mobx_react_1 = require("mobx-react");
var react_jss_1 = require("react-jss");
var Link_1 = require("../../../../components/Link/Link");
var styles = {
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
var SidebarNavItemBase = /** @class */ (function (_super) {
    tslib_1.__extends(SidebarNavItemBase, _super);
    function SidebarNavItemBase() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SidebarNavItemBase.prototype.render = function () {
        var Icon = this.props.svg;
        return (react_1.default.createElement(Link_1.default, { className: this.props.classes.link, to: this.props.to, params: this.props.params, exact: this.props.exact },
            react_1.default.createElement(Icon, { className: this.props.classes.icon })));
    };
    SidebarNavItemBase = tslib_1.__decorate([
        mobx_react_1.observer
    ], SidebarNavItemBase);
    return SidebarNavItemBase;
}(react_1.Component));
exports.SidebarNavItemBase = SidebarNavItemBase;
exports.SidebarNavItem = react_jss_1.default(styles)(SidebarNavItemBase);
//# sourceMappingURL=SidebarNavItem.view.js.map