import { isIP } from "../isIP";

interface GetIPOptions {
  default?: string;
}

function getIP(input: unknown, options: GetIPOptions = {}): string {
  return isIP(input) ? input : isIP(options.default) ? options.default : "";
}

export { getIP };
export type { GetIPOptions };
