"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var mobx_1 = require("mobx");
var Form_types_1 = require("../Form/Form.types");
var watch_1 = require("../../utils/watch");
var List_config_1 = require("./List.config");
var ListStore = /** @class */ (function () {
    function ListStore(props) {
        var _this = this;
        this.options = [];
        this.theme = ListStore.theme.DEFAULT;
        this.listRef = React.createRef();
        this.scrollRef = React.createRef();
        this.filter = function (item) { return true; };
        this.onSelect = function (option) { return function (item) { }; };
        this.scrollTo = function (option, shouldAttachToTop) {
            if (shouldAttachToTop === void 0) { shouldAttachToTop = true; }
            watch_1.default(function () { return Boolean(_this.scrollRef.current); }, function () {
                var height = _this.rowHeight * _this.maxVisibleRows;
                var indexOfOption = option ? _this.publicOptions.indexOf(option) : 0;
                var selectionOnTop = indexOfOption * _this.rowHeight;
                var selectionOnBottom = selectionOnTop + height - _this.rowHeight;
                var top = shouldAttachToTop ? selectionOnTop : selectionOnTop - height + _this.rowHeight;
                if (_this.scrollRef.current) {
                    var scrollTop = _this.scrollRef.current.getScrollTop();
                    var scrollBottom = scrollTop + height - _this.rowHeight;
                    var shouldScroll = shouldAttachToTop
                        ? selectionOnTop < scrollTop || selectionOnTop > scrollBottom
                        : selectionOnTop > scrollBottom || selectionOnBottom < scrollTop;
                    shouldScroll && _this.scrollRef.current.scrollTop(top);
                }
            });
        };
        this.scrollHandler = function (event) {
            var _a = event.currentTarget, scrollTop = _a.scrollTop, scrollLeft = _a.scrollLeft;
            _this.listRef.current.Grid.handleScrollEvent({ scrollTop: scrollTop, scrollLeft: scrollLeft });
        };
        if (props) {
            var filter = props.filter, restProps = tslib_1.__rest(props, ["filter"]);
            mobx_1.set(this, restProps);
            this.filter = filter || this.filter;
        }
    }
    Object.defineProperty(ListStore.prototype, "firstPublicOption", {
        get: function () {
            return this.publicOptions[0] || null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListStore.prototype, "lastPublicOption", {
        get: function () {
            return this.publicOptions[this.publicOptions.length - 1] || null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListStore.prototype, "rowHeight", {
        get: function () {
            return List_config_1.default[this.theme].ROW_HEIGHT;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListStore.prototype, "maxVisibleRows", {
        get: function () {
            return List_config_1.default[this.theme].MAX_VISIBLE_ROWS;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListStore.prototype, "publicOptions", {
        get: function () {
            return this.options.filter(this.filter);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListStore.prototype, "style", {
        get: function () {
            return {
                height: this.rowHeight * this.publicOptions.length,
                maxHeight: this.maxVisibleRows * this.rowHeight
            };
        },
        enumerable: true,
        configurable: true
    });
    ;
    ListStore.theme = Form_types_1.FormTheme;
    tslib_1.__decorate([
        mobx_1.observable,
        tslib_1.__metadata("design:type", Array)
    ], ListStore.prototype, "options", void 0);
    tslib_1.__decorate([
        mobx_1.observable,
        tslib_1.__metadata("design:type", String)
    ], ListStore.prototype, "theme", void 0);
    tslib_1.__decorate([
        mobx_1.observable,
        tslib_1.__metadata("design:type", Object)
    ], ListStore.prototype, "listRef", void 0);
    tslib_1.__decorate([
        mobx_1.observable,
        tslib_1.__metadata("design:type", Object)
    ], ListStore.prototype, "scrollRef", void 0);
    tslib_1.__decorate([
        mobx_1.observable,
        tslib_1.__metadata("design:type", Function)
    ], ListStore.prototype, "filter", void 0);
    tslib_1.__decorate([
        mobx_1.observable,
        tslib_1.__metadata("design:type", Function)
    ], ListStore.prototype, "onSelect", void 0);
    tslib_1.__decorate([
        mobx_1.computed,
        tslib_1.__metadata("design:type", Object),
        tslib_1.__metadata("design:paramtypes", [])
    ], ListStore.prototype, "firstPublicOption", null);
    tslib_1.__decorate([
        mobx_1.computed,
        tslib_1.__metadata("design:type", Object),
        tslib_1.__metadata("design:paramtypes", [])
    ], ListStore.prototype, "lastPublicOption", null);
    tslib_1.__decorate([
        mobx_1.computed,
        tslib_1.__metadata("design:type", Number),
        tslib_1.__metadata("design:paramtypes", [])
    ], ListStore.prototype, "rowHeight", null);
    tslib_1.__decorate([
        mobx_1.computed,
        tslib_1.__metadata("design:type", Number),
        tslib_1.__metadata("design:paramtypes", [])
    ], ListStore.prototype, "maxVisibleRows", null);
    tslib_1.__decorate([
        mobx_1.computed,
        tslib_1.__metadata("design:type", Array),
        tslib_1.__metadata("design:paramtypes", [])
    ], ListStore.prototype, "publicOptions", null);
    tslib_1.__decorate([
        mobx_1.computed,
        tslib_1.__metadata("design:type", Object),
        tslib_1.__metadata("design:paramtypes", [])
    ], ListStore.prototype, "style", null);
    tslib_1.__decorate([
        mobx_1.action,
        tslib_1.__metadata("design:type", Object)
    ], ListStore.prototype, "scrollTo", void 0);
    tslib_1.__decorate([
        mobx_1.action,
        tslib_1.__metadata("design:type", Object)
    ], ListStore.prototype, "scrollHandler", void 0);
    return ListStore;
}());
exports.default = ListStore;
//# sourceMappingURL=List.store.js.map