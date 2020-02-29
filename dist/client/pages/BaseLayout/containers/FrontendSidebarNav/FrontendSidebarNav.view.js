"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const react_1 = require("react");
const mobx_react_1 = require("mobx-react");
const Dashboard_1 = require("../../../../components/icons/Dashboard");
const routes_1 = require("../../../../core/routes");
const SidebarNavItem_view_1 = require("../SidebarNavItem/SidebarNavItem.view");
let FrontendSidebarNavView = class FrontendSidebarNavView extends react_1.Component {
    render() {
        const { model } = this.props;
        return (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement(SidebarNavItem_view_1.SidebarNavItem, { to: routes_1.Routes.FRONTEND, params: model.params, svg: Dashboard_1.default, exact: true })));
    }
};
FrontendSidebarNavView = tslib_1.__decorate([
    mobx_react_1.observer
], FrontendSidebarNavView);
exports.FrontendSidebarNavView = FrontendSidebarNavView;
//# sourceMappingURL=FrontendSidebarNav.view.js.map