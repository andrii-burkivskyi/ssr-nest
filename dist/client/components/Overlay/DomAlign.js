"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const dom_align_1 = require("dom-align");
const lodash_throttle_1 = require("lodash.throttle");
class DomAlign extends React.PureComponent {
    constructor(props) {
        super(props);
        this.source = React.createRef();
        this.align = lodash_throttle_1.default((event) => {
            const { target, config } = this.props;
            const { source } = this;
            const isScrollingOnSource = event
                ? Boolean(source.current && event && source.current.contains(event.target))
                : false;
            if (target && target.current && source && source.current && !isScrollingOnSource) {
                dom_align_1.default(source.current, target.current, config);
            }
        }, 16);
    }
    componentDidMount() {
        this.timeoutId = setTimeout(() => this.align(), 0);
        if (this.props.resize) {
            window.addEventListener('resize', this.align);
            window.addEventListener('scroll', this.align);
            window.addEventListener('wheel', this.align);
        }
    }
    componentDidUpdate() {
        this.timeoutId = setTimeout(() => this.align(), 0);
    }
    componentWillUnmount() {
        if (this.props.resize) {
            window.removeEventListener('resize', this.align);
            window.removeEventListener('scroll', this.align);
            window.removeEventListener('wheel', this.align);
        }
        if (this.timeoutId)
            clearTimeout(this.timeoutId);
    }
    render() {
        return React.cloneElement(React.Children.only(this.props.children), { ref: this.source });
    }
}
DomAlign.defaultProps = {
    target: undefined,
    resize: false,
};
exports.default = DomAlign;
//# sourceMappingURL=DomAlign.js.map