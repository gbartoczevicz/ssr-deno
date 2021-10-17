import { renderToString } from "react-dom-server";
import { ServerStyleSheet } from "styled-components";

export const serverRender = (rawDefault: CallableFunction) => {
  const sheet = new ServerStyleSheet();

  const html = renderToString(sheet.collectStyles(rawDefault()));

  const styleTags = sheet.getStyleTags();

  sheet.seal();

  return `
    <!DOCTYPE html>
    <html>
      <head>
        ${styleTags}
      </head>
      <body>
        ${html}
      </body>
    </html>
  `;
};
