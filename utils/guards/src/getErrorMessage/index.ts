import { toString, isStringNotEmpty } from "../index";

/**
 * Extract the error message from the input
 * @param input The value to extract the error message from
 * @returns The error message if any
 */
function getErrorMessage(input: unknown): string {
  if (isStringNotEmpty(input)) {
    return input;
  }

  if (input != null && typeof input === "object" && !Array.isArray(input)) {
    if ("message" in input) return toString(input.message);
    if ("reason" in input) return toString(input.reason);
    if ("error" in input) return toString(input.error);
  }

  return "";
}

export { getErrorMessage };
