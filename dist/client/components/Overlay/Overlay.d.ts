import * as React from "react";
export declare type ComponentProps = {
    isOpen: boolean;
    className?: string;
    children: React.ReactNode;
    onOutsideClick?: (event?: MouseEvent) => void;
    target: React.RefObject<any>;
    alignConfig: Object;
    resize?: boolean;
};
declare class Overlay extends React.Component<ComponentProps> {
    static defaultProps: {
        isOpen: boolean;
        onOutsideClick: () => void;
        alignConfig: {
            points: string[];
            offset: number[];
        };
        resize: boolean;
    };
    onOutsideClick: (event?: MouseEvent | undefined) => void;
    render(): JSX.Element | null;
}
export default Overlay;
