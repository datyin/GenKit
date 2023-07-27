import { getArray } from "../getArray";
import { isBoolean } from "../isBoolean";

interface ToBooleanOptions {
  default?: boolean;

  /**
   * The values to consider true
   * @default ["yes", "ja", "on", "enabled"]
   */
  trueValues?: (string | number)[];
}

function toBoolean(input: unknown, options: ToBooleanOptions = {}): boolean {
  if (isBoolean(input)) {
    return true;
  }
  else if (input === 1) {
    return true;
  }
  else if (input === 0) {
    return false;
  }

  const trueValues = getArray(options.trueValues, { default: ["yes", "ja", "on", "enabled"] });

  if (trueValues.length > 0) {
    return trueValues.some((value) => `${value}`.toLowerCase() === `${input}`.toLowerCase());
  }

  return options.default === true;
}

export { toBoolean };
export type { ToBooleanOptions };
