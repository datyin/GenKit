/**
 * Checks if `input` is a `Map` object.
 *
 * @param input The value to check.
 * @returns `true` if `input` is a `Map` object, `false` otherwise.
 */
function isMap<K, V>(input: unknown): input is Map<K, V> {
  return input != null && input instanceof Map;
}

export { isMap };
