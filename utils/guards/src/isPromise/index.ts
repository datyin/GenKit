import { getType } from "../getType";

function isPromise<T = unknown>(input: unknown): input is Promise<T> {
  return input != null && getType(input) === "Promise" && typeof (input as Promise<T>).then === "function";
}

export { isPromise };
