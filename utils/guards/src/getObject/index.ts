import { isObject } from "../isObject";

interface GetObjectOptions {
  default?: Record<string, any>;
}

function getObject<T = Record<string, any>>(input: unknown, options: GetObjectOptions = {}): T {
  return isObject<T>(input) ? input : isObject<T>(options.default) ? options.default : {} as T;
}

export { getObject };
export type { GetObjectOptions };
