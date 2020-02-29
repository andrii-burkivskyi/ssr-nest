"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const react_1 = require("react");
const mobx_react_1 = require("mobx-react");
const react_jss_1 = require("react-jss");
const Link_1 = require("../../../../components/Link/Link");
const Frontend_1 = require("../../../../components/icons/Frontend");
const Backend_1 = require("../../../../components/icons/Backend");
const translations_1 = require("../../../../utils/i18n/translations");
const routes_1 = require("../../../../core/routes");
const styles = {
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
let HeaderNavViewBase = class HeaderNavViewBase extends react_1.Component {
    render() {
        const { model, classes } = this.props;
        return (react_1.default.createElement("div", { className: classes.container },
            react_1.default.createElement(Link_1.default, { className: classes.menu_item, to: routes_1.Routes.FRONTEND, params: model.params },
                react_1.default.createElement(Frontend_1.default, { className: classes.menu_item_icon }),
                react_1.default.createElement("span", { className: classes.menu_item_text }, translations_1.t(model.i18n.frontend))),
            react_1.default.createElement(Link_1.default, { className: classes.menu_item, to: routes_1.Routes.BACKEND, params: model.params },
                react_1.default.createElement(Backend_1.default, { className: classes.menu_item_icon }),
                react_1.default.createElement("span", { className: classes.menu_item_text }, translations_1.t(model.i18n.backend)))));
    }
};
HeaderNavViewBase = tslib_1.__decorate([
    mobx_react_1.observer
], HeaderNavViewBase);
exports.HeaderNavViewBase = HeaderNavViewBase;
exports.HeaderNavView = react_jss_1.default(styles)(HeaderNavViewBase);
//# sourceMappingURL=HeaderNav.view.js.map