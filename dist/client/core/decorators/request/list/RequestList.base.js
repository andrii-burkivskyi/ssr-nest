"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const mobx_1 = require("mobx");
const constants_1 = require("../../../../utils/constants");
const requestList_extractor_1 = require("./requestList.extractor");
const request_1 = require("../request");
const Module_base_1 = require("../../module/Module.base");
const Requests_service_1 = require("../../../services/Requests.service");
class RequestListBase {
    constructor(props) {
        var _a, _b;
        this.data = mobx_1.observable.array(constants_1.DEFAULT_ARRAY);
        this.isLocalUpdated = false;
        this.page = 0;
        this.take = 1000;
        this.totalItems = 0;
        this.requestService = Module_base_1.ModuleBase.services.get(Requests_service_1.RequestsService);
        this.finishRequestLoading = () => { };
        this.isLoading = new Promise((resolve) => {
            this.finishRequestLoading = resolve;
        });
        this.onDelete = async (deletedItem) => {
            var _a, _b;
            if (this.isLocalUpdated) {
                this.data.replace(this.data.filter((item) => item !== deletedItem));
                this.totalItems = this.totalItems - 1;
            }
            else {
                const filter = (_b = (_a = this.query) === null || _a === void 0 ? void 0 : _a.getPagination(), (_b !== null && _b !== void 0 ? _b : constants_1.DEFAULT_OBJECT));
                await this.get(filter);
            }
        };
        this.onUpdate = async (updatedItem) => {
            var _a, _b;
            if (this.isLocalUpdated) {
                if (!this.data.includes(updatedItem)) {
                    this.data.unshift(updatedItem);
                    this.totalItems = this.totalItems + 1;
                }
            }
            else {
                const filter = (_b = (_a = this.query) === null || _a === void 0 ? void 0 : _a.getPagination(), (_b !== null && _b !== void 0 ? _b : constants_1.DEFAULT_OBJECT));
                await this.get(filter);
            }
        };
        this.get = async (filter = constants_1.DEFAULT_OBJECT) => {
            var _a, _b;
            try {
                const data = await this.getRequest.send({ input: filter });
                const newItems = data.items.map((item) => new this.ItemConstructor(Object.assign(Object.assign({}, item), { onDelete: this.onUpdate, onUpdate: this.onUpdate })));
                this.data.replace(newItems);
                this.page = data.page;
                this.take = data.take;
                this.totalItems = data.totalItems;
                this.finishRequestLoading();
            }
            catch (error) {
                console.error((_b = (_a = error).toJSON) === null || _b === void 0 ? void 0 : _b.call(_a));
                this.finishRequestLoading();
            }
        };
        this.add = async (data) => {
            try {
                const item = new this.ItemConstructor();
                item.updateListRegistration({
                    onDelete: this.onDelete,
                    onUpdate: this.onUpdate
                });
                await item.create(data);
            }
            catch (error) {
                console.error(error);
            }
        };
        this.addEmpty = () => {
            try {
                const item = new this.ItemConstructor();
                item.updateListRegistration({
                    onDelete: this.onDelete,
                    onUpdate: this.onUpdate
                });
                return item;
            }
            catch (error) {
                console.error(error);
            }
            return constants_1.DEFAULT_OBJECT;
        };
        const gql = requestList_extractor_1.RequestListExtractor(this).query;
        this.ItemConstructor = requestList_extractor_1.RequestListExtractor(this).ItemConstructor;
        this.getRequest = new request_1.default({
            query: gql.getList
        });
        if (props) {
            this.isLocalUpdated = (_a = props.isLocalUpdated, (_a !== null && _a !== void 0 ? _a : this.isLocalUpdated));
            this.query = props.query;
            (_b = this.query) === null || _b === void 0 ? void 0 : _b.subscribe((input) => {
                var _a, _b;
                return this.get(Object.assign(Object.assign({}, input), { page: (_a = input.page, (_a !== null && _a !== void 0 ? _a : this.page)), take: (_b = input.take, (_b !== null && _b !== void 0 ? _b : this.take)) }));
            });
        }
        this.requestService.registerRequest(this.isLoading);
    }
}
tslib_1.__decorate([
    mobx_1.observable,
    tslib_1.__metadata("design:type", Object)
], RequestListBase.prototype, "isLocalUpdated", void 0);
tslib_1.__decorate([
    mobx_1.observable,
    tslib_1.__metadata("design:type", Number)
], RequestListBase.prototype, "page", void 0);
tslib_1.__decorate([
    mobx_1.observable,
    tslib_1.__metadata("design:type", Number)
], RequestListBase.prototype, "take", void 0);
tslib_1.__decorate([
    mobx_1.observable,
    tslib_1.__metadata("design:type", Number)
], RequestListBase.prototype, "totalItems", void 0);
tslib_1.__decorate([
    mobx_1.action,
    tslib_1.__metadata("design:type", Object)
], RequestListBase.prototype, "onDelete", void 0);
tslib_1.__decorate([
    mobx_1.action,
    tslib_1.__metadata("design:type", Object)
], RequestListBase.prototype, "onUpdate", void 0);
tslib_1.__decorate([
    mobx_1.action,
    tslib_1.__metadata("design:type", Object)
], RequestListBase.prototype, "get", void 0);
tslib_1.__decorate([
    mobx_1.action,
    tslib_1.__metadata("design:type", Object)
], RequestListBase.prototype, "add", void 0);
tslib_1.__decorate([
    mobx_1.action,
    tslib_1.__metadata("design:type", Object)
], RequestListBase.prototype, "addEmpty", void 0);
exports.RequestListBase = RequestListBase;
//# sourceMappingURL=RequestList.base.js.map