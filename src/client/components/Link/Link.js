"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var mobx_1 = require("mobx");
var mobx_react_1 = require("mobx-react");
var Location_service_1 = require("../../core/services/Location.service");
var Module_base_1 = require("../../core/decorators/module/Module.base");
var url_1 = require("../../utils/url");
;
var Link = /** @class */ (function (_super) {
    tslib_1.__extends(Link, _super);
    function Link() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.location = Module_base_1.ModuleBase.services.get(Location_service_1.LocationService);
        _this.onClick = function (event) {
            event.preventDefault();
            var _a = _this.props, to = _a.to, params = _a.params;
            _this.location.pushWithParams(to, params);
        };
        return _this;
    }
    Object.defineProperty(Link.prototype, "className", {
        get: function () {
            var _a = this.props, to = _a.to, _b = _a.exact, exact = _b === void 0 ? false : _b;
            var isActive = this.location.isValidRoute({ route: to, options: { end: exact } });
            return "" + this.props.className + (isActive ? ' active' : '');
        },
        enumerable: true,
        configurable: true
    });
    Link.prototype.render = function () {
        return (React.createElement("a", { className: this.className, style: this.props.style, href: url_1.buildUrl(this.props.to, this.props.params), onClick: this.onClick, "data-tip": this.props['data-tip'], "data-for": this.props['data-for'] }, this.props.children));
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
    return Link;
}(React.Component));
exports.default = Link;
//# sourceMappingURL=Link.js.map