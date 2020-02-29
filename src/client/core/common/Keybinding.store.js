"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var mobx_1 = require("mobx");
// import key from "keymaster";
var constants_1 = require("../../utils/constants");
// key.filter = (event: FilterEvent) => {
//     const { tagName = DEFAULT_STRING } = (event.target || event.srcElement || {});
//     const skippedScopes = [ KeybindingScope.LIST_OPEN ];
//     const currentScope = <KeybindingScope>key.getScope();
//     if (skippedScopes.includes(currentScope)) { return true }
//     return !(tagName === 'INPUT' || tagName === 'SELECT' || tagName === 'TEXTAREA');
// }
var KeybindingScope;
(function (KeybindingScope) {
    KeybindingScope["ALL"] = "all";
    KeybindingScope["LIST_FOCUS"] = "list.focus";
    KeybindingScope["LIST_OPEN"] = "list.open";
})(KeybindingScope || (KeybindingScope = {}));
var KeybindingStore = /** @class */ (function () {
    function KeybindingStore(props) {
        this.defaultProps = {
            name: constants_1.DEFAULT_STRING,
            key: constants_1.DEFAULT_STRING,
            scope: KeybindingScope.ALL,
            action: constants_1.DEFAULT_FUNCTION
        };
        this.name = constants_1.DEFAULT_STRING;
        this.key = constants_1.DEFAULT_STRING;
        this.scope = KeybindingScope.ALL;
        this.action = constants_1.DEFAULT_FUNCTION;
        this.update = function (props) {
            // set(this, props);
            // this.setAction(this.action);
        };
        this.reset = function () {
            // if (this.defaultProps) {
            //     set(this, this.defaultProps);
            //     this.setAction(this.action);
            // }
        };
        this.setAction = function (action) {
            // if (!IS_NODE()) {
            //     key.unbind(this.key, this.scope);
            //     key(this.key, this.scope, action);
            // }
        };
        if (props && !constants_1.IS_NODE()) {
            mobx_1.set(this, props);
            this.defaultProps = tslib_1.__assign(tslib_1.__assign({}, this.defaultProps), props);
            this.setAction(this.action);
        }
    }
    KeybindingStore.setScope = function (scope) {
        // if (!IS_NODE()) {
        //     key.setScope(scope);
        // }
    };
    KeybindingStore.resetScope = function () {
        // if (!IS_NODE()) {
        //     key.setScope(KeybindingScope.ALL);
        // }
    };
    KeybindingStore.scope = KeybindingScope;
    tslib_1.__decorate([
        mobx_1.observable,
        tslib_1.__metadata("design:type", Object)
    ], KeybindingStore.prototype, "defaultProps", void 0);
    tslib_1.__decorate([
        mobx_1.observable,
        tslib_1.__metadata("design:type", String)
    ], KeybindingStore.prototype, "name", void 0);
    tslib_1.__decorate([
        mobx_1.observable,
        tslib_1.__metadata("design:type", String)
    ], KeybindingStore.prototype, "key", void 0);
    tslib_1.__decorate([
        mobx_1.observable,
        tslib_1.__metadata("design:type", String)
    ], KeybindingStore.prototype, "scope", void 0);
    tslib_1.__decorate([
        mobx_1.observable,
        tslib_1.__metadata("design:type", Function)
    ], KeybindingStore.prototype, "action", void 0);
    tslib_1.__decorate([
        mobx_1.action,
        tslib_1.__metadata("design:type", Object)
    ], KeybindingStore.prototype, "update", void 0);
    tslib_1.__decorate([
        mobx_1.action,
        tslib_1.__metadata("design:type", Object)
    ], KeybindingStore.prototype, "reset", void 0);
    tslib_1.__decorate([
        mobx_1.action,
        tslib_1.__metadata("design:type", Object)
    ], KeybindingStore.prototype, "setAction", void 0);
    tslib_1.__decorate([
        mobx_1.action,
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [String]),
        tslib_1.__metadata("design:returntype", void 0)
    ], KeybindingStore, "setScope", null);
    tslib_1.__decorate([
        mobx_1.action,
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", []),
        tslib_1.__metadata("design:returntype", void 0)
    ], KeybindingStore, "resetScope", null);
    return KeybindingStore;
}());
exports.default = KeybindingStore;
//# sourceMappingURL=Keybinding.store.js.map