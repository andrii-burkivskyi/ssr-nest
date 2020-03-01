import * as React from "react";
import * as ReactDOM from "react-dom";
import { ModuleView } from "./core/decorators/module/Module.view";
import { BaseLayoutModule } from "./pages/BaseLayout/index";

const app = new BaseLayoutModule();

ReactDOM.render(
    <ModuleView module={app} />,
    document.getElementById('root')
);
