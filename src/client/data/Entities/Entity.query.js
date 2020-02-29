"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var IDQueryField_1 = require("../../core/decorators/query/IDQueryField");
var StringQueryField_1 = require("../../core/decorators/query/StringQueryField");
var Query_base_1 = require("../../core/decorators/query/query/Query.base");
var query_decorator_1 = require("../../core/decorators/query/query/query.decorator");
var Project_query_1 = require("../Projects/Project.query");
var EntityQuery = /** @class */ (function (_super) {
    tslib_1.__extends(EntityQuery, _super);
    function EntityQuery() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    tslib_1.__decorate([
        query_decorator_1.QueryField(IDQueryField_1.IDQueryField),
        tslib_1.__metadata("design:type", IDQueryField_1.IDQueryField)
    ], EntityQuery.prototype, "id", void 0);
    tslib_1.__decorate([
        query_decorator_1.QueryField(StringQueryField_1.StringQueryField),
        tslib_1.__metadata("design:type", StringQueryField_1.StringQueryField)
    ], EntityQuery.prototype, "name", void 0);
    tslib_1.__decorate([
        query_decorator_1.QueryNestedField(Project_query_1.ProjectQuery),
        tslib_1.__metadata("design:type", Project_query_1.ProjectQuery)
    ], EntityQuery.prototype, "project", void 0);
    return EntityQuery;
}(Query_base_1.QueryBase));
exports.EntityQuery = EntityQuery;
//# sourceMappingURL=Entity.query.js.map