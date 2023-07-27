import { isDate } from "../isDate";

/**
 * Options to control the behavior of {@link getDate}.
 */
interface GetDateOptions {
  default?: Date;
}

/**
 * Ensure that the value is a Date.
 * @param input The value to check.
 * @param options Options to control the behavior.
 * @returns A Date.
 *
 * @category Getters
 * @example
 * ```ts
 * getDate(new Date()); // Date
 * getDate(1); // Date
 * getDate("asd", { default: new Date("2023-05-05") }); // Date("2023-05-05")
 * ```
 */
function getDate(input: unknown, options: GetDateOptions = {}): Date {
  return isDate(input) ? input : isDate(options.default) ? options.default : new Date();
}

export { getDate };
export type { GetDateOptions };
