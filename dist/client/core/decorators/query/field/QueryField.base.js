"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("../../../../utils/constants");
const object_1 = require("../../../../utils/object");
const queryField_extractor_1 = require("./queryField.extractor");
class QueryFieldBase {
    constructor() {
        this.keys = [];
        this.shouldUpdate = false;
        this.filter = constants_1.DEFAULT_OBJECT;
        this.newFilter = constants_1.DEFAULT_OBJECT;
        this.setFilter = (filter) => {
            this.filter = this.keys.reduce((acc, key) => (Object.assign(Object.assign({}, acc), { [key]: queryField_extractor_1.QueryFieldExtractor(this).conformer(key)(filter[key]) })), {});
            this.newFilter = constants_1.DEFAULT_OBJECT;
        };
        this.clear = () => {
            this.newFilter = {};
        };
        this.update = () => this.shouldUpdate = true;
        this.get = () => {
            let filter;
            if (this.shouldUpdate || this.newFilter === constants_1.DEFAULT_OBJECT) {
                filter = object_1.clearUndefinedValues(Object.assign(Object.assign({}, this.filter), this.newFilter));
            }
            else {
                filter = object_1.clearUndefinedValues(this.newFilter);
            }
            this.shouldUpdate = false;
            return filter;
        };
        this.keys = queryField_extractor_1.QueryFieldExtractor(this).keys;
        this.keys.forEach((key) => {
            this[key] = (value) => {
                this.newFilter = Object.assign(Object.assign({}, this.newFilter), { [key]: queryField_extractor_1.QueryFieldExtractor(this).conformer(key)(value) });
            };
        });
    }
}
exports.QueryFieldBase = QueryFieldBase;
//# sourceMappingURL=QueryField.base.js.map