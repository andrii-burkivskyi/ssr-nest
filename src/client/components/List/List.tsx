import React, { Component } from "react";
import Scrollbars from "react-custom-scrollbars"
import { AutoSizer } from 'react-virtualized/dist/commonjs/AutoSizer';
import { List as VirtualList } from 'react-virtualized/dist/commonjs/List';
import { toJS } from "mobx";
import { observer } from "mobx-react";

import ListStore from "./List.store";

const listStyle: React.CSSProperties = { overflowX: "hidden", overflowY: "hidden" };

@observer
export default class List<T> extends Component<ViewOf<ListStore<T>> & { ItemComponent: any }> {
    render() {
        return (
            <div style={toJS(this.props.model.style)}>
                <AutoSizer>
                    {({ height, width }: {height: number, width: number}) => (
                        <Scrollbars
                            ref={this.props.model.scrollRef}
                            onScroll={this.props.model.scrollHandler}
                            style={{ height, width }}
                        >
                            <VirtualList
                                ref={this.props.model.listRef}
                                width={width}
                                height={height}
                                rowHeight={this.props.model.rowHeight}
                                rowCount={this.props.model.publicOptions.length}
                                rowRenderer={this.renderItem}
                                style={listStyle}
                            />
                        </Scrollbars>
                    )}
                </AutoSizer>
            </div>
        );
    }

    renderItem = ({key, index, style}) => {
        const { ItemComponent } = this.props;
        
        return (
            <ItemComponent key={key} index={index} model={this.props.model.publicOptions[index]} style={style} />
        );
    }

}
