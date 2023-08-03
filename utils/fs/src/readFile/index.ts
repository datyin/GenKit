import { readFile as nodeReadFile } from "node:fs/promises";
import { getString } from "@genkit/guards";
import type { PathLike } from "node:fs";

interface ReadFileOptions {
  /**
   * Default value to return if failed to read file.
   * @default ""
   */
  default?: string;
}

/**
 * It is `node:fs/promises.readFile` under the hood, with:
 * - `encoding` set to `utf8`.
 * - Wrapped in a try-catch block.
 * - Return `options.default` if failed to read file.
 *
 * @param path
 * @param options
 * @returns
 */
async function readFile(path: PathLike, options: Readonly<ReadFileOptions> = {}): Promise<string> {
  try {
    const content = await nodeReadFile(path, "utf8");

    return content;
  }
  catch (error) {
    console.error(error);
    return getString(options.default);
  }
}

export { readFile };
export type { ReadFileOptions };
