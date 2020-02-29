"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const ReactDOM = require("react-dom");
const BaseLayout_1 = require("./pages/BaseLayout");
const Module_view_1 = require("./core/decorators/module/Module.view");
const app = new BaseLayout_1.BaseLayoutModule();
ReactDOM.render(React.createElement(Module_view_1.ModuleView, { module: app }), document.getElementById('root'));
//# sourceMappingURL=index.js.map