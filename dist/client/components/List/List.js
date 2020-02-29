"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const react_1 = require("react");
const react_custom_scrollbars_1 = require("react-custom-scrollbars");
const AutoSizer_1 = require("react-virtualized/dist/commonjs/AutoSizer");
const List_1 = require("react-virtualized/dist/commonjs/List");
const mobx_1 = require("mobx");
const mobx_react_1 = require("mobx-react");
const listStyle = { overflowX: "hidden", overflowY: "hidden" };
let List = class List extends react_1.Component {
    constructor() {
        super(...arguments);
        this.renderItem = ({ key, index, style }) => {
            const { ItemComponent } = this.props;
            return (react_1.default.createElement(ItemComponent, { key: key, index: index, model: this.props.model.publicOptions[index], style: style }));
        };
    }
    render() {
        return (react_1.default.createElement("div", { style: mobx_1.toJS(this.props.model.style) },
            react_1.default.createElement(AutoSizer_1.AutoSizer, null, ({ height, width }) => (react_1.default.createElement(react_custom_scrollbars_1.default, { ref: this.props.model.scrollRef, onScroll: this.props.model.scrollHandler, style: { height, width } },
                react_1.default.createElement(List_1.List, { ref: this.props.model.listRef, width: width, height: height, rowHeight: this.props.model.rowHeight, rowCount: this.props.model.publicOptions.length, rowRenderer: this.renderItem, style: listStyle }))))));
    }
};
List = tslib_1.__decorate([
    mobx_react_1.observer
], List);
exports.default = List;
//# sourceMappingURL=List.js.map