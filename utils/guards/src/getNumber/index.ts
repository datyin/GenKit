import { getMinMaxNumber } from "..";
import { isNumber } from "../isNumber";
import type { IsNumberOptions } from "../isNumber";

interface GetNumberOptions extends IsNumberOptions {
  default?: number;
  min?: number;
  max?: number;
}

function getNumber(input: unknown, options: GetNumberOptions = {}): unknown {
  let value = isNumber(input) ? input : isNumber(options.default) ? options.default : 0;

  const [min, max] = getMinMaxNumber(options.min, options.max);

  if (value > max) value = max;
  if (value < min) value = min;

  return value;
}

export { getNumber };
export type { GetNumberOptions };
