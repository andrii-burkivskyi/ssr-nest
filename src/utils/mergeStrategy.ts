
export const merge = <M>(mainObject: M, partialObject: Partial<M>): M =>
    Object.keys(mainObject).reduce<M>((acc, key) => ({
        ...acc,
        [key]: partialObject[key as keyof M] ?? acc[key as keyof M],
    }), mainObject);
