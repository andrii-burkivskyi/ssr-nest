/// <reference types="node" />
import * as React from "react";
export declare type ComponentProps = {
    children: React.ReactNode;
    config: Object;
    target: React.RefObject<HTMLElement>;
    resize?: boolean;
};
declare class DomAlign extends React.PureComponent<ComponentProps> {
    static defaultProps: {
        target: undefined;
        resize: boolean;
    };
    timeoutId?: NodeJS.Timeout;
    source: React.RefObject<HTMLElement>;
    align: () => void;
    constructor(props: ComponentProps);
    componentDidMount(): void;
    componentDidUpdate(): void;
    componentWillUnmount(): void;
    render(): React.FunctionComponentElement<{
        ref: React.RefObject<HTMLElement>;
    }>;
}
export default DomAlign;
