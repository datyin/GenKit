import { isArray } from "../isArray";
import type { IsArrayOptions } from "../isArray";

interface IsArrayNotEmptyOptions extends IsArrayOptions {
}

/**
 * Check if input is an array and is not empty
 *
 * @param input The value to check.
 * @returns `true` if `input` is an array and is not empty, `false` otherwise.
 */
function isArrayNotEmpty<T = unknown>(input: unknown, options: Readonly<IsArrayNotEmptyOptions> = {}): input is T[] {
  return isArray(input, options) && input.length > 0;
}

export { isArrayNotEmpty };
export type { IsArrayNotEmptyOptions };
