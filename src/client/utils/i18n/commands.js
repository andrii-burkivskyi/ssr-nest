"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var n = function (v, i) { return i.every(function (d) { return Number(v.integer) === d; }); };
var r = function (first, last) { return Array.from({ length: last - first }).map(function (__, i) { return first + i; }); };
var v0 = function (v) { return !Boolean(v.fraction); };
var i10 = function (v, i) { return i.every(function (d) { return Number("" + v.integer + (v.fraction ? "," : "") + v.fraction) % 10 === d; }); };
var i100 = function (v, i) { return i.every(function (d) { return Number("" + v.integer + (v.fraction ? "," : "") + v.fraction) % 100 === d; }); };
var f10 = function (v, i) { return i.every(function (d) { return Boolean(v.fraction) && Number(v.fraction) % 10 === d; }); };
var f100 = function (v, i) { return i.every(function (d) { return Boolean(v.fraction) && Number(v.fraction) % 100 === d; }); };
exports.strictCommand = function (pluralValue, rule) {
    var _a = rule.match(/^=(.+)$/i) || [], _b = _a[0], __ = _b === void 0 ? undefined : _b, _c = _a[1], value = _c === void 0 ? undefined : _c;
    return pluralValue.value === value;
};
exports.cardinalCommands = {
    en: {
        zero: function (v) { return v.isNumber && v0(v) && n(v, [0]); },
        one: function (v) { return v.isNumber && v0(v) && n(v, [1]); },
        two: function (v) { return v.isNumber && v0(v) && n(v, [2]); },
        few: function (v) { return false; },
        many: function (v) { return false; },
        other: function (v) { return true; },
    },
};
exports.ordinalCommands = {
    en: {
        zero: function (v) { return v.isNumber && v0(v) && n(v, [0]); },
        one: function (v) { return v.isNumber && v0(v) && i10(v, [1]) && !n(v, [11]); },
        two: function (v) { return v.isNumber && v0(v) && i10(v, [2]) && !n(v, [12]); },
        few: function (v) { return v.isNumber && v0(v) && i10(v, [3]) && !n(v, [13]); },
        many: function (v) { return false; },
        other: function (v) { return true; },
    },
};
//# sourceMappingURL=commands.js.map