"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var dom_align_1 = require("dom-align");
var lodash_throttle_1 = require("lodash.throttle");
var DomAlign = /** @class */ (function (_super) {
    tslib_1.__extends(DomAlign, _super);
    function DomAlign(props) {
        var _this = _super.call(this, props) || this;
        _this.source = React.createRef();
        _this.align = lodash_throttle_1.default(function (event) {
            var _a = _this.props, target = _a.target, config = _a.config;
            var source = _this.source;
            var isScrollingOnSource = event
                ? Boolean(source.current && event && source.current.contains(event.target))
                : false;
            if (target && target.current && source && source.current && !isScrollingOnSource) {
                // Note: Wait for two react instance ready.
                dom_align_1.default(source.current, target.current, config);
            }
        }, 16);
        return _this;
    }
    DomAlign.prototype.componentDidMount = function () {
        var _this = this;
        this.timeoutId = setTimeout(function () { return _this.align(); }, 0);
        if (this.props.resize) {
            window.addEventListener('resize', this.align);
            window.addEventListener('scroll', this.align);
            window.addEventListener('wheel', this.align);
        }
    };
    DomAlign.prototype.componentDidUpdate = function () {
        var _this = this;
        // TODO: make it async. there is a problem of overlay in dialog case.
        this.timeoutId = setTimeout(function () { return _this.align(); }, 0);
    };
    DomAlign.prototype.componentWillUnmount = function () {
        if (this.props.resize) {
            window.removeEventListener('resize', this.align);
            window.removeEventListener('scroll', this.align);
            window.removeEventListener('wheel', this.align);
        }
        if (this.timeoutId)
            clearTimeout(this.timeoutId);
    };
    DomAlign.prototype.render = function () {
        return React.cloneElement(React.Children.only(this.props.children), { ref: this.source });
    };
    DomAlign.defaultProps = {
        target: undefined,
        resize: false,
    };
    return DomAlign;
}(React.PureComponent));
exports.default = DomAlign;
//# sourceMappingURL=DomAlign.js.map