import { isString, isObject, toString } from "../index";

interface GetErrorMessageOptions {
  default?: string;
}

/**
 * Extract the error message from the input
 * @param input The value to extract the error message from
 * @returns The error message if any
 */
function getErrorMessage(input: unknown, options: Readonly<GetErrorMessageOptions> = {}): string {
  if (isString(input)) {
    return input;
  }

  if (isObject(input)) {
    if ("message" in input) return toString(input.message);
    if ("reason" in input) return toString(input.reason);
    if ("error" in input) return toString(input.error);
  }

  return isString(options.default) ? options.default : "";
}

export { getErrorMessage };
export type { GetErrorMessageOptions };
