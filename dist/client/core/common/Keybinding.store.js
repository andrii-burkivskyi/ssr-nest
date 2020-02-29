"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const mobx_1 = require("mobx");
const constants_1 = require("../../utils/constants");
var KeybindingScope;
(function (KeybindingScope) {
    KeybindingScope["ALL"] = "all";
    KeybindingScope["LIST_FOCUS"] = "list.focus";
    KeybindingScope["LIST_OPEN"] = "list.open";
})(KeybindingScope || (KeybindingScope = {}));
class KeybindingStore {
    constructor(props) {
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
        this.update = (props) => {
        };
        this.reset = () => {
        };
        this.setAction = (action) => {
        };
        if (props && !constants_1.IS_NODE()) {
            mobx_1.set(this, props);
            this.defaultProps = Object.assign(Object.assign({}, this.defaultProps), props);
            this.setAction(this.action);
        }
    }
    static setScope(scope) {
    }
    static resetScope() {
    }
}
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
exports.default = KeybindingStore;
//# sourceMappingURL=Keybinding.store.js.map