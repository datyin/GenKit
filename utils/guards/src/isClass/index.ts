/**
 * Check if input is a class
 *
 * @param input The value to check.
 * @returns `true` if the input is a class, `false` otherwise.
 */
function isClass<T = unknown>(input: unknown): input is T {
  return (
    input != null &&
    typeof input === "function" &&
    input.prototype?.constructor?.toString != null &&
    input.prototype.constructor.toString().startsWith("class")
  );
}

export { isClass };
