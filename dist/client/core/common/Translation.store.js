"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const mobx_1 = require("mobx");
const constants_1 = require("../../utils/constants");
class Translation {
    constructor(props) {
        this.setLanguage = async (language) => {
            const translations = await this.languages[language]();
            Object.entries(this.keys).forEach(([key, value]) => {
                this.i18n[key].set(translations[value]);
            });
        };
        this.languages = props.languages;
        this.keys = props.keys;
        this.i18n = Object.keys(props.keys).reduce((i18n, key) => {
            i18n[key] = mobx_1.observable.box(constants_1.NULL_CHAR);
            return i18n;
        }, {});
        this.setLanguage(Translation.language.get());
        Translation.language.observe((change) => { this.setLanguage(change.newValue); });
    }
}
Translation.language = mobx_1.observable.box("en");
tslib_1.__decorate([
    mobx_1.observable,
    tslib_1.__metadata("design:type", Object)
], Translation.prototype, "i18n", void 0);
tslib_1.__decorate([
    mobx_1.observable,
    tslib_1.__metadata("design:type", Object)
], Translation.prototype, "keys", void 0);
tslib_1.__decorate([
    mobx_1.observable,
    tslib_1.__metadata("design:type", Object)
], Translation.prototype, "languages", void 0);
tslib_1.__decorate([
    mobx_1.action,
    tslib_1.__metadata("design:type", Object)
], Translation.prototype, "setLanguage", void 0);
exports.default = Translation;
//# sourceMappingURL=Translation.store.js.map