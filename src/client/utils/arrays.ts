export const lastItemOf = <T>(arr: T[]): Nullable<T> => {
    if (arr.length > 0) {
        return arr[arr.length - 1];
    }

    return null;
}