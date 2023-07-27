import { isURL } from "../isURL";

interface GetURLOptions {
  /**
   * The default value to return if the input is not a URL.
   * @default new URL("https://localhost")
   */
  default?: URL;
}

function getURL(input: unknown, options: GetURLOptions = {}): URL {
  try {
    if (isURL(input)) {
      return input;
    }

    if (isURL(options.default)) {
      return options.default;
    }
  }
  catch {}

  return new URL("https://localhost");
}

export { getURL };
export type { GetURLOptions };
