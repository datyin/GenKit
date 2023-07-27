/**
 * Checks if the input is a bigint
 * @param input The value to check
 * @returns `true` if the input is a bigint, `false` otherwise
 */
function isBigInt(input: unknown): input is bigint {
  return typeof input === "bigint";
}

export { isBigInt };
