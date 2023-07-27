import { REGEX_IPv6 } from "../isIP";

/**
 * Checks if `input` is an IPv6 address.
 * @param input The value to check.
 * @returns `true` if `input` is an IPv6 address, `false` otherwise.
 */
function isIPv6(input: unknown): input is string {
  return typeof input === "string" && REGEX_IPv6.test(input);
}

export { isIPv6 };
