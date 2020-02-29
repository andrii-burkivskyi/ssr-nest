"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_dom_1 = require("react-dom");
const dom_1 = require("../../utils/dom");
const constants_1 = require("../../utils/constants");
class Portal extends React.Component {
    componentWillUnmount() {
        if (this.portalNode && !constants_1.IS_NODE()) {
            document.body.removeChild(this.portalNode);
        }
        this.portalNode = null;
    }
    render() {
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
    }
}
exports.default = Portal;
//# sourceMappingURL=Portal.js.map