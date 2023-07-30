import { isGuid } from "../isGuid";
import { isGuidEmpty } from "../isGuidEmpty";

function isGuidNotEmpty(input: unknown): input is string {
  return isGuid(input) && !isGuidEmpty(input);
}

export { isGuidNotEmpty };
