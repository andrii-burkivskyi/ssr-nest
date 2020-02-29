"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_dom_1 = require("react-dom");
const lodash_throttle_1 = require("lodash.throttle");
const constants_1 = require("../../utils/constants");
class ClickOutside extends React.Component {
    constructor() {
        super(...arguments);
        this.handleClickOutside = lodash_throttle_1.default((event) => {
            const { onClick } = this.props;
            const node = react_dom_1.findDOMNode(this);
            if (node && node.contains(event.target))
                return;
            onClick(event);
        }, 16);
    }
    componentDidMount() {
        if (!constants_1.IS_NODE()) {
            document.addEventListener('click', this.handleClickOutside, true);
            document.addEventListener('touchend', this.handleClickOutside, true);
        }
    }
    componentWillUnmount() {
        if (!constants_1.IS_NODE()) {
            document.removeEventListener('click', this.handleClickOutside, true);
            document.removeEventListener('touchend', this.handleClickOutside, true);
            if (this.handleClickOutside && this.handleClickOutside.cancel) {
                this.handleClickOutside.cancel();
            }
        }
    }
    render() {
        const { children } = this.props;
        return children;
    }
}
exports.default = ClickOutside;
//# sourceMappingURL=ClickOutside.js.map