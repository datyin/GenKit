import { getType } from "../getType";

type AnyFunc = (...args: any[]) => any;

type AnyAsyncFunc = (...args: any[]) => Promise<any>;

/**
 * Check if the input is a function (async or sync) and not a class
 * @param input
 */
function isFunction<T = AnyFunc | AnyAsyncFunc>(input: unknown): input is T {
  const type = getType(input);

  return (
    input != null &&
    (type === "Function" || type === "AsyncFunction") &&
    !(input as any).prototype?.constructor?.toString().startsWith("class")
  );
}

export { isFunction };
export type { AnyFunc, AnyAsyncFunc };
