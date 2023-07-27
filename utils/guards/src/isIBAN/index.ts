import { isValidIBAN } from "ibantools";
import { getString } from "../getString/input";

interface IsIBANOptions {
  /**
   * If `true`, the function will check if the input is a valid QR-IBAN.
   * @default true
   */
  readonly allowQRIBAN?: boolean;
}

/**
 * Checks if the input is a valid IBAN
 * @param input The value to check
 * @param options The options for the function
 * @returns `true` if the input is a valid IBAN, `false` otherwise
 */
function isIBAN(input: unknown, options: IsIBANOptions = {}): input is string {
  const value = getString(input).toUpperCase().replace(/\s+/g, "").trim();

  return isValidIBAN(value, { allowQRIBAN: options.allowQRIBAN !== false });
}

export { isIBAN };
export type { IsIBANOptions };
