import { getMinMaxInteger } from "../getMinMaxInteger";
import { isInteger } from "../isInteger";
import type { IsIntegerOptions } from "../isInteger";

interface GetIntegerOptions extends IsIntegerOptions {
  default?: number;
  min?: number;
  max?: number;
}

function getInteger(input: unknown, options: GetIntegerOptions = {}): number {
  const value = isInteger(input) ? input : isInteger(options.default) ? options.default : 0;

  const [min, max] = getMinMaxInteger(options.min, options.max);

  return value >= min && value <= max ? value : min;
}

export { getInteger };
export type { GetIntegerOptions };
