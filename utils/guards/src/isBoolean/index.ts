/**
 * Checks if the input is a boolean
 * @param input The value to check
 * @returns `true` if the input is a boolean, `false` otherwise
 */
function isBoolean(input: unknown): input is boolean {
  return input === true || input === false;
}

export { isBoolean };
