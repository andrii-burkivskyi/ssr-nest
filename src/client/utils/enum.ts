export class EnumObject {
    static getKeys = <T extends Record<string, any>>(enumObject: T): Array<string> => Object.keys(enumObject).filter((key) => isNaN(+key));

    static getValues = <T extends Record<string, any>>(enumObject: T): Array<T[keyof T]> => EnumObject.getKeys(enumObject).map((key) => enumObject[key]);
}
