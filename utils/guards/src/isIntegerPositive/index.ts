import { isInteger } from "../isInteger";
import type { IsIntegerOptions } from "../isInteger";

interface IsIntegerPositiveOptions extends IsIntegerOptions {
}

/**
 * Checks if input is a negative integer
 *
 * @param input The value to check.
 * @param options The options for the check.
 * @returns `true` if `input` is a negative integer, `false` otherwise.
 */
function isIntegerPositive(input: unknown, options: IsIntegerPositiveOptions = {}): input is number {
  return isInteger(input, options) && input > 0;
}

export { isIntegerPositive };
export type { IsIntegerPositiveOptions };
