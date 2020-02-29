"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const watch = (condition, action, repeatCount = 5) => new Promise((resolve) => {
    const waiter = (index = 0) => {
        if (condition()) {
            action();
            resolve();
        }
        else {
            if (repeatCount === null || index < repeatCount) {
                setTimeout(waiter, 50, index + 1);
            }
        }
    };
    waiter();
});
exports.default = watch;
//# sourceMappingURL=watch.js.map