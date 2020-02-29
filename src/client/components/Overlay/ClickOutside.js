"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var react_dom_1 = require("react-dom");
var lodash_throttle_1 = require("lodash.throttle");
var constants_1 = require("../../utils/constants");
var ClickOutside = /** @class */ (function (_super) {
    tslib_1.__extends(ClickOutside, _super);
    function ClickOutside() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.handleClickOutside = lodash_throttle_1.default(function (event) {
            var onClick = _this.props.onClick;
            var node = react_dom_1.findDOMNode(_this);
            if (node && node.contains(event.target))
                return;
            onClick(event);
        }, 16);
        return _this;
    }
    ClickOutside.prototype.componentDidMount = function () {
        if (!constants_1.IS_NODE()) {
            document.addEventListener('click', this.handleClickOutside, true);
            document.addEventListener('touchend', this.handleClickOutside, true);
        }
    };
    ClickOutside.prototype.componentWillUnmount = function () {
        if (!constants_1.IS_NODE()) {
            document.removeEventListener('click', this.handleClickOutside, true);
            document.removeEventListener('touchend', this.handleClickOutside, true);
            if (this.handleClickOutside && this.handleClickOutside.cancel) {
                this.handleClickOutside.cancel();
            }
        }
    };
    ClickOutside.prototype.render = function () {
        var children = this.props.children;
        return children;
    };
    return ClickOutside;
}(React.Component));
exports.default = ClickOutside;
//# sourceMappingURL=ClickOutside.js.map