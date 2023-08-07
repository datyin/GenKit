import { getSpfxErrorMessage } from "../getSpfxErrorMessage";
import { pnp } from "../onInitPNP";

/**
 * Get all role definitions from the current site collection.
 */
async function getRoleDefinitions() {
  if (!pnp.sp) {
    return { role_definitions: [], error: "PnP is not initialized." };
  }

  try {
    const role_definitions = await pnp.sp.web.roleDefinitions();

    return { role_definitions };
  }
  catch (error) {
    const message = await getSpfxErrorMessage(error);

    return { role_definitions: [], error: message };
  }
}

export { getRoleDefinitions };
