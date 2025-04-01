
import { serveStatic } from "@hono/node-server/serve-static";
import { serve } from "@hono/node-server";
import { factory } from "./factory.ts";

const app = factory.createApp();

export const apiRoutes = app
  .basePath('/api')

export type ApiRoutes = typeof apiRoutes;

app.get('/healthz', (c) => {
  return c.json({ message: 'Ok' });
});

app
  .get('/*', serveStatic({ root: './dist/static' }))
  .get('/*', serveStatic({ path: './dist/static/index.html' }));

(async () => {

  const port = 3000;
  serve({ fetch: app.fetch, port }, () => {
    // eslint-disable-next-line no-console
    console.log(`Server is running on port ${port.toString()}`);
  });
})().catch((error: unknown) => {
  console.error(error);
  process.exit(1);
});
