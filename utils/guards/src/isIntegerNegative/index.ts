import { isInteger } from "../isInteger";
import type { IsIntegerOptions } from "../isInteger";

interface IsIntegerNegativeOptions extends IsIntegerOptions {
}

/**
 * Checks if input is a negative integer
 *
 * @param input The value to check.
 * @param options The options for the check.
 * @returns `true` if `input` is a negative integer, `false` otherwise.
 */
function isIntegerNegative(input: unknown, options: IsIntegerNegativeOptions = {}): input is number {
  return isInteger(input, options) && input < 0;
}

export { isIntegerNegative };
export type { IsIntegerNegativeOptions };
