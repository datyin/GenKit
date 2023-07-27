/**
 * Checks if the input is a Set and is not empty.
 *
 * @param input The value to check.
 * @returns `true` if `input` is a Set and is not empty, `false` otherwise.
 */
function isNotEmptySet<V>(input: unknown): input is Set<V> {
  return input != null && input instanceof Set && input.size > 0;
}

export { isNotEmptySet };
