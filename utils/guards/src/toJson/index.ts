import { isFunction } from "..";
import { getInteger } from "../getInteger";
import { getString } from "../getString";

interface ToJSONOptions {
  default?: string;

  /**
   * The number of spaces to use for indentation.
   * - `0` - minifies the output.
   * @default 2
   */
  spaces?: number;
}

function replacer(key: unknown, value: unknown, seen: WeakSet<any>) {
  if (value === undefined) {
    return { __genkit_meta_type__: "undefined" };
  }
  else if (isFunction(value)) {
    return {
      __genkit_meta_type__: "function",
      __genkit_meta_source__: value.toString()
    };
  }
  else if (Number.isNaN(value)) {
    return { __genkit_meta_type__: "NaN" };
  }
  else if (value === Number.POSITIVE_INFINITY) {
    return { __genkit_meta_type__: "Infinity" };
  }
  else if (value === Number.NEGATIVE_INFINITY) {
    return { __genkit_meta_type__: "-Infinity" };
  }
  else if (value instanceof Map) {
    return {
      __genkit_meta_type__: "Map",
      __genkit_meta_value__: Array.from(value.entries())
    };
  }
  else if (value instanceof Set) {
    return {
      __genkit_meta_type__: "Set",
      __genkit_meta_value__: Array.from(value.values())
    };
  }
  else if (value instanceof RegExp) {
    return {
      __genkit_meta_type__: "RegExp",
      __genkit_meta_source__: value.source,
      __genkit_meta_flags__: value.flags
    };
  }
  else if (typeof value === "symbol") {
    return {
      __genkit_meta_type__: "Symbol",
      __genkit_meta_description__: value.description
    };
  }
  else if (value !== null && typeof value === "object") {
    if (seen.has(value)) {
      return { __genkit_meta_type__: "circular" };
    }

    seen.add(value);

    const newValue = Array.isArray(value) ? [] : {};

    for (const [key2, value2] of Object.entries(value)) {
      newValue[key2] = replacer(key2, value2, seen);
    }

    seen.delete(value);

    return newValue;
  }

  return value;
}

/**
 * JSON.stringify with support for circular references, maps, sets, and other iterables.
 * @param input
 * @param options
 * @returns
 */
function toJSON(input: unknown, options: Readonly<ToJSONOptions> = {}): string {
  try {
    const seen = new WeakSet();
    const spaces = getInteger(options?.spaces, { min: 0, max: 10, default: 2 });

    return JSON.stringify(input, (key, value) => replacer(key, value, seen), spaces);
  }
  catch (error) {
    return getString(options?.default);
  }
}

export { toJSON };
export type { ToJSONOptions };
