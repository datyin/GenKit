import { getTypeOf } from "../getTypeOf";

function isPromise<T = unknown>(input: unknown): input is Promise<T> {
  return input != null && getTypeOf(input) === "Promise" && typeof (input as Promise<T>).then === "function";
}

export { isPromise };
