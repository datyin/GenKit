import { isArray, isIntegerPositive, isObject, isStringNotEmpty } from "@genkit/guards";
import type { ISiteUserInfoWithGroups } from "../types/user";

function isSiteUserWithGroup(input: unknown): input is ISiteUserInfoWithGroups {
  return (
    isObject<ISiteUserInfoWithGroups>(input) &&
    isIntegerPositive(input.Id) &&
    isStringNotEmpty(input.Title) &&
    isStringNotEmpty(input.LoginName) &&
    isArray(input.Groups)
  );
}

export { isSiteUserWithGroup };
