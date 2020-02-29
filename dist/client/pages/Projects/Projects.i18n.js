"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Translation_store_1 = require("../../core/common/Translation.store");
exports.ProjectsI18n = new Translation_store_1.default({
    languages: {
        en: () => Promise.resolve().then(() => require("./i18n/en.json"))
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