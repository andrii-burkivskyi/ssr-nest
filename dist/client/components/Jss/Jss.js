"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_jss_1 = require("react-jss");
exports.Jss = ({ styles, children }) => {
    const classes = react_jss_1.createUseStyles(styles)();
    if (typeof children === "function") {
        return children(classes);
    }
    return null;
};
//# sourceMappingURL=Jss.js.map