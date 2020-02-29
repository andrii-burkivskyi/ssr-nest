"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const React = require("react");
const mobx_react_1 = require("mobx-react");
const Portal_1 = require("../Portal/Portal");
const DomAlign_1 = require("./DomAlign");
const ClickOutside_1 = require("./ClickOutside");
let Overlay = class Overlay extends React.Component {
    constructor() {
        super(...arguments);
        this.onOutsideClick = (event) => {
            const { target, onOutsideClick } = this.props;
            if (target.current && event && target.current.contains(event.currentTarget)) {
                return;
            }
            if (onOutsideClick) {
                onOutsideClick(event);
            }
        };
    }
    render() {
        if (!this.props.isOpen) {
            return null;
        }
        const width = this.props.target.current
            ? this.props.target.current.offsetWidth
            : 100;
        return (React.createElement(Portal_1.default, null,
            React.createElement(ClickOutside_1.default, { onClick: this.onOutsideClick },
                React.createElement(DomAlign_1.default, { config: this.props.alignConfig, target: this.props.target, resize: this.props.resize },
                    React.createElement("div", { className: this.props.className, style: { width, position: "fixed" } }, this.props.children)))));
    }
};
Overlay.defaultProps = {
    isOpen: false,
    onOutsideClick: () => { },
    alignConfig: {
        points: ['tr', 'br'],
        offset: [0, 0],
    },
    resize: true,
};
Overlay = tslib_1.__decorate([
    mobx_react_1.observer
], Overlay);
exports.default = Overlay;
//# sourceMappingURL=Overlay.js.map