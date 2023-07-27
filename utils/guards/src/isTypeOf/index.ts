import { getType } from "../getType";

/**
 * Checks if the input is of the specified type.
 *
 * @param input The value to check.
 * @param type The type to check against.
 * @returns `true` if the input is of the specified type, `false` otherwise.
 */
function isTypeOf<T = unknown>(input: unknown, type: string): input is T {
  return getType(input) === type;
}

export { isTypeOf };
