"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var react_dom_1 = require("react-dom");
var dom_1 = require("../../utils/dom");
var constants_1 = require("../../utils/constants");
var Portal = /** @class */ (function (_super) {
    tslib_1.__extends(Portal, _super);
    function Portal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Portal.prototype.componentWillUnmount = function () {
        if (this.portalNode && !constants_1.IS_NODE()) {
            document.body.removeChild(this.portalNode);
        }
        this.portalNode = null;
    };
    Portal.prototype.render = function () {
        if (!dom_1.canUseDOM || constants_1.IS_NODE()) {
            return null;
        }
        if (!this.portalNode) {
            this.portalNode = document.createElement('div');
            this.portalNode.style.maxHeight = "0px";
            this.portalNode.style.lineHeight = "0px";
            this.portalNode.style.overflow = "hidden";
            document.body.appendChild(this.portalNode);
        }
        return react_dom_1.default.createPortal(this.props.children, this.portalNode);
    };
    return Portal;
}(React.Component));
exports.default = Portal;
//# sourceMappingURL=Portal.js.map