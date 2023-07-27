import { isString } from "../isString";

/**
 * Regular expression for email validation.
 *
 * Adopted from:
 * @see https://github.dev/colinhacks/zod/blob/master/src/types.ts
 *
 * @category Email
 * ```
 */
const REGEX_EMAIL = /^([A-Z0-9_+-]+\.?)*[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i;

/**
 * Checks if the input is a valid email address
 * @param input The value to check
 * @returns `true` if the input is a valid email address, `false` otherwise
 */
function isEmail(input: unknown): input is string {
  return isString(input) && REGEX_EMAIL.test(input);
}

export { isEmail, REGEX_EMAIL };
