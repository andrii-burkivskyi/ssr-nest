import { IS_NODE } from './constants';

export const dynamicChunkImport = (path: string) => new Promise((resolve, reject) => {
  if (IS_NODE()) { resolve(); }
  const head = document.getElementsByTagName('head')[0];
  const script = document.createElement('script');
  script.type = 'text/javascript';
  script.onload = function () { resolve(); };
  script.onerror = function () { reject(); };
  script.src = path;
  head.appendChild(script);
});
