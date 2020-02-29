"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = require("react");
var react_custom_scrollbars_1 = require("react-custom-scrollbars");
var AutoSizer_1 = require("react-virtualized/dist/commonjs/AutoSizer");
var List_1 = require("react-virtualized/dist/commonjs/List");
var mobx_1 = require("mobx");
var mobx_react_1 = require("mobx-react");
var listStyle = { overflowX: "hidden", overflowY: "hidden" };
var List = /** @class */ (function (_super) {
    tslib_1.__extends(List, _super);
    function List() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.renderItem = function (_a) {
            var key = _a.key, index = _a.index, style = _a.style;
            var ItemComponent = _this.props.ItemComponent;
            return (react_1.default.createElement(ItemComponent, { key: key, index: index, model: _this.props.model.publicOptions[index], style: style }));
        };
        return _this;
    }
    List.prototype.render = function () {
        var _this = this;
        return (react_1.default.createElement("div", { style: mobx_1.toJS(this.props.model.style) },
            react_1.default.createElement(AutoSizer_1.AutoSizer, null, function (_a) {
                var height = _a.height, width = _a.width;
                return (react_1.default.createElement(react_custom_scrollbars_1.default, { ref: _this.props.model.scrollRef, onScroll: _this.props.model.scrollHandler, style: { height: height, width: width } },
                    react_1.default.createElement(List_1.List, { ref: _this.props.model.listRef, width: width, height: height, rowHeight: _this.props.model.rowHeight, rowCount: _this.props.model.publicOptions.length, rowRenderer: _this.renderItem, style: listStyle })));
            })));
    };
    List = tslib_1.__decorate([
        mobx_react_1.observer
    ], List);
    return List;
}(react_1.Component));
exports.default = List;
//# sourceMappingURL=List.js.map