import { isDebtorNumber } from "../isDebtorNumber";

interface GetDebtorNumberOptions {
  default?: number;
}

/**
 * Ensure the input is a valid debtor number
 * @param input The value to check
 * @param options The options to use when checking
 * @returns The input if it is a valid debtor number, otherwise the default value if it is a valid debtor number, otherwise 0
 */
function getDebtorNumber(input: unknown, options: Readonly<GetDebtorNumberOptions> = {}): number {
  return isDebtorNumber(input) ? input : isDebtorNumber(options.default) ? options.default : 0;
}

export { getDebtorNumber };
export type { GetDebtorNumberOptions };
