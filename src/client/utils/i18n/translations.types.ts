export enum PluralType {
    CARDINAL = "cardinal",
    ORDINAL = "ordinal",
    SELECT = "select"
}

export enum CommandType {
    ZERO = "zero",
    ONE = "one",
    TWO = "two",
    FEW = "few",
    MANY = "many",
    OTHER = "other"
}

export interface ParsedPluralRule {
    isStrict: boolean;
    command: CommandType;
    value: string;
}
export interface ParsedPluralValue {
    isNumber: boolean;
    value: string;
    integer?: string;
    fraction?: string; 
}