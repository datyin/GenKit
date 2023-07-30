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
  if (value !== null && typeof value === "object") {
    if (seen.has(value)) {
      return "[Circular]";
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
