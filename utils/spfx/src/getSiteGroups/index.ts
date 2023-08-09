import { getSpfxErrorMessage, pnp } from "../index";

async function getSiteGroups() {
  if (!pnp.sp) {
    return { groups: [], error: "PnP is not initialized." };
  }

  try {
    const groups = await pnp.sp.web.siteGroups();

    return { groups };
  }
  catch (error) {
    const message = await getSpfxErrorMessage(error);

    return { groups: [], error: message };
  }
}

export { getSiteGroups };
