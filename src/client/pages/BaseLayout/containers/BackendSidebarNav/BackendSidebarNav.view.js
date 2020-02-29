"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = require("react");
var mobx_react_1 = require("mobx-react");
var Dashboard_1 = require("../../../../components/icons/Dashboard");
var Entity_1 = require("../../../../components/icons/Entity");
var routes_1 = require("../../../../core/routes");
var SidebarNavItem_view_1 = require("../SidebarNavItem/SidebarNavItem.view");
var BackendSidebarNavView = /** @class */ (function (_super) {
    tslib_1.__extends(BackendSidebarNavView, _super);
    function BackendSidebarNavView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BackendSidebarNavView.prototype.render = function () {
        var model = this.props.model;
        return (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement(SidebarNavItem_view_1.SidebarNavItem, { to: routes_1.Routes.BACKEND, params: model.params, svg: Dashboard_1.default, exact: true }),
            react_1.default.createElement(SidebarNavItem_view_1.SidebarNavItem, { to: routes_1.Routes.BACKEND_ENTITY, params: model.params, svg: Entity_1.default, exact: true })));
    };
    BackendSidebarNavView = tslib_1.__decorate([
        mobx_react_1.observer
    ], BackendSidebarNavView);
    return BackendSidebarNavView;
}(react_1.Component));
exports.BackendSidebarNavView = BackendSidebarNavView;
//# sourceMappingURL=BackendSidebarNav.view.js.map