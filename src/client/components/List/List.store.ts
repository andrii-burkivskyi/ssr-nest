
import * as React from "react";
import { observable, set, computed, action } from "mobx";
import Scrollbars from "react-custom-scrollbars";
import { FormTheme } from "../Form/Form.types";

import watch from "../../utils/watch";

import config from "./List.config"

export interface InitProps<T = CommonMap> {
    options: ListStore["options"];
    onSelect?: (option: Nullable<T>) => (item: T) => void;
    filter?: ListStore["filter"];
}

export default class ListStore<T = CommonMap> {
    static theme = FormTheme;
    
    constructor(props?: InitProps<T>) {
        if (props) {
            const { filter, ...restProps } = props;
            set(this, restProps);
            this.filter = filter || this.filter;
        }
    }

    @observable options: T[] = [];

    @observable theme: FormTheme = ListStore.theme.DEFAULT;

    @observable listRef: React.RefObject<any> = React.createRef();
    @observable scrollRef: React.RefObject<Scrollbars> = React.createRef();
    @observable filter: (item: T) => boolean = (item) => true;
    @observable onSelect: (option: Nullable<T>) => (item: T) => void = (option) => (item) => {};

    @computed get firstPublicOption(): Nullable<T> {
        return this.publicOptions[0] || null;
    }

    @computed get lastPublicOption(): Nullable<T> {
        return this.publicOptions[this.publicOptions.length - 1] || null;
    }

    @computed get rowHeight(): number {
        return config[this.theme].ROW_HEIGHT;
    }

    @computed get maxVisibleRows(): number {
        return config[this.theme].MAX_VISIBLE_ROWS;
    }

    @computed get publicOptions(): Array<T> {
        return this.options.filter(this.filter);
    }

    @computed get style(): Partial<React.CSSProperties> {
        return {
            height: this.rowHeight * this.publicOptions.length,
            maxHeight: this.maxVisibleRows * this.rowHeight
        };
    };

    @action scrollTo = (option: Nullable<T>, shouldAttachToTop: boolean = true) => {
        watch(
            () => Boolean(this.scrollRef.current),
            () => {
                const height: number = this.rowHeight * this.maxVisibleRows;
                const indexOfOption = option ? this.publicOptions.indexOf(option) : 0;

                const selectionOnTop = indexOfOption * this.rowHeight;
                const selectionOnBottom = selectionOnTop + height - this.rowHeight;

                const top = shouldAttachToTop ? selectionOnTop : selectionOnTop - height + this.rowHeight;

                if (this.scrollRef.current) {
                    const scrollTop = this.scrollRef.current.getScrollTop();
                    const scrollBottom = scrollTop + height - this.rowHeight;
                    const shouldScroll = shouldAttachToTop
                        ? selectionOnTop < scrollTop || selectionOnTop > scrollBottom
                        : selectionOnTop > scrollBottom || selectionOnBottom < scrollTop;

                    shouldScroll && this.scrollRef.current.scrollTop(top);
                }
            }
        )
    }
    
    @action scrollHandler = (event: React.UIEvent) => {
        const { scrollTop, scrollLeft } = event.currentTarget;
        this.listRef.current.Grid.handleScrollEvent({ scrollTop, scrollLeft });
    }
}

