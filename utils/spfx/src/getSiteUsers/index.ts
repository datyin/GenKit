import { getArray, getEmail } from "@genkit/guards";
import { getSpfxErrorMessage } from "../getSpfxErrorMessage";
import { pnp } from "../onInitPNP";
import type { ISiteUserInfoWithGroups } from "../types/user";
import type { ISiteGroupInfo } from "@pnp/sp/site-groups/types";

interface GetSiteUsersResponse {
  users: ISiteUserInfoWithGroups[];
  error?: string;
}

async function getSiteUsers(): Promise<GetSiteUsersResponse> {

  if (pnp.sp == null) {
    return { users: [], error: "PnP is not initialized." };
  }

  try {
    const users: ISiteUserInfoWithGroups[] = [];

    const siteCollectionUsers = await pnp.sp.web.siteUsers.expand("Groups")();

    for (const user of siteCollectionUsers) {
      // ensure that user have an email
      const email = user.Email || user.LoginName.split("|")[2];

      user.Email = getEmail(email);

      users.push({
        ...user,
        Groups: getArray<ISiteGroupInfo>((user as ISiteUserInfoWithGroups).Groups)
      });
    }

    return { users };
  }
  catch (error) {
    const message = await getSpfxErrorMessage(error);

    return { users: [], error: message };
  }
}

export { getSiteUsers };
export type { GetSiteUsersResponse };
