import { makeResponse } from "~/server/make_response.ts";

const server = Deno.listen({ port: 3000 });

for await (const connection of server) {
  (async () => {
    const httpConnection = Deno.serveHttp(connection);

    for await (const requestEvent of httpConnection) {
      const response = await makeResponse(requestEvent);

      await requestEvent.respondWith(response);
    }
  })();
}
