import { isObject } from "../isObject";

function isObjectNotEmpty<T = Record<string, any>>(input: unknown): input is T {
  return isObject(input) && Object.keys(input).length > 0;
}

export { isObjectNotEmpty };
