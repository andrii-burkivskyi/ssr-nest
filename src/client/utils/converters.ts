import { isNill } from "./typeGuards";

export const ensureString = (value: any): string | undefined => {
    if (typeof value === "string") {
        return value;
    }
    if (typeof value === "number" && !isNaN(value)) {
        return String(value);
    }
    return undefined;
}

export const ensureNumber = (value: any): number | undefined => {
    if (typeof value === "string" && !isNaN(Number(value))) {
        return Number(value);
    }

    if (typeof value === "number" && !isNaN(value)) {
        return value;
    }
    return undefined;
}

export const ensureArrayOfStrings = (value: any): string[] | undefined => {
    if (Array.isArray(value)) {
        const arr = value.map(ensureString).filter((v) => v !== undefined) as string[];
        return arr.length !== 0 ? arr : undefined;
    }
    const str = ensureString(value)

    return str === undefined ? undefined : [str]
}

export const ensureArrayOfNumbers = (value: any): number[] | undefined => {
    if (Array.isArray(value)) {
        const arr = value.map(ensureNumber).filter((v) => v !== undefined) as number[];
        return arr.length !== 0 ? arr : undefined;
    }
    const num = ensureNumber(value)

    return num === undefined ? undefined : [num]
}