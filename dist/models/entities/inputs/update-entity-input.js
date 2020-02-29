"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const type_graphql_1 = require("type-graphql");
const update_project_input_1 = require("../../projects/inputs/update-project-input");
let UpdateEntityInput = class UpdateEntityInput {
};
tslib_1.__decorate([
    type_graphql_1.Field(() => type_graphql_1.Int),
    tslib_1.__metadata("design:type", Number)
], UpdateEntityInput.prototype, "id", void 0);
tslib_1.__decorate([
    type_graphql_1.Field({ nullable: true }),
    tslib_1.__metadata("design:type", String)
], UpdateEntityInput.prototype, "name", void 0);
tslib_1.__decorate([
    type_graphql_1.Field(() => update_project_input_1.UpdateProjectInput, { nullable: true }),
    tslib_1.__metadata("design:type", update_project_input_1.UpdateProjectInput)
], UpdateEntityInput.prototype, "project", void 0);
UpdateEntityInput = tslib_1.__decorate([
    type_graphql_1.InputType()
], UpdateEntityInput);
exports.UpdateEntityInput = UpdateEntityInput;
//# sourceMappingURL=update-entity-input.js.map