"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = require("react");
var mobx_react_1 = require("mobx-react");
var react_jss_1 = require("react-jss");
var Link_1 = require("../../../../components/Link/Link");
var Frontend_1 = require("../../../../components/icons/Frontend");
var Backend_1 = require("../../../../components/icons/Backend");
var translations_1 = require("../../../../utils/i18n/translations");
var routes_1 = require("../../../../core/routes");
var styles = {
    container: {
        display: "flex",
        padding: "0 10px"
    },
    menu_item: {
        display: "flex",
        alignItems: "center"
    },
    menu_item_icon: {
        margin: "0 10px",
        width: "36px",
        height: "36px",
        "& .background": {
            fill: "#E3E4DB",
        },
        "& .icon": {
            fill: "#202c39"
        }
    },
    menu_item_text: {
        fontFamily: "'Open Sans', sans-serif",
        color: "#E3E4DB",
        ".active &": {
            boxShadow: "0 2px 0 0 #E3E4DB"
        },
        "$menu_item:hover &": {
            boxShadow: "0 2px 0 0 #E3E4DB"
        }
    }
};
var HeaderNavViewBase = /** @class */ (function (_super) {
    tslib_1.__extends(HeaderNavViewBase, _super);
    function HeaderNavViewBase() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HeaderNavViewBase.prototype.render = function () {
        var _a = this.props, model = _a.model, classes = _a.classes;
        return (react_1.default.createElement("div", { className: classes.container },
            react_1.default.createElement(Link_1.default, { className: classes.menu_item, to: routes_1.Routes.FRONTEND, params: model.params },
                react_1.default.createElement(Frontend_1.default, { className: classes.menu_item_icon }),
                react_1.default.createElement("span", { className: classes.menu_item_text }, translations_1.t(model.i18n.frontend))),
            react_1.default.createElement(Link_1.default, { className: classes.menu_item, to: routes_1.Routes.BACKEND, params: model.params },
                react_1.default.createElement(Backend_1.default, { className: classes.menu_item_icon }),
                react_1.default.createElement("span", { className: classes.menu_item_text }, translations_1.t(model.i18n.backend)))));
    };
    HeaderNavViewBase = tslib_1.__decorate([
        mobx_react_1.observer
    ], HeaderNavViewBase);
    return HeaderNavViewBase;
}(react_1.Component));
exports.HeaderNavViewBase = HeaderNavViewBase;
exports.HeaderNavView = react_jss_1.default(styles)(HeaderNavViewBase);
//# sourceMappingURL=HeaderNav.view.js.map