"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const mobx_1 = require("mobx");
const Form_store_1 = require("../../../../components/Form/Form.store");
const Input_store_1 = require("../../../../components/Form/Input/Input.store");
const Button_store_1 = require("../../../../components/Button/Button.store");
const Projects_i18n_1 = require("../../Projects.i18n");
class ProjectModalStore {
    constructor(modal) {
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
            onSubmit: async () => {
                this.modal.initData.id
                    ? this.modal.initData.update(this.form.data)
                    : this.modal.initData.create(this.form.data);
                this.modal.close();
            }
        });
        this.submitFormButton = new Button_store_1.default({
            text: this.i18n.submit,
            onClick: this.form.submit
        });
        this.initForm = () => {
            if (this.modal.isOpen) {
                this.form.initValues({
                    name: this.modal.initData.name,
                    url: this.modal.initData.url,
                    color: this.modal.initData.color
                });
            }
        };
        this.modal = modal;
        this.initForm();
        mobx_1.observe(this.modal, "isOpen", this.initForm);
    }
    get i18n() {
        return Projects_i18n_1.ProjectsI18n.i18n;
    }
}
tslib_1.__decorate([
    mobx_1.action,
    tslib_1.__metadata("design:type", Object)
], ProjectModalStore.prototype, "initForm", void 0);
tslib_1.__decorate([
    mobx_1.computed,
    tslib_1.__metadata("design:type", Object),
    tslib_1.__metadata("design:paramtypes", [])
], ProjectModalStore.prototype, "i18n", null);
exports.ProjectModalStore = ProjectModalStore;
//# sourceMappingURL=ProjectModal.store.js.map