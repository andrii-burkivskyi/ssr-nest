"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var natural_orderby_1 = require("natural-orderby");
var Translation_store_1 = require("../../core/common/Translation.store");
var typeGuards_1 = require("../../utils/typeGuards");
var commands_1 = require("./commands");
var translations_types_1 = require("./translations.types");
exports.commands = [
    translations_types_1.CommandType.ZERO,
    translations_types_1.CommandType.ONE,
    translations_types_1.CommandType.TWO,
    translations_types_1.CommandType.FEW,
    translations_types_1.CommandType.MANY,
    translations_types_1.CommandType.OTHER
].reverse();
/**
 * @param value translated string
 * @param params object with params for replacement in string
 * @description Example of plural strings:
 * @example ```{{value}} section```
 * @example ```{plural[C],value,one[# item]|other[# items]} => "1 item" | "10 items"```
 * @example ```{plural[O],value,one[#st]|two[#nd item]|few[#rd item]|other[#th item]}" => "1st item" | "2nd item" | "3rd item" | "4th item"```
 * @description for plural rules read https://unicode.org/cldr/charts/latest/supplemental/language_plural_rules.html
 */
exports.t = function (str, values) {
    if (str === void 0) { str = ""; }
    if (values === void 0) { values = {}; }
    var clearStr = typeGuards_1.isString(str) ? str : str.get();
    var strWithReplacedParams = replaceParams(clearStr, values);
    var strWithReplacedPlural = replacePlural(strWithReplacedParams, values);
    return strWithReplacedPlural;
};
var replaceParams = function (str, values) {
    var paramsInStringMatcher = function (key) { return new RegExp("{{" + key + "}}", "g"); };
    return Object.entries(values).reduce(function (resultStr, _a) {
        var key = _a[0], value = _a[1];
        return String(resultStr).replace(paramsInStringMatcher(key), String(value));
    }, str);
};
var replacePlural = function (str, values) {
    if (values === void 0) { values = {}; }
    var pluralMatching = /\{plural(\[[cCsSoO]\])?,\s*(.*?),\s*(.*?)\}/g;
    return str.replace(pluralMatching, function (match, type, key, rules) {
        var pluralValue = values[key];
        var pluralType = getPluralType(type);
        if (key && rules && pluralValue !== undefined) {
            var parsedPluralValue = getPluralValue(pluralValue);
            var parsedRules = rules.split("|").map(getPluralRule);
            parsedRules = natural_orderby_1.orderBy(parsedRules, [function (v) { return v.isStrict; }, function (v) { return exports.commands.indexOf(v.command); }], ["desc", "desc"]);
            var language = Translation_store_1.default.language.get();
            switch (pluralType) {
                case translations_types_1.PluralType.CARDINAL:
                    return getCardinalValue(parsedRules, parsedPluralValue, language);
                case translations_types_1.PluralType.ORDINAL:
                    return getOrdinalValue(parsedRules, parsedPluralValue, language);
                case translations_types_1.PluralType.SELECT:
                    return getStrictValue(parsedRules, parsedPluralValue, language);
            }
        }
        else {
            !key && console.error("In plural {{" + match + "}}, key should be setted.");
            !rules && console.error("In plural {{" + match + "}}, rules should be setted.");
            !key && !rules && console.error("In plural {{" + match + "}}, key and rules should be setted.");
        }
        return match;
    });
};
var getPluralType = function (str) {
    return String(str).toLocaleLowerCase() === "[c]" && translations_types_1.PluralType.CARDINAL ||
        String(str).toLocaleLowerCase() === "[s]" && translations_types_1.PluralType.SELECT ||
        translations_types_1.PluralType.ORDINAL;
};
var getPluralRule = function (str) {
    var ruleMatching = /(.*)\[(.*)\]/i;
    var ruleIsStrictMatching = /(=)?(.*)/i;
    var _a = str.trim().match(ruleMatching) || [], _b = _a[0], __ = _b === void 0 ? undefined : _b, _c = _a[1], command = _c === void 0 ? undefined : _c, _d = _a[2], ruleValue = _d === void 0 ? undefined : _d;
    if (command) {
        var _e = command.match(ruleIsStrictMatching) || [], _f = _e[0], __1 = _f === void 0 ? undefined : _f, _g = _e[1], strictMarker = _g === void 0 ? undefined : _g, _h = _e[2], restCommand = _h === void 0 ? undefined : _h;
        return {
            isStrict: Boolean(strictMarker),
            command: restCommand,
            value: ruleValue
        };
    }
    else {
        console.error("In plural rule {{" + str + "}} command should be setted.");
        return null;
    }
};
var getPluralValue = function (value) {
    var _a = String(value).match(/^(\d+)[\,\.]?(\d*)$/i) || [], _b = _a[0], __ = _b === void 0 ? undefined : _b, _c = _a[1], integer = _c === void 0 ? undefined : _c, _d = _a[2], fraction = _d === void 0 ? undefined : _d;
    var isNumber = integer !== undefined;
    return { isNumber: isNumber, value: String(value), integer: integer, fraction: fraction };
};
var getCardinalValue = function (parsedRules, parsedValue, language) {
    var foundedRule = parsedRules.find(function (rule) {
        if (rule && exports.commands.includes(rule.command)) {
            return commands_1.cardinalCommands[language][rule.command](parsedValue);
        }
        return false;
    });
    return foundedRule ? foundedRule.value.replace("#", parsedValue.value) : "";
};
var getOrdinalValue = function (parsedRules, parsedValue, language) {
    var foundedRule = parsedRules.find(function (rule) {
        if (rule && exports.commands.includes(rule.command)) {
            return commands_1.ordinalCommands[language][rule.command](parsedValue);
        }
        return false;
    });
    return foundedRule ? foundedRule.value.replace("#", parsedValue.value) : "";
};
var getStrictValue = function (parsedRules, parsedValue, language) {
    var foundedRule = parsedRules.find(function (rule) {
        if (rule) {
            return rule.isStrict && commands_1.strictCommand(parsedValue, rule.command);
        }
        return false;
    });
    return foundedRule ? foundedRule.value.replace("#", parsedValue.value) : "";
};
//# sourceMappingURL=translations.js.map