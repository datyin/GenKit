import { getTypeOf } from "../getTypeOf";
import type { AnyAsyncFunc } from "../isFunction";

/**
 * Check if the input is an async function and not a class
 * @param input
 */
function isFunctionAsync<T = AnyAsyncFunc>(input: unknown): input is T {
  const type = getTypeOf(input);

  return (
    input != null &&
    type === "AsyncFunction" &&
    !(input as any).prototype?.constructor?.toString().startsWith("class")
  );
}

export { isFunctionAsync };
