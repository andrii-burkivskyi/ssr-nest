"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var module_decorator_1 = require("../../../../core/decorators/module/module.decorator");
var Module_base_1 = require("../../../../core/decorators/module/Module.base");
var HeaderNav_imports_1 = require("./HeaderNav.imports");
var HeaderNav_guard_1 = require("./HeaderNav.guard");
var HeaderNavModule = /** @class */ (function (_super) {
    tslib_1.__extends(HeaderNavModule, _super);
    function HeaderNavModule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HeaderNavModule = tslib_1.__decorate([
        module_decorator_1.Module({
            guard: HeaderNav_guard_1.HeaderNavGuard,
            view: HeaderNav_imports_1.HeaderNav.View,
            model: HeaderNav_imports_1.HeaderNav.Store,
        })
    ], HeaderNavModule);
    return HeaderNavModule;
}(Module_base_1.ModuleBase));
exports.HeaderNavModule = HeaderNavModule;
;
//# sourceMappingURL=index.js.map