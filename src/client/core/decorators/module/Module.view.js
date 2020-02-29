"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var mobx_react_1 = require("mobx-react");
var ModulesList_base_1 = require("./ModulesList.base");
var mobx_1 = require("mobx");
var ModuleView = /** @class */ (function (_super) {
    tslib_1.__extends(ModuleView, _super);
    function ModuleView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(ModuleView.prototype, "module", {
        get: function () {
            return this.props.module instanceof ModulesList_base_1.ModulesListBase
                ? this.props.module.item
                : this.props.module;
        },
        enumerable: true,
        configurable: true
    });
    ModuleView.prototype.componentDidMount = function () {
        var _a, _b, _c;
        ((_a = this.props) === null || _a === void 0 ? void 0 : _a.module) instanceof ModulesList_base_1.ModulesListBase
            ? (_b = this.props) === null || _b === void 0 ? void 0 : _b.module.onMount() : (_c = this.props) === null || _c === void 0 ? void 0 : _c.module.guard.onMount();
    };
    ModuleView.prototype.componentWillUnmount = function () {
        var _a, _b, _c;
        ((_a = this.props) === null || _a === void 0 ? void 0 : _a.module) instanceof ModulesList_base_1.ModulesListBase
            ? (_b = this.props) === null || _b === void 0 ? void 0 : _b.module.onUnmount() : (_c = this.props) === null || _c === void 0 ? void 0 : _c.module.guard.onUnmount();
    };
    ModuleView.prototype.render = function () {
        var _a, _b;
        if (!this.module) {
            ((_a = this.props) === null || _a === void 0 ? void 0 : _a.module) instanceof ModulesList_base_1.ModulesListBase
                ? ((_b = this.props) === null || _b === void 0 ? void 0 : _b.module.initModules.length) === 0 && console.error('Cannot render ModuleView without module list store item')
                : console.error('Cannot render ModuleView without module');
            return null;
        }
        var View = this.module.View;
        var model = this.module.model;
        if (!this.module.shouldDisplay || !View || !model) {
            return null;
        }
        if (!this.module.parent) {
            return (React.createElement(mobx_react_1.Provider, { state: this.props.module },
                React.createElement(View, { model: model })));
        }
        return (React.createElement(View, { model: model }));
    };
    tslib_1.__decorate([
        mobx_1.computed,
        tslib_1.__metadata("design:type", Object),
        tslib_1.__metadata("design:paramtypes", [])
    ], ModuleView.prototype, "module", null);
    tslib_1.__decorate([
        mobx_1.action,
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", []),
        tslib_1.__metadata("design:returntype", void 0)
    ], ModuleView.prototype, "componentDidMount", null);
    tslib_1.__decorate([
        mobx_1.action,
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", []),
        tslib_1.__metadata("design:returntype", void 0)
    ], ModuleView.prototype, "componentWillUnmount", null);
    ModuleView = tslib_1.__decorate([
        mobx_react_1.observer
    ], ModuleView);
    return ModuleView;
}(React.Component));
exports.ModuleView = ModuleView;
//# sourceMappingURL=Module.view.js.map