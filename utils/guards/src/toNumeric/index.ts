import { getNumeric } from "../getNumeric";
import { isNumber } from "../isNumber";
import type { IsIntegerOptions } from "../isInteger";

interface ToNumberOptions extends IsIntegerOptions {
  default?: number;

  /**
   * The number of digits after the decimal point.
   * @default -1 (no limit)
   */
  decimals?: number;
}

function toNumber(input: unknown, options: ToNumberOptions = {}): number {
  const fallback = isNumber(options.default) ? options.default : 0;
  const numeric = getNumeric(input, {
    default: `${fallback}`,
    convertHexadecimal: true
  });

  const value = Number.parseFloat(numeric);

  if (isNumber(value)) {
    return value;
  }

  return fallback;
}

export { toNumber };
export type { ToNumberOptions };
