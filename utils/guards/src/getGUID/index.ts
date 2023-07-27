import { isGUID } from "../isGUID";

interface GetGUIDOptions {
  default?: string;
}

function getGUID(input: unknown, options: GetGUIDOptions = {}): string {
  return isGUID(input) ? input : isGUID(options.default) ? options.default : "00000000-0000-0000-0000-000000000000";
}

export { getGUID };
export type { GetGUIDOptions };
