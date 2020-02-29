import * as React from "react";
import Scrollbars from "react-custom-scrollbars";
import { FormTheme } from "../Form/Form.types";
export interface InitProps<T = CommonMap> {
    options: ListStore["options"];
    onSelect?: (option: Nullable<T>) => (item: T) => void;
    filter?: ListStore["filter"];
}
export default class ListStore<T = CommonMap> {
    static theme: typeof FormTheme;
    constructor(props?: InitProps<T>);
    options: T[];
    theme: FormTheme;
    listRef: React.RefObject<any>;
    scrollRef: React.RefObject<Scrollbars>;
    filter: (item: T) => boolean;
    onSelect: (option: Nullable<T>) => (item: T) => void;
    get firstPublicOption(): Nullable<T>;
    get lastPublicOption(): Nullable<T>;
    get rowHeight(): number;
    get maxVisibleRows(): number;
    get publicOptions(): Array<T>;
    get style(): Partial<React.CSSProperties>;
    scrollTo: (option: Nullable<T>, shouldAttachToTop?: boolean) => void;
    scrollHandler: (event: React.UIEvent<Element>) => void;
}
