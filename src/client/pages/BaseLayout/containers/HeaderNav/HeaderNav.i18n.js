"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Translation_store_1 = require("../../../../core/common/Translation.store");
exports.HeaderNavI18n = new Translation_store_1.default({
    languages: {
        en: function () { return Promise.resolve().then(function () { return require("./i18n/en.json"); }); }
    },
    keys: {
        frontend: "frontend",
        backend: "backend"
    }
});
//# sourceMappingURL=HeaderNav.i18n.js.map