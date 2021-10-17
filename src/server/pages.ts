import { resolve } from "std/path/mod.ts";

const dirName = new URL(".", import.meta.url).pathname;
const toResolvePath = [dirName, "..", "pages"];
const resolvedPath = resolve(...toResolvePath);

export const getPageFromName = async (route: string) => {
  const dirEntryIterable = Deno.readDir(resolvedPath);

  let fileNameWithoutExt: string | null = null;
  let fileName: string | null = null;

  for await (const dirEntry of dirEntryIterable) {
    fileNameWithoutExt = dirEntry.name.split(".")[0];

    if (route === fileNameWithoutExt) {
      fileName = dirEntry.name;
      break;
    }
  }

  if (!fileName) {
    throw new Error("File does not exists");
  }

  const module = await import(resolve(...toResolvePath, fileName));

  return module.default;
};
