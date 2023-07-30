import { getTypeOf } from "../getTypeOf";
import type { AnyFunc } from "../isFunction";

/**
 * Check if the input is an async function and not a class
 * @param input
 */
function isFunctionSync<T = AnyFunc>(input: unknown): input is T {
  const type = getTypeOf(input);

  return (
    input != null &&
    type === "Function" &&
    !(input as any).prototype?.constructor?.toString().startsWith("class")
  );
}

export { isFunctionSync };
