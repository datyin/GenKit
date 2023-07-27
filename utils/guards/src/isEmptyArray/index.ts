/**
 * Check if input is an array with no elements
 * @param input The value to check
 * @returns `true` if the input is an array with no elements, `false` otherwise
 */
function isEmptyArray<T = unknown>(input: unknown): input is T[] {
  return Array.isArray(input) && input.length === 0;
}

export { isEmptyArray };
