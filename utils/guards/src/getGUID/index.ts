import { isGuid } from "../isGuid";

interface GetGuidptions {
  default?: string;
}

function getGuid(input: unknown, options: Readonly<GetGuidptions> = {}): string {
  return isGuid(input) ? input : isGuid(options.default) ? options.default : "00000000-0000-0000-0000-000000000000";
}

export { getGuid };
export type { GetGuidptions };
