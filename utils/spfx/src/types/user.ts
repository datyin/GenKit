import type { ISiteGroupInfo } from "@pnp/sp/site-groups/types";
import type { ISiteUserInfo } from "@pnp/sp/site-users";

interface ISiteUserInfoWithGroups extends ISiteUserInfo {
  Groups: ISiteGroupInfo[];
}

export type { ISiteUserInfoWithGroups };
