import { isString } from "../isString";

interface GetStringOptions {
  default?: string;
}

function getString(input: unknown, options: GetStringOptions = {}): string {
  return isString(input) ? input : isString(options.default) ? options.default : "";
}

export { getString };
export type { GetStringOptions };
