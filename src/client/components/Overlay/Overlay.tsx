import * as React from "react";
import { observer } from "mobx-react";

import Portal from "../Portal/Portal";

import DomAlign from "./DomAlign";
import ClickOutside from "./ClickOutside";

export type ComponentProps = {
    isOpen: boolean,
    className?: string,
    children: React.ReactNode,
    onOutsideClick?: (event?: MouseEvent) => void,
    target: React.RefObject<any>,
    alignConfig: Object,
    resize?: boolean,
};

@observer
class Overlay extends React.Component<ComponentProps> {
    static defaultProps = {
        isOpen: false,
        onOutsideClick: () => {},
        alignConfig: {
            points: ['tr', 'br'], // bottom-right
            offset: [0, 0],
        },
        resize: true,
    };

    onOutsideClick = (event?: MouseEvent) => {
        const { target, onOutsideClick } = this.props;
        if (target.current && event && target.current.contains(event.currentTarget)) { return; } // Note: Omit clicking target.

        if (onOutsideClick) {
            onOutsideClick(event);
        }
    };

    render() {
        if (!this.props.isOpen) { return null; }
        const width = this.props.target.current
            ? this.props.target.current.offsetWidth
            : 100;

        return (
            <Portal>
                <ClickOutside onClick={this.onOutsideClick}>
                    <DomAlign
                        config={this.props.alignConfig}
                        target={this.props.target}
                        resize={this.props.resize}
                    >
                        <div className={this.props.className} style={{width, position: "fixed"}}>
                            {this.props.children}
                        </div>
                    </DomAlign>
                </ClickOutside>
            </Portal>
        );
    }
}

export default Overlay;