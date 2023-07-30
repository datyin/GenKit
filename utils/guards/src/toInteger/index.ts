import { getInteger } from "..";
import { getNumeric } from "../getNumeric";
import { isInteger } from "../isInteger";
import { isNumber } from "../isNumber";
import type { IsIntegerOptions } from "../isInteger";

interface ToIntegerOptions extends IsIntegerOptions {
  default?: number;
  math?: "floor" | "ceil" | "round";
  min?: number;
  max?: number;
}

function toInteger(input: unknown, options: ToIntegerOptions = {}): number {
  const fallback = isInteger(options.default) ? options.default : 0;
  const numeric = getNumeric(input, {
    default: `${fallback}`,
    convertHexadecimal: true
  });

  const value = Number.parseFloat(numeric);

  if (isInteger(value, options)) {
    return getInteger(value, { min: options.min, max: options.max });
  }

  if (isNumber(value)) {
    return getInteger(Math[options.math ?? "ceil"](value), { min: options.min, max: options.max });
  }

  return getInteger(fallback, { min: options.min, max: options.max });
}

export { toInteger };
export type { ToIntegerOptions };
