"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const type_graphql_1 = require("type-graphql");
let CreateProjectInput = class CreateProjectInput {
};
tslib_1.__decorate([
    type_graphql_1.Field(),
    tslib_1.__metadata("design:type", String)
], CreateProjectInput.prototype, "name", void 0);
tslib_1.__decorate([
    type_graphql_1.Field(),
    tslib_1.__metadata("design:type", String)
], CreateProjectInput.prototype, "color", void 0);
tslib_1.__decorate([
    type_graphql_1.Field(),
    tslib_1.__metadata("design:type", String)
], CreateProjectInput.prototype, "url", void 0);
CreateProjectInput = tslib_1.__decorate([
    type_graphql_1.InputType()
], CreateProjectInput);
exports.CreateProjectInput = CreateProjectInput;
//# sourceMappingURL=create-project-input.js.map