import { orderBy } from "natural-orderby";
import Translation from "../../core/common/Translation.store";

import { isString } from "../../utils/typeGuards";
import { ObservableString } from "../../utils/types";

import { strictCommand, cardinalCommands, ordinalCommands } from "./commands";
import { PluralType, CommandType, ParsedPluralValue, ParsedPluralRule } from "./translations.types";

export const commands = [
    CommandType.ZERO,
    CommandType.ONE,
    CommandType.TWO,
    CommandType.FEW,
    CommandType.MANY,
    CommandType.OTHER
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
export const t = (str: ObservableString = "", values: CommonMap = {}) => {
    const clearStr = isString(str) ? str : str.get()
    const strWithReplacedParams = replaceParams(clearStr, values);
    const strWithReplacedPlural = replacePlural(strWithReplacedParams, values);
    return strWithReplacedPlural;
};

const replaceParams = (str: string, values: CommonMap) => {
    const paramsInStringMatcher = (key: string) => new RegExp(`{{${key}}}`, "g");
    return Object.entries(values).reduce((resultStr, [key, value]) => {
        return String(resultStr).replace(paramsInStringMatcher(key), String(value));
    }, str);
}


const replacePlural = (str: string, values: CommonMap = {}) => {
    const pluralMatching = /\{plural(\[[cCsSoO]\])?,\s*(.*?),\s*(.*?)\}/g;
    return str.replace(pluralMatching, (match, type, key, rules) => {
        const pluralValue = values[key];
        const pluralType = getPluralType(type);

        if (key && rules && pluralValue !== undefined) {
            let parsedPluralValue = getPluralValue(pluralValue)
            let parsedRules: ParsedPluralRule[] = rules.split("|").map(getPluralRule);

            parsedRules = orderBy(
                parsedRules,
                [v => v.isStrict, v => commands.indexOf(v.command)],
                ["desc", "desc"]
            )
            const language = Translation.language.get();

            switch (pluralType) {
                case PluralType.CARDINAL:
                    return getCardinalValue(parsedRules, parsedPluralValue, language);
                case PluralType.ORDINAL:
                    return getOrdinalValue(parsedRules, parsedPluralValue, language);
                case PluralType.SELECT:
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
}

const getPluralType = (str: string) =>
    String(str).toLocaleLowerCase() === "[c]" && PluralType.CARDINAL ||
    String(str).toLocaleLowerCase() === "[s]" && PluralType.SELECT ||
    PluralType.ORDINAL;

const getPluralRule = (str: string) => {
    const ruleMatching = /(.*)\[(.*)\]/i;
    const ruleIsStrictMatching = /(=)?(.*)/i
    const [__ = undefined, command = undefined, ruleValue = undefined] = str.trim().match(ruleMatching) || [];
    if (command) {
        const [__ = undefined, strictMarker = undefined, restCommand = undefined] = command.match(ruleIsStrictMatching) || [];
        return {
            isStrict: Boolean(strictMarker),
            command: restCommand,
            value: ruleValue
        }
    }
    else {
        console.error(`In plural rule {{${str}}} command should be setted.`)
        return null;
    }
}

const getPluralValue = (value: string | number) => {
    const [__ = undefined, integer = undefined, fraction = undefined] = String(value).match(/^(\d+)[\,\.]?(\d*)$/i) || [];
    const isNumber = integer !== undefined;
    return { isNumber, value: String(value), integer, fraction }
}


const getCardinalValue = (parsedRules: Nullable<ParsedPluralRule>[], parsedValue: ParsedPluralValue, language: keyof Translation["languages"]) => {
    const foundedRule = parsedRules.find(
        (rule: Nullable<ParsedPluralRule>) => {
            if(rule && commands.includes(rule.command)) {
                return cardinalCommands[language as string][rule.command](parsedValue);
            }
            return false;
        }
    );

    return foundedRule ? foundedRule.value.replace("#", parsedValue.value) : "";
};
const getOrdinalValue = (parsedRules: ParsedPluralRule[], parsedValue: ParsedPluralValue, language: keyof Translation["languages"]) => {
    const foundedRule = parsedRules.find(
        (rule: Nullable<ParsedPluralRule>) => {
            if(rule && commands.includes(rule.command)) {
                return ordinalCommands[language as string][rule.command](parsedValue);
            }
            return false;
        }
    );

    return foundedRule ? foundedRule.value.replace("#", parsedValue.value) : "";
};
const getStrictValue = (parsedRules: ParsedPluralRule[], parsedValue: ParsedPluralValue, language: keyof Translation["languages"]) => {
    const foundedRule = parsedRules.find(
        (rule: Nullable<ParsedPluralRule>) => {
            if (rule) { return rule.isStrict && strictCommand(parsedValue, rule.command); }
            return false;
        }
    );

    return foundedRule ? foundedRule.value.replace("#", parsedValue.value) : "";
};
