"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Translation_store_1 = require("../../core/common/Translation.store");
exports.ProjectsI18n = new Translation_store_1.default({
    languages: {
        en: function () { return Promise.resolve().then(function () { return require("./i18n/en.json"); }); }
    },
    keys: {
        createProject: "createProject",
        updateProject: "updateProject",
        name: "name",
        color: "color",
        url: "url",
        submit: "submit"
    }
});
//# sourceMappingURL=Projects.i18n.js.map