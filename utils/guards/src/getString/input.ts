import { isString } from "../isString";

interface GetStringOptions {
  default?: string;
}

function getString(input: unknown, options: GetStringOptions = {}): string {
  if (input == null) {
    return isString(options.default) ? options.default : "";
  }

  if (input instanceof String) {
    return input.toString();
  }

  return isString(input) ? input : isString(options.default) ? options.default : "";
}

export { getString };
export type { GetStringOptions };
