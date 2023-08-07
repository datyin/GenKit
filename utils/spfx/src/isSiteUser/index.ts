import { isIntegerPositive, isObject, isStringNotEmpty } from "@genkit/guards";
import type { ISiteUserInfo } from "@pnp/sp/site-users";

function isSiteUser(input: unknown): input is ISiteUserInfo {
  return (
    isObject<ISiteUserInfo>(input) &&
    isIntegerPositive(input.Id) &&
    isStringNotEmpty(input.Title) &&
    isStringNotEmpty(input.LoginName)
  );
}

export { isSiteUser };
