"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = require("react");
var mobx_react_1 = require("mobx-react");
var Dashboard_1 = require("../../../../components/icons/Dashboard");
var routes_1 = require("../../../../core/routes");
var SidebarNavItem_view_1 = require("../SidebarNavItem/SidebarNavItem.view");
var FrontendSidebarNavView = /** @class */ (function (_super) {
    tslib_1.__extends(FrontendSidebarNavView, _super);
    function FrontendSidebarNavView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FrontendSidebarNavView.prototype.render = function () {
        var model = this.props.model;
        return (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement(SidebarNavItem_view_1.SidebarNavItem, { to: routes_1.Routes.FRONTEND, params: model.params, svg: Dashboard_1.default, exact: true })));
    };
    FrontendSidebarNavView = tslib_1.__decorate([
        mobx_react_1.observer
    ], FrontendSidebarNavView);
    return FrontendSidebarNavView;
}(react_1.Component));
exports.FrontendSidebarNavView = FrontendSidebarNavView;
//# sourceMappingURL=FrontendSidebarNav.view.js.map