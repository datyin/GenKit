import { getNumeric } from "../getNumeric";
import { isInteger } from "../isInteger";
import { isNumber } from "../isNumber";
import type { IsIntegerOptions } from "../isInteger";

interface ToIntegerOptions extends IsIntegerOptions {
  default?: number;
  math?: "floor" | "ceil" | "round";
}

function toInteger(input: unknown, options: ToIntegerOptions = {}): number {
  const fallback = isInteger(options.default) ? options.default : 0;
  const numeric = getNumeric(input, {
    default: `${fallback}`,
    convertHexadecimal: true
  });

  const value = Number.parseFloat(numeric);

  if (isInteger(value, options)) {
    return value;
  }

  if (isNumber(value)) {
    return Math[options.math ?? "ceil"](value);
  }

  return fallback;
}

export { toInteger };
export type { ToIntegerOptions };
