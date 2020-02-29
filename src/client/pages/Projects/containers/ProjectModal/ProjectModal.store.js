"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var mobx_1 = require("mobx");
var Form_store_1 = require("../../../../components/Form/Form.store");
var Input_store_1 = require("../../../../components/Form/Input/Input.store");
var Button_store_1 = require("../../../../components/Button/Button.store");
var Projects_i18n_1 = require("../../Projects.i18n");
var ProjectModalStore = /** @class */ (function () {
    function ProjectModalStore(modal) {
        var _this = this;
        this.form = new Form_store_1.default({
            fields: {
                name: new Input_store_1.default({
                    type: Input_store_1.default.type.TEXT,
                    label: this.i18n.name,
                }),
                url: new Input_store_1.default({
                    type: Input_store_1.default.type.TEXT,
                    label: this.i18n.url
                }),
                color: new Input_store_1.default({
                    type: Input_store_1.default.type.TEXT,
                    label: this.i18n.color
                })
            },
            onSubmit: function () { return tslib_1.__awaiter(_this, void 0, void 0, function () {
                return tslib_1.__generator(this, function (_a) {
                    this.modal.initData.id
                        ? this.modal.initData.update(this.form.data)
                        : this.modal.initData.create(this.form.data);
                    this.modal.close();
                    return [2 /*return*/];
                });
            }); }
        });
        this.submitFormButton = new Button_store_1.default({
            text: this.i18n.submit,
            onClick: this.form.submit
        });
        this.initForm = function () {
            if (_this.modal.isOpen) {
                _this.form.initValues({
                    name: _this.modal.initData.name,
                    url: _this.modal.initData.url,
                    color: _this.modal.initData.color
                });
            }
        };
        this.modal = modal;
        this.initForm();
        mobx_1.observe(this.modal, "isOpen", this.initForm);
    }
    Object.defineProperty(ProjectModalStore.prototype, "i18n", {
        get: function () {
            return Projects_i18n_1.ProjectsI18n.i18n;
        },
        enumerable: true,
        configurable: true
    });
    tslib_1.__decorate([
        mobx_1.action,
        tslib_1.__metadata("design:type", Object)
    ], ProjectModalStore.prototype, "initForm", void 0);
    tslib_1.__decorate([
        mobx_1.computed,
        tslib_1.__metadata("design:type", Object),
        tslib_1.__metadata("design:paramtypes", [])
    ], ProjectModalStore.prototype, "i18n", null);
    return ProjectModalStore;
}());
exports.ProjectModalStore = ProjectModalStore;
//# sourceMappingURL=ProjectModal.store.js.map