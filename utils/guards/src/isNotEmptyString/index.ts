/**
 * Checks if the input is a string and is not empty
 *
 * @param input The value to check.
 * @returns `true` if `input` is a string and is not empty, `false` otherwise.
 */
function isNotEmptyString(input: unknown): input is string {
  return typeof input === "string" && input.length > 0;
}

export { isNotEmptyString };
