"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const React = require("react");
const mobx_1 = require("mobx");
const mobx_react_1 = require("mobx-react");
const Location_service_1 = require("../../core/services/Location.service");
const Module_base_1 = require("../../core/decorators/module/Module.base");
const url_1 = require("../../utils/url");
;
let Link = class Link extends React.Component {
    constructor() {
        super(...arguments);
        this.location = Module_base_1.ModuleBase.services.get(Location_service_1.LocationService);
        this.onClick = (event) => {
            event.preventDefault();
            const { to, params } = this.props;
            this.location.pushWithParams(to, params);
        };
    }
    get className() {
        const { to, exact = false } = this.props;
        const isActive = this.location.isValidRoute({ route: to, options: { end: exact } });
        return `${this.props.className}${isActive ? ' active' : ''}`;
    }
    render() {
        return (React.createElement("a", { className: this.className, style: this.props.style, href: url_1.buildUrl(this.props.to, this.props.params), onClick: this.onClick, "data-tip": this.props['data-tip'], "data-for": this.props['data-for'] }, this.props.children));
    }
};
tslib_1.__decorate([
    mobx_1.computed,
    tslib_1.__metadata("design:type", Object),
    tslib_1.__metadata("design:paramtypes", [])
], Link.prototype, "className", null);
tslib_1.__decorate([
    mobx_1.action,
    tslib_1.__metadata("design:type", Object)
], Link.prototype, "onClick", void 0);
Link = tslib_1.__decorate([
    mobx_react_1.observer
], Link);
exports.default = Link;
//# sourceMappingURL=Link.js.map