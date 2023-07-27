import { getNumeric } from "../getNumeric";
import { isNumber } from "../isNumber";
import type { IsNumberOptions } from "../isNumber";

interface ToNumberOptions extends IsNumberOptions {
  default?: number;
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
