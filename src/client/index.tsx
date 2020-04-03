import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ModuleView } from './core/decorators/module/Module.view';
import { BaseLayoutModule } from './pages/BaseLayout/index';
import { JssProvider, SheetsRegistry } from "react-jss";

const render = async () => {
  const app = new BaseLayoutModule();
  await app.ssrService.modules.isComplete;
  const sheets = new SheetsRegistry();

  ReactDOM.hydrate(
    <JssProvider registry={sheets}>
      <ModuleView module={app} />
    </JssProvider>,
    document.getElementById('root'),
    () => { app.ssrService.clear(); }
  );
}

render();

