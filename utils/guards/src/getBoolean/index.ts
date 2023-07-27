import { isBoolean } from "../isBoolean";

/**
 * Options to control the behavior of {@link getBoolean}.
 * @public
 * @category Getters
 */
interface GetBooleanOptions {
  default?: boolean;
}

/**
 * Ensure that the value is a boolean.
 * @param input The value to check.
 * @param options Options to control the behavior.
 * @returns A boolean.
 *
 * @category Getters
 * @example
 * ```ts
 * getBoolean(true); // true
 * getBoolean(1); // false
 * getBoolean("asd", { default: true }); // true
 * ```
 */
function getBoolean(input: unknown, options: GetBooleanOptions = {}): boolean {
  return isBoolean(input) ? input : isBoolean(options.default) ? options.default : false;
}

export { getBoolean };
export type { GetBooleanOptions };
