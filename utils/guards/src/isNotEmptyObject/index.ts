import { isObject } from "../isObject";

function isNotEmptyObject<T = Record<string, any>>(input: unknown): input is T {
  return isObject(input) && Object.keys(input).length > 0;
}

export { isNotEmptyObject };
