import { isNumber } from "../isNumber";
import type { IsNumberOptions } from "../isNumber";

interface GetNumberOptions extends IsNumberOptions {
  default?: number;
}

function getNumber(input: unknown, options: GetNumberOptions = {}): unknown {
  return isNumber(input, options) ? input : options.default;
}

export { getNumber };
export type { GetNumberOptions };
