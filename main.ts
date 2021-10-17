import { listenAndServe } from "std/http/mod.ts";
import { makeResponse } from "~/server/make_response.ts";

const PORT = 3000;

listenAndServe(`:${PORT}`, async (request) => {
  const response = await makeResponse(request);

  return response;
});

console.log(`The server is running at ${PORT}`);
