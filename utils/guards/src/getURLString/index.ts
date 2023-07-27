import { isURLString } from "../isURLString";

interface GetURLStringOptions {
  /**
   * The default value to return if the input is not a valid URL string.
   * @default "https://localhost"
   */
  default?: string;
}

function getURLString(input: unknown, options: GetURLStringOptions = {}): string {
  return isURLString(input) ? input : isURLString(options.default) ? options.default : "https://localhost";
}

export { getURLString };
export type { GetURLStringOptions };
