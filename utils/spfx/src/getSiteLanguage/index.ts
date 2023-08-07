import { getString } from "@genkit/guards";
import { pnp } from "../onInitPNP";
import type { WebPartContext } from "@microsoft/sp-webpart-base";

/**
 * Get the locale of the current page.
 *
 * @param context Use this context if provided, otherwise use the stored context from `onInitPnP`.
 * @returns The locale of the current page if it can be determined, otherwise "en-US".
 *
 * @example with stored context
 * ```ts
 * const locale = getSiteLanguage();
 * ```
 *
 * @example with specified context
 * ```ts
 * const locale = getSiteLanguage(this.context);
 * ```
 */
function getSiteLanguage(context?: WebPartContext): string {
  if (context != null) {
    return getString(context.pageContext?.cultureInfo?.currentUICultureName) || "en-US";
  }

  if (pnp.context != null) {
    return getString(pnp.context.pageContext?.cultureInfo?.currentUICultureName) || "en-US";
  }

  return "en-US";
}

export { getSiteLanguage };
