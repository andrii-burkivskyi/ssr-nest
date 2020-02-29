"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var mobx_react_1 = require("mobx-react");
var Portal_1 = require("../Portal/Portal");
var ClickOutside_1 = require("../Overlay/ClickOutside");
var Modal_store_1 = require("./Modal.store");
var Modal = /** @class */ (function (_super) {
    tslib_1.__extends(Modal, _super);
    function Modal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Modal.prototype.componentDidMount = function () {
        this.props.model.load();
    };
    Modal.prototype.componentDidUpdate = function () {
        this.props.model.load();
    };
    Modal.prototype.render = function () {
        var Component = this.props.model.loadedComponent;
        var model = this.props.model.loadedModel;
        if (this.props.model.isOpen && Component && model) {
            return (React.createElement(Portal_1.default, null,
                React.createElement(ClickOutside_1.default, { onClick: Modal_store_1.default.closeModalsByClick },
                    React.createElement("div", { ref: this.props.model.containerRef },
                        React.createElement(Component, { model: model })))));
        }
        return null;
    };
    Modal = tslib_1.__decorate([
        mobx_react_1.observer
    ], Modal);
    return Modal;
}(React.Component));
exports.default = Modal;
//# sourceMappingURL=Modal.js.map