import { STATUS_TEXT, Status } from "std/http/mod.ts";
import { getPageFromName } from "./pages.ts";
import { serverRender } from "./render.ts";

export const makeResponse = async (request: Deno.RequestEvent) => {
  const route = request.request.url.substring(
    request.request.url.lastIndexOf("/") + 1
  );

  let page: unknown;

  try {
    page = await getPageFromName(route);
  } catch (err) {
    console.log("Error getting page from url", err);

    return new Response(STATUS_TEXT.get(Status.NotFound), {
      status: Status.NotFound,
    });
  }

  const html = serverRender(page as CallableFunction);

  return new Response(html, {
    headers: new Headers({ "Content-Type": "text/html; charset=utf-8" }),
  });
};
