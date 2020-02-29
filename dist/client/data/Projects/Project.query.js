"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const IDQueryField_1 = require("../../core/decorators/query/IDQueryField");
const StringQueryField_1 = require("../../core/decorators/query/StringQueryField");
const Query_base_1 = require("../../core/decorators/query/query/Query.base");
const query_decorator_1 = require("../../core/decorators/query/query/query.decorator");
class ProjectQuery extends Query_base_1.QueryBase {
}
tslib_1.__decorate([
    query_decorator_1.QueryField(IDQueryField_1.IDQueryField),
    tslib_1.__metadata("design:type", IDQueryField_1.IDQueryField)
], ProjectQuery.prototype, "id", void 0);
tslib_1.__decorate([
    query_decorator_1.QueryField(StringQueryField_1.StringQueryField),
    tslib_1.__metadata("design:type", StringQueryField_1.StringQueryField)
], ProjectQuery.prototype, "name", void 0);
tslib_1.__decorate([
    query_decorator_1.QueryField(StringQueryField_1.StringQueryField),
    tslib_1.__metadata("design:type", StringQueryField_1.StringQueryField)
], ProjectQuery.prototype, "color", void 0);
tslib_1.__decorate([
    query_decorator_1.QueryField(StringQueryField_1.StringQueryField),
    tslib_1.__metadata("design:type", StringQueryField_1.StringQueryField)
], ProjectQuery.prototype, "url", void 0);
exports.ProjectQuery = ProjectQuery;
//# sourceMappingURL=Project.query.js.map