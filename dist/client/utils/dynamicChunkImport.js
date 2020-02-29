"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("./constants");
exports.dynamicChunkImport = (path) => {
    return new Promise((resolve, reject) => {
        if (constants_1.IS_NODE()) {
            resolve();
        }
        var head = document.getElementsByTagName('head')[0];
        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.onload = function () { resolve(); };
        script.onerror = function () { reject(); };
        script.src = path;
        head.appendChild(script);
    });
};
//# sourceMappingURL=dynamicChunkImport.js.map