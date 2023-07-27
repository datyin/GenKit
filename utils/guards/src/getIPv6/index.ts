import { isIPv6 } from "../isIPv6";

interface GetIPv6Options {
  default?: string;
}

function getIPv6(input: unknown, options: GetIPv6Options = {}): string {
  return isIPv6(input) ? input : isIPv6(options.default) ? options.default : "";
}

export { getIPv6 };
export type { GetIPv6Options };
