import { toInteger } from "@genkit/guards";
import JSON5 from "json5";
import { writeFile } from "../index";
import type { PathLike } from "node:fs";

interface WriteJSONOptions {
  /**
   * Number of spaces to use for indentation.
   * @default 2
   */
  spaces?: number;
}

async function writeJSON(path: PathLike, content: any, options: Readonly<WriteJSONOptions> = {}) {
  try {
    const state = await writeFile(path, JSON5.stringify(content, null, toInteger(options.spaces, { min: 0, default: 2 })));

    return state;
  }
  catch (error) {
    console.error("writeJSON", error);

    return false;
  }
}

export { writeJSON };
export type { WriteJSONOptions };
