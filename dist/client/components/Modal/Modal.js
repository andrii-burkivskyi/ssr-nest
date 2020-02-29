"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const React = require("react");
const mobx_react_1 = require("mobx-react");
const Portal_1 = require("../Portal/Portal");
const ClickOutside_1 = require("../Overlay/ClickOutside");
const Modal_store_1 = require("./Modal.store");
let Modal = class Modal extends React.Component {
    componentDidMount() {
        this.props.model.load();
    }
    componentDidUpdate() {
        this.props.model.load();
    }
    render() {
        const Component = this.props.model.loadedComponent;
        const model = this.props.model.loadedModel;
        if (this.props.model.isOpen && Component && model) {
            return (React.createElement(Portal_1.default, null,
                React.createElement(ClickOutside_1.default, { onClick: Modal_store_1.default.closeModalsByClick },
                    React.createElement("div", { ref: this.props.model.containerRef },
                        React.createElement(Component, { model: model })))));
        }
        return null;
    }
};
Modal = tslib_1.__decorate([
    mobx_react_1.observer
], Modal);
exports.default = Modal;
//# sourceMappingURL=Modal.js.map