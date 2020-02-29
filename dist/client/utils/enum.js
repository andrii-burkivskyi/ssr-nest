"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class EnumObject {
}
exports.EnumObject = EnumObject;
EnumObject.getKeys = (enumObject) => Object.keys(enumObject).filter((key) => isNaN(+key));
EnumObject.getValues = (enumObject) => EnumObject.getKeys(enumObject).map((key) => enumObject[key]);
//# sourceMappingURL=enum.js.map