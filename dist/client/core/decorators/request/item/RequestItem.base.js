"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
require("reflect-metadata");
const mobx_1 = require("mobx");
const request_1 = require("../request");
const requestItem_extractor_1 = require("./requestItem.extractor");
class RequestItemBase {
    constructor(data) {
        this.set = (data) => {
            data && mobx_1.set(this, Object.assign(Object.assign({}, this.emptyProps), data));
            return this;
        };
        this.clear = () => {
            mobx_1.set(this, this.emptyProps);
            return this;
        };
        this.get = async (props) => {
            var _a, _b;
            try {
                const data = await this.getRequest.send(props);
                this.set(data);
            }
            catch (error) {
                await ((_b = (_a = this).onDelete) === null || _b === void 0 ? void 0 : _b.call(_a, this));
                this.clear();
                console.error(error);
            }
        };
        this.create = async (props) => {
            var _a, _b;
            try {
                const data = await this.createRequest.send({ input: props });
                this.set(data);
                (_b = (_a = this).onUpdate) === null || _b === void 0 ? void 0 : _b.call(_a, this);
            }
            catch (error) {
                this.clear();
                console.error(error);
            }
        };
        this.update = async (props) => {
            var _a, _b, _c, _d, _e, _f, _g;
            try {
                const mergedProps = Object.assign(Object.assign({}, this.props), props);
                const data = await this.updateRequest.send({ input: mergedProps });
                this.set(data);
                (_b = (_a = this).onUpdate) === null || _b === void 0 ? void 0 : _b.call(_a, this);
            }
            catch (error) {
                if (Array.isArray(error)) {
                    const errorWithStatus = error.find((e) => { var _a, _b, _c; return (_c = (_b = (_a = e) === null || _a === void 0 ? void 0 : _a.extensions) === null || _b === void 0 ? void 0 : _b.exception) === null || _c === void 0 ? void 0 : _c.status; });
                    const errorStatus = (_e = (_d = (_c = errorWithStatus) === null || _c === void 0 ? void 0 : _c.extensions) === null || _d === void 0 ? void 0 : _d.exception) === null || _e === void 0 ? void 0 : _e.status;
                    if (errorStatus === 404) {
                        (_g = (_f = this).onDelete) === null || _g === void 0 ? void 0 : _g.call(_f, this);
                        this.clear();
                    }
                }
                console.error(error);
            }
        };
        this.delete = async () => {
            var _a, _b;
            try {
                await this.deleteRequest.send({ input: this.primaryProps });
                await ((_b = (_a = this).onDelete) === null || _b === void 0 ? void 0 : _b.call(_a, this));
                this.clear();
            }
            catch (error) {
                console.error(error);
            }
        };
        this.updateListRegistration = (props) => {
            this.onDelete = props.onDelete;
            this.onUpdate = props.onUpdate;
        };
        const gql = requestItem_extractor_1.RequestItemExtractor(this).query;
        this.keys = requestItem_extractor_1.RequestItemExtractor(this).keys;
        this._itemServiceName = requestItem_extractor_1.RequestItemExtractor(this).name;
        this.getRequest = new request_1.default({ query: gql.get });
        this.createRequest = new request_1.default({ query: gql.create });
        this.updateRequest = new request_1.default({ query: gql.update });
        this.deleteRequest = new request_1.default({ query: gql.delete });
        this.set((data !== null && data !== void 0 ? data : null));
    }
    get emptyProps() {
        return this.keys.reduce((acc, key) => (Object.assign(Object.assign({}, acc), { [key]: undefined })), {});
    }
    get props() {
        return this.keys.reduce((acc, key) => (Object.assign(Object.assign({}, acc), { [key]: this[key] })), {});
    }
    get primaryProps() {
        return this.keys.reduce((acc, key) => {
            const isPrimary = requestItem_extractor_1.RequestItemExtractor(this).isPrimary(key);
            if (isPrimary) {
                return Object.assign(Object.assign({}, acc), { [key]: this[key] });
            }
            return acc;
        }, {});
    }
}
tslib_1.__decorate([
    mobx_1.action,
    tslib_1.__metadata("design:type", Object)
], RequestItemBase.prototype, "set", void 0);
tslib_1.__decorate([
    mobx_1.action,
    tslib_1.__metadata("design:type", Object)
], RequestItemBase.prototype, "clear", void 0);
tslib_1.__decorate([
    mobx_1.action,
    tslib_1.__metadata("design:type", Object)
], RequestItemBase.prototype, "get", void 0);
tslib_1.__decorate([
    mobx_1.action,
    tslib_1.__metadata("design:type", Object)
], RequestItemBase.prototype, "create", void 0);
tslib_1.__decorate([
    mobx_1.action,
    tslib_1.__metadata("design:type", Object)
], RequestItemBase.prototype, "update", void 0);
tslib_1.__decorate([
    mobx_1.action,
    tslib_1.__metadata("design:type", Object)
], RequestItemBase.prototype, "delete", void 0);
tslib_1.__decorate([
    mobx_1.action,
    tslib_1.__metadata("design:type", Object)
], RequestItemBase.prototype, "updateListRegistration", void 0);
tslib_1.__decorate([
    mobx_1.computed,
    tslib_1.__metadata("design:type", Object),
    tslib_1.__metadata("design:paramtypes", [])
], RequestItemBase.prototype, "emptyProps", null);
tslib_1.__decorate([
    mobx_1.computed,
    tslib_1.__metadata("design:type", Object),
    tslib_1.__metadata("design:paramtypes", [])
], RequestItemBase.prototype, "props", null);
tslib_1.__decorate([
    mobx_1.computed,
    tslib_1.__metadata("design:type", Object),
    tslib_1.__metadata("design:paramtypes", [])
], RequestItemBase.prototype, "primaryProps", null);
exports.RequestItemBase = RequestItemBase;
//# sourceMappingURL=RequestItem.base.js.map