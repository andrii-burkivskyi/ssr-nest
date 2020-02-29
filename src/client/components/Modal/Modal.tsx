
import * as React from "react";
import { observer } from "mobx-react";

import Portal from "../Portal/Portal";
import ClickOutside from "../Overlay/ClickOutside";

import ModalStore from "./Modal.store";

@observer
export default class Modal<T> extends React.Component<ViewOf<ModalStore<T>>> {
    componentDidMount() {
        this.props.model.load();
    }

    componentDidUpdate() {
        this.props.model.load();
    }

    render() {
        const Component = this.props.model.loadedComponent;
        const model = this.props.model.loadedModel;

        if (this.props.model.isOpen && Component && model) {
            return (
            <Portal>
                <ClickOutside onClick={ModalStore.closeModalsByClick}>
                    <div ref={this.props.model.containerRef}>
                        <Component model={model} />
                    </div>
                </ClickOutside>
            </Portal>
            );
        }

        return null;
    }
}
