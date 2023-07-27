import { isInteger } from "../isInteger";

interface IsDebtorNumberOptions {
  /**
   * If `true`, the input is allowed to be a creditor number
   * @default false
   */
  includeCreditorNumbers?: boolean;
}

/**
 * Checks if the input is a debtor number
 *
 * @param input The value to check
 * @returns `true` if the input is a debtor number, `false` otherwise
 *
 * @see https://germania-inkasso.de/lexikon/debitorennummer/
 */
function isDebtorNumber(input: unknown, options: IsDebtorNumberOptions = {}): input is number {
  if (isInteger(input) && input >= 10001 && input <= 69999) {
    return true;
  }

  if (options.includeCreditorNumbers === true && isInteger(input) && input >= 70000 && input <= 99999) {
    return true;
  }

  return false;
}

export { isDebtorNumber };
export type { IsDebtorNumberOptions };
