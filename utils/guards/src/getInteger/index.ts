import { getMinMaxInteger } from "../getMinMaxInteger";
import { isInteger } from "../isInteger";
import type { IsIntegerOptions } from "../isInteger";

interface GetIntegerOptions extends IsIntegerOptions {
  default?: number;
  min?: number;
  max?: number;
}

function getInteger(input: unknown, options: GetIntegerOptions = {}): number {
  let value = isInteger(input) ? input : isInteger(options.default) ? options.default : 0;

  const [min, max] = getMinMaxInteger(options.min, options.max);

  if (value > max) value = max;
  if (value < min) value = min;

  return value;
}

export { getInteger };
export type { GetIntegerOptions };
