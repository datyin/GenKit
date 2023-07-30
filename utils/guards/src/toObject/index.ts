import { isArray } from "../isArray";
import { isObject } from "../isObject";
import { isSet } from "../isSet";

interface ToObjectOptions<T = unknown> {
  default?: T;
}

function toObject<T = Record<string, any>>(input: unknown, options: ToObjectOptions<T> = {}): T {
  if (isObject<T>(input)) {
    return input;
  }

  if (isSet<T>(input) || isArray<T>(input)) {
    const obj: Record<string, any> = {};

    let index = 0;

    const items = Array.from(input);

    for (const item of items) {
      obj[`${index}`] = item;
      index++;
    }

    return obj as T;
  }

  return {} as T;
}

export { toObject };
export type { ToObjectOptions };
