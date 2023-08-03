import { writeFile as nodeWriteFile } from "node:fs/promises";
import type { PathLike } from "node:fs";

/**
 * Same as `node:fs/promises.writeFile` but wrapped in a try-catch block.
 *
 * @param path Path to the file.
 * @param content Content to write to the file.
 * @returns `true` if successfully written to the file, `false` otherwise.
 */
async function writeFile(path: PathLike, content: any) {
  try {
    await nodeWriteFile(path, content);

    return true;
  }
  catch (error) {
    console.error(error);

    return false;
  }
}

export { writeFile };
