import * as React from "react";
import ModalStore from "./Modal.store";
export default class Modal<T> extends React.Component<ViewOf<ModalStore<T>>> {
    componentDidMount(): void;
    componentDidUpdate(): void;
    render(): JSX.Element | null;
}
