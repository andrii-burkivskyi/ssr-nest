"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const React = require("react");
const mobx_react_1 = require("mobx-react");
const ModulesList_base_1 = require("./ModulesList.base");
const mobx_1 = require("mobx");
let ModuleView = class ModuleView extends React.Component {
    get module() {
        return this.props.module instanceof ModulesList_base_1.ModulesListBase
            ? this.props.module.item
            : this.props.module;
    }
    componentDidMount() {
        var _a, _b, _c;
        ((_a = this.props) === null || _a === void 0 ? void 0 : _a.module) instanceof ModulesList_base_1.ModulesListBase
            ? (_b = this.props) === null || _b === void 0 ? void 0 : _b.module.onMount() : (_c = this.props) === null || _c === void 0 ? void 0 : _c.module.guard.onMount();
    }
    componentWillUnmount() {
        var _a, _b, _c;
        ((_a = this.props) === null || _a === void 0 ? void 0 : _a.module) instanceof ModulesList_base_1.ModulesListBase
            ? (_b = this.props) === null || _b === void 0 ? void 0 : _b.module.onUnmount() : (_c = this.props) === null || _c === void 0 ? void 0 : _c.module.guard.onUnmount();
    }
    render() {
        var _a, _b;
        if (!this.module) {
            ((_a = this.props) === null || _a === void 0 ? void 0 : _a.module) instanceof ModulesList_base_1.ModulesListBase
                ? ((_b = this.props) === null || _b === void 0 ? void 0 : _b.module.initModules.length) === 0 && console.error('Cannot render ModuleView without module list store item')
                : console.error('Cannot render ModuleView without module');
            return null;
        }
        const View = this.module.View;
        const model = this.module.model;
        if (!this.module.shouldDisplay || !View || !model) {
            return null;
        }
        if (!this.module.parent) {
            return (React.createElement(mobx_react_1.Provider, { state: this.props.module },
                React.createElement(View, { model: model })));
        }
        return (React.createElement(View, { model: model }));
    }
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
exports.ModuleView = ModuleView;
//# sourceMappingURL=Module.view.js.map