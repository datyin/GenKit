/**
 * Checks if `input` is an empty `Set` object.
 *
 * @param input The value to check.
 * @returns `true` if `input` is an empty `Set` object, `false` otherwise.
 */
function isSetEmpty<V = unknown>(input: unknown): input is Set<V> {
  return input != null && input instanceof Set && input.size === 0;
}

export { isSetEmpty };
