export declare class EnumObject {
    static getKeys: <T extends Object>(enumObject: T) => string[];
    static getValues: <T extends Object>(enumObject: T) => T[keyof T][];
}
