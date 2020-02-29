"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var mobx_1 = require("mobx");
var uuid_1 = require("uuid");
var arrays_1 = require("../../utils/arrays");
var Keybinding_store_1 = require("../../core/common/Keybinding.store");
var constants_1 = require("../../utils/constants");
var dom_1 = require("../../utils/dom");
var ModalStore = /** @class */ (function () {
    function ModalStore(props) {
        var _this = this;
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
        this.open = function (initData) {
            _this.initData = (initData !== null && initData !== void 0 ? initData : constants_1.DEFAULT_OBJECT);
            _this.isOpen = true;
            ModalStore.openedModals.push(_this);
        };
        this.close = function (initData) {
            _this.initData = (initData !== null && initData !== void 0 ? initData : _this.initData);
            _this.isOpen = false;
            _this.onClose();
            ModalStore.openedModals = ModalStore.openedModals.filter(function (modal) { return modal.isOpen; });
        };
        this.toggle = function (initData) {
            _this.isOpen ? _this.close(initData) : _this.open(initData);
        };
        this.load = function () { return tslib_1.__awaiter(_this, void 0, void 0, function () {
            var _a, Model;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!(this.isOpen && !this.isLoading)) return [3 /*break*/, 5];
                        this.isLoading = true;
                        if (!!this.loadedComponent) return [3 /*break*/, 2];
                        _a = this;
                        return [4 /*yield*/, this.component()];
                    case 1:
                        _a.loadedComponent = _b.sent();
                        _b.label = 2;
                    case 2:
                        if (!!this.loadedModel) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.model()];
                    case 3:
                        Model = _b.sent();
                        this.loadedModel = new Model(this, this.initData);
                        _b.label = 4;
                    case 4:
                        this.isLoading = false;
                        _b.label = 5;
                    case 5: return [2 /*return*/];
                }
            });
        }); };
        if (props) {
            var isOpen = props.isOpen, restProps = tslib_1.__rest(props, ["isOpen"]);
            if (isOpen) {
                this.open();
            }
            mobx_1.set(this, restProps);
        }
    }
    ModalStore.openedModals = [];
    ModalStore.closeLastModal = function (event) {
        var lastModal = arrays_1.lastItemOf(ModalStore.openedModals);
        lastModal && lastModal.close();
    };
    ModalStore.closeModalsByClick = function (event) {
        var _a, _b;
        var clickedElement = (_b = (_a = event) === null || _a === void 0 ? void 0 : _a.target, (_b !== null && _b !== void 0 ? _b : null));
        var reversedOpenedModals = Array.from(ModalStore.openedModals);
        var modalIds = dom_1.getParentDataAttributesValue(clickedElement, "data-modal-id");
        reversedOpenedModals.some(function (modal) {
            var _a;
            var hasContainerElement = (_a = modal.containerRef.current) === null || _a === void 0 ? void 0 : _a.contains(clickedElement);
            var hasDataTag = modalIds.includes(modal.id);
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
    return ModalStore;
}());
exports.default = ModalStore;
//# sourceMappingURL=Modal.store.js.map