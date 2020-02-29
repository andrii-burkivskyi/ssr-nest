"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const React = require("react");
const mobx_1 = require("mobx");
const Form_types_1 = require("../Form/Form.types");
const watch_1 = require("../../utils/watch");
const List_config_1 = require("./List.config");
class ListStore {
    constructor(props) {
        this.options = [];
        this.theme = ListStore.theme.DEFAULT;
        this.listRef = React.createRef();
        this.scrollRef = React.createRef();
        this.filter = (item) => true;
        this.onSelect = (option) => (item) => { };
        this.scrollTo = (option, shouldAttachToTop = true) => {
            watch_1.default(() => Boolean(this.scrollRef.current), () => {
                const height = this.rowHeight * this.maxVisibleRows;
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
            });
        };
        this.scrollHandler = (event) => {
            const { scrollTop, scrollLeft } = event.currentTarget;
            this.listRef.current.Grid.handleScrollEvent({ scrollTop, scrollLeft });
        };
        if (props) {
            const { filter } = props, restProps = tslib_1.__rest(props, ["filter"]);
            mobx_1.set(this, restProps);
            this.filter = filter || this.filter;
        }
    }
    get firstPublicOption() {
        return this.publicOptions[0] || null;
    }
    get lastPublicOption() {
        return this.publicOptions[this.publicOptions.length - 1] || null;
    }
    get rowHeight() {
        return List_config_1.default[this.theme].ROW_HEIGHT;
    }
    get maxVisibleRows() {
        return List_config_1.default[this.theme].MAX_VISIBLE_ROWS;
    }
    get publicOptions() {
        return this.options.filter(this.filter);
    }
    get style() {
        return {
            height: this.rowHeight * this.publicOptions.length,
            maxHeight: this.maxVisibleRows * this.rowHeight
        };
    }
    ;
}
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
exports.default = ListStore;
//# sourceMappingURL=List.store.js.map