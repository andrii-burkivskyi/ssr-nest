"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const storybook_canvas_scss_1 = require("./storybook_canvas.scss");
;
class StorybookCanvas extends react_1.Component {
    render() {
        const { children, width, height, padding, color } = this.props;
        return (react_1.default.createElement("div", { className: storybook_canvas_scss_1.default.container },
            react_1.default.createElement("div", { className: storybook_canvas_scss_1.default.canvas, style: { width, height, padding, backgroundColor: color } }, children)));
    }
}
exports.default = StorybookCanvas;
//# sourceMappingURL=StorybookCanvas.js.map