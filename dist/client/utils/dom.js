"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("./constants");
exports.blurAll = () => {
    if (!constants_1.IS_NODE()) {
        Array.from(document.getElementsByTagName('button')).forEach((item) => item.blur());
        Array.from(document.getElementsByTagName('a')).forEach((item) => item.blur());
        Array.from(document.getElementsByTagName('input')).forEach((item) => item.blur());
        Array.from(document.getElementsByTagName('textarea')).forEach((item) => item.blur());
    }
};
exports.scrollTo = (x = 0) => {
    window.scrollTo(x, 0);
};
exports.canUseDOM = Boolean(typeof window !== 'undefined' &&
    document &&
    document.createElement);
exports.isParentElementHitTheCondition = (element, condition) => {
    if (!element) {
        return false;
    }
    if (condition(element)) {
        return true;
    }
    return exports.isParentElementHitTheCondition(element.parentElement, condition);
};
exports.getParentDataAttributesValue = (element, attributeName) => {
    if (!element) {
        return [];
    }
    const dataAttributeValue = element.getAttribute(attributeName);
    const parentDataAttributeValue = exports.getParentDataAttributesValue(element.parentElement, attributeName);
    if (dataAttributeValue) {
        parentDataAttributeValue.unshift(dataAttributeValue);
    }
    return parentDataAttributeValue;
};
//# sourceMappingURL=dom.js.map