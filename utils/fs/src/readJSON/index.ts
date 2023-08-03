import JSON5 from "json5";
import { readFile } from "../index";
import type { PathLike } from "node:fs";

interface ReadJSONOptions<T = unknown> {
  default?: T;
}

async function readJSON<T = unknown>(path: PathLike, options: Readonly<ReadJSONOptions<T>> = {}) {
  try {
    const content = await readFile(path, { default: "" });
    const json = JSON5.parse<T>(content);

    return json;
  }
  catch (error) {
    console.error("readJSON", error);
    return options?.default;
  }
}

export { readJSON };
export type { ReadJSONOptions };
