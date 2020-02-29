"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const React = require("react");
const ReactDOMServer = require("react-dom/server");
const react_jss_1 = require("react-jss");
const common_1 = require("@nestjs/common");
const BaseLayout_1 = require("../client/pages/BaseLayout");
const Module_view_1 = require("../client/core/decorators/module/Module.view");
const Location_service_1 = require("../client/core/services/Location.service");
const Module_base_1 = require("../client/core/decorators/module/Module.base");
let NotFoundInterceptor = class NotFoundInterceptor {
    async catch(exception, host) {
        var _a, _b, _c;
        if (host.getArgByIndex(0)) {
            const ctx = host.switchToHttp();
            const response = ctx.getResponse();
            if (((_a = exception) === null || _a === void 0 ? void 0 : _a.status) === common_1.HttpStatus.NOT_FOUND && ((_c = (_b = exception) === null || _b === void 0 ? void 0 : _b.path) === null || _c === void 0 ? void 0 : _c.includes('/index.html')) &&
                !host.getArgByIndex(0).originalUrl.includes('favicon.ico')) {
                const app = new BaseLayout_1.BaseLayoutModule();
                const location = Module_base_1.ModuleBase.services.get(Location_service_1.LocationService);
                location.pathname = host.getArgByIndex(0).originalUrl;
                await app.waitForStateInit;
                const sheets = new react_jss_1.SheetsRegistry();
                const body = ReactDOMServer.renderToString((React.createElement(react_jss_1.JssProvider, { registry: sheets },
                    React.createElement(Module_view_1.ModuleView, { module: app }))));
                const html = `
                    <!DOCTYPE html>
                    <html>
                    <head>
                        <meta charset="UTF-8">
                        <title>App generator</title>
                        <link rel="icon" type="image/x-icon" href="https://github.githubassets.com/favicon.ico">
                        <style type="text/css">${sheets.toString({ indent: 0, allowEmpty: false })}</style>
                    </head>
                    <body>
                        <div id="root">${body}</div>
                    </body>
                    </html>
                `;
                response.send(html);
            }
        }
    }
};
NotFoundInterceptor = tslib_1.__decorate([
    common_1.Catch()
], NotFoundInterceptor);
exports.NotFoundInterceptor = NotFoundInterceptor;
//# sourceMappingURL=NotFoundInterceptor.js.map