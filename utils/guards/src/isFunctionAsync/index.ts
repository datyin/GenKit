import { getType } from "../getType";
import type { AnyAsyncFunc } from "../isFunction";

/**
 * Check if the input is an async function and not a class
 * @param input
 */
function isFunctionAsync<T = AnyAsyncFunc>(input: unknown): input is T {
  const type = getType(input);

  return (
    input != null &&
    type === "AsyncFunction" &&
    !(input as any).prototype?.constructor?.toString().startsWith("class")
  );
}

export { isFunctionAsync };
