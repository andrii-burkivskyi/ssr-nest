"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const n = (v, i) => i.every((d) => Number(v.integer) === d);
const r = (first, last) => Array.from({ length: last - first }).map((__, i) => first + i);
const v0 = (v) => !Boolean(v.fraction);
const i10 = (v, i) => i.every((d) => Number(`${v.integer}${v.fraction ? "," : ""}${v.fraction}`) % 10 === d);
const i100 = (v, i) => i.every((d) => Number(`${v.integer}${v.fraction ? "," : ""}${v.fraction}`) % 100 === d);
const f10 = (v, i) => i.every((d) => Boolean(v.fraction) && Number(v.fraction) % 10 === d);
const f100 = (v, i) => i.every((d) => Boolean(v.fraction) && Number(v.fraction) % 100 === d);
exports.strictCommand = (pluralValue, rule) => {
    const [__ = undefined, value = undefined] = rule.match(/^=(.+)$/i) || [];
    return pluralValue.value === value;
};
exports.cardinalCommands = {
    en: {
        zero: (v) => v.isNumber && v0(v) && n(v, [0]),
        one: (v) => v.isNumber && v0(v) && n(v, [1]),
        two: (v) => v.isNumber && v0(v) && n(v, [2]),
        few: (v) => false,
        many: (v) => false,
        other: (v) => true,
    },
};
exports.ordinalCommands = {
    en: {
        zero: (v) => v.isNumber && v0(v) && n(v, [0]),
        one: (v) => v.isNumber && v0(v) && i10(v, [1]) && !n(v, [11]),
        two: (v) => v.isNumber && v0(v) && i10(v, [2]) && !n(v, [12]),
        few: (v) => v.isNumber && v0(v) && i10(v, [3]) && !n(v, [13]),
        many: (v) => false,
        other: (v) => true,
    },
};
//# sourceMappingURL=commands.js.map