/**
 * Options to control the behavior of {@link getArray}.
 * @public
 * @category Getters
 * @typeParam T - The type of the items in the array.
 */
interface GetArrayOptions<T = unknown> {
  /**
   * The default value to return if the input is not an array.
   * @default []
   */
  default?: T[];

  /**
   * Filter the input array to include only items that match the function.
   * @param input The item to check.
   * @returns `true` if the item should be included in the output array.
   */
  filter?: (input: unknown) => boolean;
}

/**
 * Ensure that the input is an array of the specified type.
 *
 * @param input The value to check.
 * @param options Options to control the behavior.
 * @returns An array of the specified type.
 *
 * @category Getters
 */
function getArray<T = unknown>(input: unknown, options: GetArrayOptions<T> = {}): T[] {
  const output: T[] = [];

  if (Array.isArray(input)) {
    for (const item of input) {
      // if we have a type guard
      if (options.filter != null) {
        if (options.filter(item)) {
          output.push(item);
        }
      }
      else {
        // otherwise just push every item
        output.push(item as T);
      }
    }
  }

  return output;
}

export { getArray };
export type { GetArrayOptions };
