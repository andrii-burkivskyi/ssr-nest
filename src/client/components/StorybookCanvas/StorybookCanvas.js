"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = require("react");
var storybook_canvas_scss_1 = require("./storybook_canvas.scss");
;
var StorybookCanvas = /** @class */ (function (_super) {
    tslib_1.__extends(StorybookCanvas, _super);
    function StorybookCanvas() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StorybookCanvas.prototype.render = function () {
        var _a = this.props, children = _a.children, width = _a.width, height = _a.height, padding = _a.padding, color = _a.color;
        return (react_1.default.createElement("div", { className: storybook_canvas_scss_1.default.container },
            react_1.default.createElement("div", { className: storybook_canvas_scss_1.default.canvas, style: { width: width, height: height, padding: padding, backgroundColor: color } }, children)));
    };
    return StorybookCanvas;
}(react_1.Component));
exports.default = StorybookCanvas;
//# sourceMappingURL=StorybookCanvas.js.map