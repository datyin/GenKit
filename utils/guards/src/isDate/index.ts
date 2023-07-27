/**
 * Check if the input is a valid Date object
 * @param input The value to check
 * @returns `true` if the input is a valid Date object, `false` otherwise
 */
function isDate(input: unknown): input is Date {
  return input != null && input instanceof Date && !Number.isNaN(input.getTime());
}

export { isDate };
