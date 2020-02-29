"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const type_graphql_1 = require("type-graphql");
let UpdateProjectInput = class UpdateProjectInput {
};
tslib_1.__decorate([
    type_graphql_1.Field(() => type_graphql_1.Int),
    tslib_1.__metadata("design:type", Number)
], UpdateProjectInput.prototype, "id", void 0);
tslib_1.__decorate([
    type_graphql_1.Field({ nullable: true }),
    tslib_1.__metadata("design:type", String)
], UpdateProjectInput.prototype, "name", void 0);
tslib_1.__decorate([
    type_graphql_1.Field({ nullable: true }),
    tslib_1.__metadata("design:type", String)
], UpdateProjectInput.prototype, "color", void 0);
tslib_1.__decorate([
    type_graphql_1.Field({ nullable: true }),
    tslib_1.__metadata("design:type", String)
], UpdateProjectInput.prototype, "url", void 0);
UpdateProjectInput = tslib_1.__decorate([
    type_graphql_1.InputType()
], UpdateProjectInput);
exports.UpdateProjectInput = UpdateProjectInput;
//# sourceMappingURL=update-project-input.js.map