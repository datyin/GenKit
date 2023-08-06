import { isValidBIC } from "ibantools";
import { getString } from "../getString";

/**
 * Use `ibantools` to check if the input is a valid BIC with extra input formatting.
 *
 * @param input The value to check
 * @returns `true` if the input is a valid BIC, `false` otherwise
 *
 * @see https://www.npmjs.com/package/ibantools
 */
function isBIC(input: unknown): input is string {
  const value = getString(input).toUpperCase().replace(/\s+/g, "");

  if (value.length === 0 || value === "INFINITY") {
    return false;
  }

  return isValidBIC(value);
}

export { isBIC };
