"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = require("react");
var mobx_react_1 = require("mobx-react");
var Input_1 = require("../../../../components/Form/Input/Input");
var translations_1 = require("../../../../utils/i18n/translations");
var Button_1 = require("../../../../components/Button/Button");
var project_modal_scss_1 = require("./project-modal.scss");
var ProjectModalView = /** @class */ (function (_super) {
    tslib_1.__extends(ProjectModalView, _super);
    function ProjectModalView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ProjectModalView.prototype.render = function () {
        var model = this.props.model;
        return (react_1.default.createElement("div", { ref: model.modal.containerRef, className: project_modal_scss_1.default.container },
            react_1.default.createElement("h3", { className: project_modal_scss_1.default.title }, model.modal.initData.id
                ? translations_1.t(model.i18n.updateProject)
                : translations_1.t(model.i18n.createProject)),
            react_1.default.createElement(Input_1.default, { model: model.form.fields.name }),
            react_1.default.createElement(Input_1.default, { model: model.form.fields.color }),
            react_1.default.createElement(Input_1.default, { model: model.form.fields.url }),
            react_1.default.createElement(Button_1.default, { model: model.submitFormButton })));
    };
    ProjectModalView = tslib_1.__decorate([
        mobx_react_1.observer
    ], ProjectModalView);
    return ProjectModalView;
}(react_1.Component));
exports.ProjectModalView = ProjectModalView;
//# sourceMappingURL=ProjectModal.view.js.map