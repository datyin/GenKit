/**
 * Check if input is an array and is not empty
 *
 * @param input The value to check.
 * @returns `true` if `input` is an array and is not empty, `false` otherwise.
 */
function isNotEmptyArray<T = unknown>(input: unknown): input is T[] {
  return Array.isArray(input) && input.length > 0;
}

export { isNotEmptyArray };
