"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var mobx_1 = require("mobx");
var constants_1 = require("../../utils/constants");
var Translation = /** @class */ (function () {
    function Translation(props) {
        var _this = this;
        this.setLanguage = function (language) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
            var translations;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.languages[language]()];
                    case 1:
                        translations = _a.sent();
                        Object.entries(this.keys).forEach(function (_a) {
                            var key = _a[0], value = _a[1];
                            _this.i18n[key].set(translations[value]);
                        });
                        return [2 /*return*/];
                }
            });
        }); };
        this.languages = props.languages;
        this.keys = props.keys;
        this.i18n = Object.keys(props.keys).reduce(function (i18n, key) {
            i18n[key] = mobx_1.observable.box(constants_1.NULL_CHAR);
            return i18n;
        }, {});
        this.setLanguage(Translation.language.get());
        Translation.language.observe(function (change) { _this.setLanguage(change.newValue); });
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
    return Translation;
}());
exports.default = Translation;
//# sourceMappingURL=Translation.store.js.map