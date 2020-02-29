"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const requestList_decorator_1 = require("./requestList.decorator");
exports.RequestListExtractor = (target) => {
    return {
        name: Reflect.getMetadata(requestList_decorator_1.RLIKeys.NAME, target),
        query: Reflect.getMetadata(requestList_decorator_1.RLIKeys.QUERY, target),
        ItemConstructor: Reflect.getMetadata(requestList_decorator_1.RLIKeys.ITEM_CONSTRUCTOR, target),
    };
};
//# sourceMappingURL=requestList.extractor.js.map