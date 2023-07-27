/**
 * Checks if `input` is an empty `Map` object.
 *
 * @param input The value to check
 * @returns `true` if `input` is an empty `Map` object, `false` otherwise
 */
function isEmptyMap<K = unknown, V = unknown>(input: unknown): input is Map<K, V> {
  return input != null && input instanceof Map && input.size === 0;
}

export { isEmptyMap };
