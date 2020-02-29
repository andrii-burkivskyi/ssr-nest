"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var mobx_react_1 = require("mobx-react");
var Portal_1 = require("../Portal/Portal");
var DomAlign_1 = require("./DomAlign");
var ClickOutside_1 = require("./ClickOutside");
var Overlay = /** @class */ (function (_super) {
    tslib_1.__extends(Overlay, _super);
    function Overlay() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.onOutsideClick = function (event) {
            var _a = _this.props, target = _a.target, onOutsideClick = _a.onOutsideClick;
            if (target.current && event && target.current.contains(event.currentTarget)) {
                return;
            } // Note: Omit clicking target.
            if (onOutsideClick) {
                onOutsideClick(event);
            }
        };
        return _this;
    }
    Overlay.prototype.render = function () {
        if (!this.props.isOpen) {
            return null;
        }
        var width = this.props.target.current
            ? this.props.target.current.offsetWidth
            : 100;
        return (React.createElement(Portal_1.default, null,
            React.createElement(ClickOutside_1.default, { onClick: this.onOutsideClick },
                React.createElement(DomAlign_1.default, { config: this.props.alignConfig, target: this.props.target, resize: this.props.resize },
                    React.createElement("div", { className: this.props.className, style: { width: width, position: "fixed" } }, this.props.children)))));
    };
    Overlay.defaultProps = {
        isOpen: false,
        onOutsideClick: function () { },
        alignConfig: {
            points: ['tr', 'br'],
            offset: [0, 0],
        },
        resize: true,
    };
    Overlay = tslib_1.__decorate([
        mobx_react_1.observer
    ], Overlay);
    return Overlay;
}(React.Component));
exports.default = Overlay;
//# sourceMappingURL=Overlay.js.map