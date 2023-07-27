/**
 * Regular expression for IPv4 validation.
 *
 * Adopted from:
 * @see https://github.dev/colinhacks/zod/blob/master/src/types.ts
 * ```
 */
const REGEX_IPv4 = /* PURE */ /^(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))$/;

/**
 * Regular expression for IPv6 validation.
 *
 * Adopted from:
 * @see https://github.dev/colinhacks/zod/blob/master/src/types.ts
 * ```
 */
const REGEX_IPv6 = /* PURE */ /^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/;

/**
 * Checks if `input` is an IP address.
 *
 * @param input The value to check.
 * @returns `true` if `input` is an IP address, `false` otherwise.
 */
function isIP(input: unknown): input is string {
  return typeof input === "string" && (REGEX_IPv4.test(input) || REGEX_IPv6.test(input));
}

export { isIP, REGEX_IPv4, REGEX_IPv6 };
