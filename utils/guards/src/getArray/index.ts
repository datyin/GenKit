interface GetArrayOptions<T = unknown> {
  default?: T[];
  typeGuard?: (input: unknown) => input is T;
}

/**
 * Ensure that the input is an array of the specified type.
 *
 * @param input The value to check.
 * @param options Options to control the behavior.
 * @returns An array of the specified type.
 */
function getArray<T = unknown>(input: unknown, options: GetArrayOptions<T> = {}): T[] {
  const output: T[] = [];

  if (Array.isArray(input)) {
    for (const item of input) {
      // if we have a type guard
      if (options.typeGuard != null) {
        if (options.typeGuard(item)) {
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
