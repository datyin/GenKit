/**
 * Checks if the input is a Map and is not empty.
 *
 * @param input The value to check.
 * @returns `true` if `input` is a Map and is not empty, `false` otherwise.
 */
function isNotEmptyMap<K, V>(input: unknown): input is Map<K, V> {
  return input != null && input instanceof Map && input.size > 0;
}

export { isNotEmptyMap };
