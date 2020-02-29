"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const type_graphql_1 = require("type-graphql");
let DeleteEntityInput = class DeleteEntityInput {
};
tslib_1.__decorate([
    type_graphql_1.Field(() => type_graphql_1.Int),
    tslib_1.__metadata("design:type", Number)
], DeleteEntityInput.prototype, "id", void 0);
DeleteEntityInput = tslib_1.__decorate([
    type_graphql_1.InputType()
], DeleteEntityInput);
exports.DeleteEntityInput = DeleteEntityInput;
//# sourceMappingURL=delete-entity-input.js.map