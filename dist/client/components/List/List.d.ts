import { Component } from "react";
import ListStore from "./List.store";
export default class List<T> extends Component<ViewOf<ListStore<T>> & {
    ItemComponent: any;
}> {
    render(): JSX.Element;
    renderItem: ({ key, index, style }: {
        key: any;
        index: any;
        style: any;
    }) => JSX.Element;
}
