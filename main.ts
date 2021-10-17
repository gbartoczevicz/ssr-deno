import { listenAndServe } from "std/http/mod.ts";
import { makeResponse } from "~/server/make_response.ts";

listenAndServe(":3000", async (request) => {
  const response = await makeResponse(request);

  return response;
});
