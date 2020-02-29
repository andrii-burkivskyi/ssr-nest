"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var IDQueryField_1 = require("../../core/decorators/query/IDQueryField");
var StringQueryField_1 = require("../../core/decorators/query/StringQueryField");
var Query_base_1 = require("../../core/decorators/query/query/Query.base");
var query_decorator_1 = require("../../core/decorators/query/query/query.decorator");
var ProjectQuery = /** @class */ (function (_super) {
    tslib_1.__extends(ProjectQuery, _super);
    function ProjectQuery() {
        return _super !== null && _super.apply(this, arguments) || this;
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
    return ProjectQuery;
}(Query_base_1.QueryBase));
exports.ProjectQuery = ProjectQuery;
//# sourceMappingURL=Project.query.js.map