"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const natural_orderby_1 = require("natural-orderby");
const Translation_store_1 = require("../../core/common/Translation.store");
const typeGuards_1 = require("../../utils/typeGuards");
const commands_1 = require("./commands");
const translations_types_1 = require("./translations.types");
exports.commands = [
    translations_types_1.CommandType.ZERO,
    translations_types_1.CommandType.ONE,
    translations_types_1.CommandType.TWO,
    translations_types_1.CommandType.FEW,
    translations_types_1.CommandType.MANY,
    translations_types_1.CommandType.OTHER
].reverse();
exports.t = (str = "", values = {}) => {
    const clearStr = typeGuards_1.isString(str) ? str : str.get();
    const strWithReplacedParams = replaceParams(clearStr, values);
    const strWithReplacedPlural = replacePlural(strWithReplacedParams, values);
    return strWithReplacedPlural;
};
const replaceParams = (str, values) => {
    const paramsInStringMatcher = (key) => new RegExp(`{{${key}}}`, "g");
    return Object.entries(values).reduce((resultStr, [key, value]) => {
        return String(resultStr).replace(paramsInStringMatcher(key), String(value));
    }, str);
};
const replacePlural = (str, values = {}) => {
    const pluralMatching = /\{plural(\[[cCsSoO]\])?,\s*(.*?),\s*(.*?)\}/g;
    return str.replace(pluralMatching, (match, type, key, rules) => {
        const pluralValue = values[key];
        const pluralType = getPluralType(type);
        if (key && rules && pluralValue !== undefined) {
            let parsedPluralValue = getPluralValue(pluralValue);
            let parsedRules = rules.split("|").map(getPluralRule);
            parsedRules = natural_orderby_1.orderBy(parsedRules, [v => v.isStrict, v => exports.commands.indexOf(v.command)], ["desc", "desc"]);
            const language = Translation_store_1.default.language.get();
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
            !key && console.error(`In plural {{${match}}}, key should be setted.`);
            !rules && console.error(`In plural {{${match}}}, rules should be setted.`);
            !key && !rules && console.error(`In plural {{${match}}}, key and rules should be setted.`);
        }
        return match;
    });
};
const getPluralType = (str) => String(str).toLocaleLowerCase() === "[c]" && translations_types_1.PluralType.CARDINAL ||
    String(str).toLocaleLowerCase() === "[s]" && translations_types_1.PluralType.SELECT ||
    translations_types_1.PluralType.ORDINAL;
const getPluralRule = (str) => {
    const ruleMatching = /(.*)\[(.*)\]/i;
    const ruleIsStrictMatching = /(=)?(.*)/i;
    const [__ = undefined, command = undefined, ruleValue = undefined] = str.trim().match(ruleMatching) || [];
    if (command) {
        const [__ = undefined, strictMarker = undefined, restCommand = undefined] = command.match(ruleIsStrictMatching) || [];
        return {
            isStrict: Boolean(strictMarker),
            command: restCommand,
            value: ruleValue
        };
    }
    else {
        console.error(`In plural rule {{${str}}} command should be setted.`);
        return null;
    }
};
const getPluralValue = (value) => {
    const [__ = undefined, integer = undefined, fraction = undefined] = String(value).match(/^(\d+)[\,\.]?(\d*)$/i) || [];
    const isNumber = integer !== undefined;
    return { isNumber, value: String(value), integer, fraction };
};
const getCardinalValue = (parsedRules, parsedValue, language) => {
    const foundedRule = parsedRules.find((rule) => {
        if (rule && exports.commands.includes(rule.command)) {
            return commands_1.cardinalCommands[language][rule.command](parsedValue);
        }
        return false;
    });
    return foundedRule ? foundedRule.value.replace("#", parsedValue.value) : "";
};
const getOrdinalValue = (parsedRules, parsedValue, language) => {
    const foundedRule = parsedRules.find((rule) => {
        if (rule && exports.commands.includes(rule.command)) {
            return commands_1.ordinalCommands[language][rule.command](parsedValue);
        }
        return false;
    });
    return foundedRule ? foundedRule.value.replace("#", parsedValue.value) : "";
};
const getStrictValue = (parsedRules, parsedValue, language) => {
    const foundedRule = parsedRules.find((rule) => {
        if (rule) {
            return rule.isStrict && commands_1.strictCommand(parsedValue, rule.command);
        }
        return false;
    });
    return foundedRule ? foundedRule.value.replace("#", parsedValue.value) : "";
};
//# sourceMappingURL=translations.js.map