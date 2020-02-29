"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const react_1 = require("react");
const mobx_react_1 = require("mobx-react");
const Input_1 = require("../../../../components/Form/Input/Input");
const translations_1 = require("../../../../utils/i18n/translations");
const Button_1 = require("../../../../components/Button/Button");
const project_modal_scss_1 = require("./project-modal.scss");
let ProjectModalView = class ProjectModalView extends react_1.Component {
    render() {
        const { model } = this.props;
        return (react_1.default.createElement("div", { ref: model.modal.containerRef, className: project_modal_scss_1.default.container },
            react_1.default.createElement("h3", { className: project_modal_scss_1.default.title }, model.modal.initData.id
                ? translations_1.t(model.i18n.updateProject)
                : translations_1.t(model.i18n.createProject)),
            react_1.default.createElement(Input_1.default, { model: model.form.fields.name }),
            react_1.default.createElement(Input_1.default, { model: model.form.fields.color }),
            react_1.default.createElement(Input_1.default, { model: model.form.fields.url }),
            react_1.default.createElement(Button_1.default, { model: model.submitFormButton })));
    }
};
ProjectModalView = tslib_1.__decorate([
    mobx_react_1.observer
], ProjectModalView);
exports.ProjectModalView = ProjectModalView;
//# sourceMappingURL=ProjectModal.view.js.map