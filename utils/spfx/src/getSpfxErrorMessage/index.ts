import { toString, getErrorMessage } from "@genkit/guards";
import type { HttpRequestError } from "@pnp/queryable";

/**
 * Get human readable error message from SPFx error.
 *
 * @param input The error to get the message from.
 * @returns The human readable error message.
 *
 * @example
 * ```ts
 * const message = await getSpfxErrorMessage(error);
 * ```
 */
async function getSpfxErrorMessage(input: unknown): Promise<string> {
  if ((input as HttpRequestError)?.isHttpRequestError) {
    // we can read the json from the response
    const json = await (input as HttpRequestError).response.json() as Record<string, any>;

    // if we have a value property we can show it
    if (typeof json["odata.error"] === "object") {
      return toString(json["odata.error"]?.message?.value);
    }
    else if (input && typeof input === "object" && "message" in input) {
      return toString(input.message);
    }

    // add of course you have access to the other properties and can make choices on how to act
    if ((input as HttpRequestError).status === 404) {
      return toString((input as HttpRequestError).statusText);
    }
  }

  return getErrorMessage(input);
}

export { getSpfxErrorMessage };
