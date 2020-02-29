import Translation from "../../core/common/Translation.store";
import { ParsedPluralValue, CommandType } from "./translations.types";
export declare const strictCommand: (pluralValue: ParsedPluralValue, rule: string) => boolean;
export declare const cardinalCommands: {
    [key in keyof Translation["languages"]]: {
        [key in CommandType]: (value: ParsedPluralValue) => boolean;
    };
};
export declare const ordinalCommands: {
    [key in keyof Translation["languages"]]: {
        [key in CommandType]: (value: ParsedPluralValue) => boolean;
    };
};
