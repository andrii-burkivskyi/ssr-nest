import Translation from '../../core/common/Translation.store';
import { ParsedPluralValue, CommandType } from './translations.types';

const n = (v: ParsedPluralValue, i: number[]) => i.every((d) => Number(v.integer) === d);
const r = (first: number, last: number) => Array.from({ length: last - first }).map((__, i) => first + i);
const v0 = (v: ParsedPluralValue) => !Boolean(v.fraction);
const i10 = (v: ParsedPluralValue, i: number[]) => i.every((d) => Number(`${v.integer}${v.fraction ? ',' : ''}${v.fraction}`) % 10 === d);
const i100 = (v: ParsedPluralValue, i: number[]) => i.every((d) => Number(`${v.integer}${v.fraction ? ',' : ''}${v.fraction}`) % 100 === d);
const f10 = (v: ParsedPluralValue, i: number[]) => i.every((d) => Boolean(v.fraction) && Number(v.fraction) % 10 === d);
const f100 = (v: ParsedPluralValue, i: number[]) => i.every((d) => Boolean(v.fraction) && Number(v.fraction) % 100 === d);

export const strictCommand = (pluralValue: ParsedPluralValue, rule: string) => {
  const [__, value] = rule.match(/^=(.+)$/i) || [];
  return pluralValue.value === value;
};

export const cardinalCommands: {[key in keyof Translation['languages']]: {[key in CommandType]: (value: ParsedPluralValue) => boolean }} = {
  en: {
    zero: (v) => v.isNumber && v0(v) && n(v, [0]),
    one: (v) => v.isNumber && v0(v) && n(v, [1]),
    two: (v) => v.isNumber && v0(v) && n(v, [2]),
    few: (v) => false,
    many: (v) => false,
    other: (v) => true,

  },
};

export const ordinalCommands: {[key in keyof Translation['languages']]: {[key in CommandType]: (value: ParsedPluralValue) => boolean }} = {
  en: {
    zero: (v) => v.isNumber && v0(v) && n(v, [0]),
    one: (v) => v.isNumber && v0(v) && i10(v, [1]) && !n(v, [11]),
    two: (v) => v.isNumber && v0(v) && i10(v, [2]) && !n(v, [12]),
    few: (v) => v.isNumber && v0(v) && i10(v, [3]) && !n(v, [13]),
    many: (v) => false,
    other: (v) => true,

  },
};
