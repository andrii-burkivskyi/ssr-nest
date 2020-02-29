"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const type_graphql_1 = require("type-graphql");
const update_project_input_1 = require("../../projects/inputs/update-project-input");
let CreateEntityInput = class CreateEntityInput {
};
tslib_1.__decorate([
    type_graphql_1.Field(),
    tslib_1.__metadata("design:type", String)
], CreateEntityInput.prototype, "name", void 0);
tslib_1.__decorate([
    type_graphql_1.Field(() => update_project_input_1.UpdateProjectInput),
    tslib_1.__metadata("design:type", update_project_input_1.UpdateProjectInput)
], CreateEntityInput.prototype, "project", void 0);
CreateEntityInput = tslib_1.__decorate([
    type_graphql_1.InputType()
], CreateEntityInput);
exports.CreateEntityInput = CreateEntityInput;
//# sourceMappingURL=create-entity-input.js.map