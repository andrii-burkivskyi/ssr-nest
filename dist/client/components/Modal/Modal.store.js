"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const React = require("react");
const mobx_1 = require("mobx");
const uuid_1 = require("uuid");
const arrays_1 = require("../../utils/arrays");
const Keybinding_store_1 = require("../../core/common/Keybinding.store");
const constants_1 = require("../../utils/constants");
const dom_1 = require("../../utils/dom");
class ModalStore {
    constructor(props) {
        this.id = uuid_1.default();
        this.isOpen = false;
        this.isLoading = false;
        this.containerRef = React.createRef();
        this.onClose = constants_1.DEFAULT_FUNCTION;
        this.initData = constants_1.DEFAULT_OBJECT;
        this.component = constants_1.DEFAULT_ASYNC_FUNCTION;
        this.loadedComponent = null;
        this.model = constants_1.DEFAULT_ASYNC_FUNCTION;
        this.loadedModel = null;
        this.open = (initData) => {
            this.initData = (initData !== null && initData !== void 0 ? initData : constants_1.DEFAULT_OBJECT);
            this.isOpen = true;
            ModalStore.openedModals.push(this);
        };
        this.close = (initData) => {
            this.initData = (initData !== null && initData !== void 0 ? initData : this.initData);
            this.isOpen = false;
            this.onClose();
            ModalStore.openedModals = ModalStore.openedModals.filter((modal) => modal.isOpen);
        };
        this.toggle = (initData) => {
            this.isOpen ? this.close(initData) : this.open(initData);
        };
        this.load = async () => {
            if (this.isOpen && !this.isLoading) {
                this.isLoading = true;
                if (!this.loadedComponent) {
                    this.loadedComponent = await this.component();
                }
                if (!this.loadedModel) {
                    const Model = await this.model();
                    this.loadedModel = new Model(this, this.initData);
                }
                this.isLoading = false;
            }
        };
        if (props) {
            const { isOpen } = props, restProps = tslib_1.__rest(props, ["isOpen"]);
            if (isOpen) {
                this.open();
            }
            mobx_1.set(this, restProps);
        }
    }
}
ModalStore.openedModals = [];
ModalStore.closeLastModal = (event) => {
    const lastModal = arrays_1.lastItemOf(ModalStore.openedModals);
    lastModal && lastModal.close();
};
ModalStore.closeModalsByClick = (event) => {
    var _a, _b;
    const clickedElement = (_b = (_a = event) === null || _a === void 0 ? void 0 : _a.target, (_b !== null && _b !== void 0 ? _b : null));
    const reversedOpenedModals = Array.from(ModalStore.openedModals);
    const modalIds = dom_1.getParentDataAttributesValue(clickedElement, "data-modal-id");
    reversedOpenedModals.some((modal) => {
        var _a;
        const hasContainerElement = (_a = modal.containerRef.current) === null || _a === void 0 ? void 0 : _a.contains(clickedElement);
        const hasDataTag = modalIds.includes(modal.id);
        if (hasContainerElement || hasDataTag) {
            return true;
        }
        else {
            modal.close();
            return false;
        }
    });
};
ModalStore.hotkeyCloseList = new Keybinding_store_1.default({
    key: "esc",
    name: "modal.close",
    scope: Keybinding_store_1.default.scope.LIST_OPEN,
    action: ModalStore.closeLastModal
});
ModalStore.hotkeyCloseModal = new Keybinding_store_1.default({
    key: "esc",
    name: "modal.close",
    scope: Keybinding_store_1.default.scope.ALL,
    action: ModalStore.closeLastModal
});
tslib_1.__decorate([
    mobx_1.observable,
    tslib_1.__metadata("design:type", String)
], ModalStore.prototype, "id", void 0);
tslib_1.__decorate([
    mobx_1.observable,
    tslib_1.__metadata("design:type", Boolean)
], ModalStore.prototype, "isOpen", void 0);
tslib_1.__decorate([
    mobx_1.observable,
    tslib_1.__metadata("design:type", Boolean)
], ModalStore.prototype, "isLoading", void 0);
tslib_1.__decorate([
    mobx_1.observable,
    tslib_1.__metadata("design:type", Object)
], ModalStore.prototype, "containerRef", void 0);
tslib_1.__decorate([
    mobx_1.observable,
    tslib_1.__metadata("design:type", Object)
], ModalStore.prototype, "onClose", void 0);
tslib_1.__decorate([
    mobx_1.observable,
    tslib_1.__metadata("design:type", Object)
], ModalStore.prototype, "initData", void 0);
tslib_1.__decorate([
    mobx_1.observable,
    tslib_1.__metadata("design:type", Function)
], ModalStore.prototype, "component", void 0);
tslib_1.__decorate([
    mobx_1.observable,
    tslib_1.__metadata("design:type", Object)
], ModalStore.prototype, "loadedComponent", void 0);
tslib_1.__decorate([
    mobx_1.observable,
    tslib_1.__metadata("design:type", Function)
], ModalStore.prototype, "model", void 0);
tslib_1.__decorate([
    mobx_1.observable,
    tslib_1.__metadata("design:type", Object)
], ModalStore.prototype, "loadedModel", void 0);
tslib_1.__decorate([
    mobx_1.action,
    tslib_1.__metadata("design:type", Object)
], ModalStore.prototype, "open", void 0);
tslib_1.__decorate([
    mobx_1.action,
    tslib_1.__metadata("design:type", Object)
], ModalStore.prototype, "close", void 0);
tslib_1.__decorate([
    mobx_1.action,
    tslib_1.__metadata("design:type", Object)
], ModalStore.prototype, "toggle", void 0);
tslib_1.__decorate([
    mobx_1.action,
    tslib_1.__metadata("design:type", Object)
], ModalStore.prototype, "load", void 0);
exports.default = ModalStore;
//# sourceMappingURL=Modal.store.js.map