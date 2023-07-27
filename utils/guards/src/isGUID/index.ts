/**
 * Regular expression for UUID/GUID validation.
 *
 * Adopted from:
 * @see https://github.dev/colinhacks/zod/blob/master/src/types.ts
 * ```
 */
const REGEX_GUID = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i;

/**
 * Checks if `input` is a UUID/GUID.
 *
 * @param input The value to check.
 * @returns `true` if `input` is a UUID/GUID, `false` otherwise.
 */
function isGUID(input: unknown): input is string {
  return typeof input === "string" && REGEX_GUID.test(input);
}

export { isGUID, REGEX_GUID };
