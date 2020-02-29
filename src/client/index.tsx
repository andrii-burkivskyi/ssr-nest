import * as React from "react";
import * as ReactDOM from "react-dom";
import { BaseLayoutModule } from "./pages/BaseLayout";
import { ModuleView } from "./core/decorators/module/Module.view";

const app = new BaseLayoutModule();

ReactDOM.render(
    <ModuleView module={app} />,
    document.getElementById('root')
);
