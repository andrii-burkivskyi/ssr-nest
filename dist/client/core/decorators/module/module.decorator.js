"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const constants_1 = require("../../../utils/constants");
var MDKeys;
(function (MDKeys) {
    MDKeys["VIEW"] = "module_decorator:view";
    MDKeys["MODEL"] = "module_decorator:model";
    MDKeys["GUARD"] = "module_decorator:guard";
    MDKeys["IMPORTS"] = "module_decorator:imports";
    MDKeys["SERVICES"] = "module_decorator:services";
    MDKeys["MODULES"] = "module_decorator:modules";
})(MDKeys = exports.MDKeys || (exports.MDKeys = {}));
exports.Module = (props) => (target) => {
    var _a, _b, _c;
    Reflect.defineMetadata(MDKeys.VIEW, props.view, target.prototype);
    Reflect.defineMetadata(MDKeys.MODEL, props.model, target.prototype);
    Reflect.defineMetadata(MDKeys.GUARD, props.guard, target.prototype);
    Reflect.defineMetadata(MDKeys.IMPORTS, (_a = props.imports, (_a !== null && _a !== void 0 ? _a : constants_1.DEFAULT_ARRAY)), target.prototype);
    Reflect.defineMetadata(MDKeys.SERVICES, (_b = props.services, (_b !== null && _b !== void 0 ? _b : constants_1.DEFAULT_ARRAY)), target.prototype);
    Reflect.defineMetadata(MDKeys.MODULES, (_c = props.modules, (_c !== null && _c !== void 0 ? _c : constants_1.DEFAULT_ARRAY)), target.prototype);
};
//# sourceMappingURL=module.decorator.js.map