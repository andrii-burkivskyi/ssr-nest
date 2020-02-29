"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_jss_1 = require("react-jss");
exports.Jss = function (_a) {
    var styles = _a.styles, children = _a.children;
    var classes = react_jss_1.createUseStyles(styles)();
    if (typeof children === "function") {
        return children(classes);
    }
    return null;
};
//# sourceMappingURL=Jss.js.map