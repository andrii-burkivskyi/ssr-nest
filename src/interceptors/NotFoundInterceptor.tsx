
// import * as React from 'react';
// import * as ReactDOMServer from 'react-dom/server';
// import { JssProvider, SheetsRegistry } from 'react-jss';
import {
  Catch, ExceptionFilter, ArgumentsHost, HttpStatus,
} from '@nestjs/common';
// import { BaseLayoutModule } from '../client/pages/BaseLayout';
// import { ModuleView } from '../client/core/decorators/module/Module.view';
// import { LocationService } from '../client/core/services/Location.service';
// import { ModuleBase } from '../client/core/decorators/module/Module.base';

const isFileUrl = (path: string) => {
  const files = [
    /.ico$/,
    /.js$/,
  ];
  return files.some((file) => file.test(path));
};

@Catch()
export class NotFoundInterceptor implements ExceptionFilter {
  async catch(exception: any, host: ArgumentsHost) {
    if (host.getArgByIndex(0)) {
      const ctx = host.switchToHttp();
      const response = ctx.getResponse();
      if (
          exception?.status === HttpStatus.NOT_FOUND &&
          exception?.path?.includes('/index.html') &&
          !isFileUrl(host.getArgByIndex(0).originalUrl)
      ) {
        // const app = new BaseLayoutModule();
        // const location: LocationService = ModuleBase.services.get(LocationService);
        // location.pathname = host.getArgByIndex(0).originalUrl;
        // await app.waitForStateInit;

        // const sheets = new SheetsRegistry();
        // const body = ReactDOMServer.renderToString((
        //     <JssProvider registry={sheets}>
        //         <ModuleView module={app} />
        //     </JssProvider>
        // ));
        // const html = `
        //     <!DOCTYPE html>
        //     <html>
        //     <head>
        //         <meta charset="UTF-8">
        //         <title>App generator</title>
        //         <link rel="icon" type="image/x-icon" href="https://github.githubassets.com/favicon.ico">
        //         <style type="text/css">${sheets.toString({ indent: 0, allowEmpty: false })}</style>
        //     </head>
        //     <body>
        //         <div id="root">${body}</div>
        //         <script defer async src="/client/vendors.chunk.js"></script>
        //         <script defer async src="/client/main.js"></script>
        //     </body>
        //     </html>
        // `;
        const html = `
                    <!DOCTYPE html>
                    <html>
                    <head>
                        <meta charset="UTF-8">
                        <title>App generator</title>
                        <link rel="icon" type="image/x-icon" href="https://github.githubassets.com/favicon.ico">
                    </head>
                    <body>
                        <div id="root"></div>
                        <script defer async src="/client/vendors.chunk.js"></script>
                        <script defer async src="/client/core.chunk.js"></script>
                        <script defer async src="/client/main.js"></script>
                    </body>
                    </html>
                `;

        response.send(html);
      }
    }
  }
}
