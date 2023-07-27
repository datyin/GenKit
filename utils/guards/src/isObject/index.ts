/**
 * Check if the input is an plain object
 *
 * @param input The value to check
 * @returns `true` if the input is an plain object, `false` otherwise
 */
function isObject<T = Record<string, any>>(input: unknown): input is T {
  return (
    input != null &&
    typeof input === "object" &&
    !Array.isArray(input) &&
    input.constructor === Object &&
    Object.prototype.toString.call(input) === "[object Object]"
  );
}

export { isObject };
