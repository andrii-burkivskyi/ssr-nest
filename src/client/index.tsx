import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ModuleView } from './core/decorators/module/Module.view';
import { BaseLayoutModule } from './pages/BaseLayout/index';
import { JssProvider, SheetsRegistry } from "react-jss";

const render = async () => {
  const app = new BaseLayoutModule();
  window["app"] = app;
  await app.ssrService.modules.isComplete;
  const sheets = new SheetsRegistry();
  console.time("test")

  ReactDOM.hydrate(
    <JssProvider registry={sheets}>
      <ModuleView module={app} />
    </JssProvider>,
    document.getElementById('root'),
    () => {
      console.timeEnd("test")
      app.ssrService.clear();
    }
  );
}

render();

