import { isIPv4 } from "../isIPv4";

interface GetIPv4Options {
  default?: string;
}

function getIPv4(input: unknown, options: GetIPv4Options = {}): string {
  return isIPv4(input) ? input : isIPv4(options.default) ? options.default : "";
}

export { getIPv4 };
export type { GetIPv4Options };
