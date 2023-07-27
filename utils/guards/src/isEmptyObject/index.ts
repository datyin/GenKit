import { isObject } from "../isObject";

/**
 * Check if the input is an plain object and has no keys
 *
 * @param input The value to check
 * @returns `true` if the input is an plain object and has no keys, `false` otherwise
 */
function isEmptyObject<T = Record<string, never>>(input: unknown): input is T {
  return isObject(input) && Object.keys(input).length === 0;
}

export { isEmptyObject };
