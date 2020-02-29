"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const react_custom_scrollbars_1 = require("react-custom-scrollbars");
const react_jss_1 = require("react-jss");
const styles = {
    container: {
        height: "100%",
        flex: "1 1 0",
        "&::-webkit-scrollbar": {
            display: "none"
        }
    },
};
class Scrollbar extends react_1.Component {
    render() {
        const { children, classes } = this.props;
        return (react_1.default.createElement("div", { className: classes.container },
            react_1.default.createElement(react_custom_scrollbars_1.default, null, children)));
    }
}
exports.default = react_jss_1.default(styles)(Scrollbar);
//# sourceMappingURL=Scrollbar.js.map