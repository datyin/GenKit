import { getSpfxErrorMessage } from "../getSpfxErrorMessage";
import { pnp } from "../onInitPNP";
import type { ISiteUserInfoWithGroups } from "../types/user";

interface GetSiteCurrentUserResponse {
  user: ISiteUserInfoWithGroups | undefined;
  error?: string;
}

async function getSiteCurrentUser(): Promise<GetSiteCurrentUserResponse> {
  if (!pnp.sp) {
    return { user: undefined, error: "PnP is not initialized." };
  }

  try {
    const user = await pnp.sp.web.currentUser.expand("Groups")() as ISiteUserInfoWithGroups;

    if (user != null && !Array.isArray(user.Groups)) {
      user.Groups = [];
    }

    return { user };
  }
  catch (error) {
    const message = await getSpfxErrorMessage(error);

    return { user: undefined, error: message };
  }
}

export { getSiteCurrentUser };
export type { GetSiteCurrentUserResponse };
