import { isBoolean } from "../isBoolean";

interface getBooleanOptions {
  default?: boolean;
}

function getBoolean(input: unknown, options: getBooleanOptions = {}): boolean {
  return isBoolean(input) ? input : isBoolean(options.default) ? options.default : false;
}

export { getBoolean };
export type { getBooleanOptions };
