import { has, set } from "mobx"

export const setOwnProps = <O>(obj: O, props: Record<string, any>) => {
    const ownProps = Object.keys(props).reduce((acc, propsKey) => {
        if (has(obj, propsKey)) {
            acc[propsKey] = props[propsKey];
        };
        return acc;
    }, {})

    set(obj, ownProps);
}
