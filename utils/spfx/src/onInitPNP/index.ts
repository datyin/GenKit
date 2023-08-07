import { SPFx, spfi } from "@pnp/sp";
import type { WebPartContext } from "@microsoft/sp-webpart-base";
import type { SPFI } from "@pnp/sp";
import "@pnp/sp/webs";
import "@pnp/sp/site-users";
import "@pnp/sp/site-groups";
import "@pnp/sp/lists";
import "@pnp/sp/items";
import "@pnp/sp/security";

interface PnP {
  sp: SPFI | undefined;
  context: WebPartContext | undefined;
}

/**
 * Stored PnP instance and context.
 */
const pnp: PnP = {
  /**
   * PnP instance.
   */
  sp: undefined,

  /**
   * Context of the web part.
   */
  context: undefined
};

/**
 * Initialize PnP and store sp instance and context.
 *
 * @param context The context of the web part.
 *
 * @example
 * ```ts
 * onInitPnP(this.context);
 * ```
 */
function onInitPnP(context: WebPartContext) {
  pnp.context = context;
  pnp.sp = spfi().using(SPFx(context));
}

export { pnp, onInitPnP };
export type { PnP };
