"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = require("react");
var react_custom_scrollbars_1 = require("react-custom-scrollbars");
var react_jss_1 = require("react-jss");
var styles = {
    container: {
        height: "100%",
        flex: "1 1 0",
        "&::-webkit-scrollbar": {
            display: "none"
        }
    },
};
var Scrollbar = /** @class */ (function (_super) {
    tslib_1.__extends(Scrollbar, _super);
    function Scrollbar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Scrollbar.prototype.render = function () {
        var _a = this.props, children = _a.children, classes = _a.classes;
        return (react_1.default.createElement("div", { className: classes.container },
            react_1.default.createElement(react_custom_scrollbars_1.default, null, children)));
    };
    return Scrollbar;
}(react_1.Component));
exports.default = react_jss_1.default(styles)(Scrollbar);
//# sourceMappingURL=Scrollbar.js.map